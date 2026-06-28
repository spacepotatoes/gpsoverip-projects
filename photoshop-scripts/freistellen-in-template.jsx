/*
 * Freistellen + in Sperrzonen-Template platzieren
 * ================================================
 *
 * Automatisiert den Workflow: Foto vom Hintergrund freistellen (Select Subject),
 * proportional in den erlaubten Bereich eines Templates einpassen, Layer sinnvoll
 * benennen und als PSD + PNG speichern.
 *
 * VORAUSSETZUNGEN:
 * - Genau 2 Dokumente sind in Photoshop offen:
 *     1. Das Template (PSD) — AKTIVES Dokument beim Start des Skripts.
 *        Enthält irgendwo (top-level oder in einer Zeichenfläche/Gruppe) eine
 *        ausgeblendete Ebene ("Sperrzone") — deren bemalter/undurchsichtiger
 *        Bereich markiert die Zone, in der NICHTS platziert werden darf.
 *        Der erlaubte Zielbereich wird automatisch als Bounding-Box des
 *        TRANSPARENTEN Rest-Bereichs dieser Ebene berechnet. Das funktioniert
 *        exakt, wenn der erlaubte Bereich rechteckig ist.
 *     2. Das Foto (JPG/PNG/...), das freigestellt werden soll.
 * - Die Sperrzonen-Ebene ist eine normale Pixel-Ebene (kein Smart Object).
 *
 * AUSFÜHREN:
 * Photoshop > Datei > Skripten > Durchsuchen... > diese Datei wählen.
 * (Oder in den Photoshop-"Presets/Scripts"-Ordner legen, dann erscheint sie
 * direkt im Skripten-Menü.)
 *
 * ANPASSEN:
 * Siehe CONFIG-Block unten (Name der Sperrzonen-Ebene im Ergebnis, Zielordner).
 */

(function () {
    var CONFIG = {
        lockLayerName: "Sperrzone_kein_Bildinhalt",
        outputFolder: Folder.myDocuments
    };

    function fail(msg) {
        alert("Freistellen-Skript abgebrochen:\n\n" + msg);
        throw new Error(msg);
    }

    function sanitizeBaseName(name) {
        var base = name.replace(/\.[^\.]+$/, "");
        return base.replace(/[^a-zA-Z0-9_\-]/g, "_");
    }

    // Sucht rekursiv (Dokument-Ebene + 1 Ebene tief in Gruppen) nach einer
    // ausgeblendeten ArtLayer ("Sperrzone") und liefert deren Container
    // (Document oder LayerSet) sowie eine evtl. vorhandene sichtbare
    // Platzhalter-ArtLayer im selben Container zurück.
    function findTemplateSlots(doc) {
        var containers = [doc];
        for (var i = 0; i < doc.layers.length; i++) {
            if (doc.layers[i].typename === "LayerSet") containers.push(doc.layers[i]);
        }

        for (var c = 0; c < containers.length; c++) {
            var container = containers[c];
            var lockLayer = null;
            var placeholderLayer = null;
            for (var j = 0; j < container.layers.length; j++) {
                var l = container.layers[j];
                if (l.typename !== "ArtLayer") continue;
                if (!l.visible && !lockLayer) {
                    lockLayer = l;
                } else if (l.visible && !placeholderLayer) {
                    placeholderLayer = l;
                }
            }
            if (lockLayer) {
                return { container: container, lockLayer: lockLayer, placeholderLayer: placeholderLayer };
            }
        }
        return null;
    }

    // Liefert die Bounding-Box [x0,y0,x1,y1] des TRANSPARENTEN Bereichs einer Ebene.
    function getAllowedZoneBounds(doc, layer) {
        doc.activeLayer = layer;
        var idChnl = charIDToTypeID("Chnl");
        var desc = new ActionDescriptor();
        var ref = new ActionReference();
        ref.putProperty(idChnl, charIDToTypeID("fsel"));
        desc.putReference(charIDToTypeID("null"), ref);
        var ref2 = new ActionReference();
        ref2.putEnumerated(idChnl, idChnl, charIDToTypeID("Trsp"));
        desc.putReference(charIDToTypeID("T   "), ref2);
        executeAction(charIDToTypeID("setd"), desc, DialogModes.NO);

        doc.selection.invert();
        var b = doc.selection.bounds;
        var bounds = [b[0].value, b[1].value, b[2].value, b[3].value];
        doc.selection.deselect();
        return bounds;
    }

    // Entfernt den Hintergrund der aktiven Ebene per "Select Subject" + Löschen.
    function freistellen(doc) {
        app.activeDocument = doc;
        var layer = doc.layers[0];
        doc.activeLayer = layer;
        if (layer.isBackgroundLayer) layer.isBackgroundLayer = false;

        var desc = new ActionDescriptor();
        desc.putBoolean(stringIDToTypeID("sampleAllLayers"), false);
        executeAction(stringIDToTypeID("autoCutout"), desc, DialogModes.NO);

        doc.selection.invert();
        doc.selection.clear();
        doc.selection.deselect();
        return layer;
    }

    var originalDialogMode = app.displayDialogs;
    app.displayDialogs = DialogModes.NO;

    try {
        if (app.documents.length !== 2) {
            fail("Es müssen genau 2 Dokumente offen sein: das Template (aktiv) und das Foto.\nOffen sind: " + app.documents.length);
        }

        var templateDoc = app.activeDocument;
        var photoDoc = null;
        for (var i = 0; i < app.documents.length; i++) {
            if (app.documents[i] !== templateDoc) photoDoc = app.documents[i];
        }
        if (!photoDoc) fail("Foto-Dokument konnte nicht ermittelt werden.");

        var slots = findTemplateSlots(templateDoc);
        if (!slots) fail("Im Template wurde keine ausgeblendete Sperrzonen-Ebene gefunden.");

        var allowedBounds = getAllowedZoneBounds(templateDoc, slots.lockLayer);
        var tx0 = allowedBounds[0], ty0 = allowedBounds[1];
        var tw = allowedBounds[2] - tx0, th = allowedBounds[3] - ty0;
        if (tw <= 0 || th <= 0) fail("Erlaubter Zielbereich ist leer — Sperrzonen-Ebene prüfen.");

        var outputBaseName = sanitizeBaseName(photoDoc.name);

        var cutoutLayer = freistellen(photoDoc);
        cutoutLayer.name = outputBaseName;

        // Falls ein Rerun eine gleichnamige Ebene im Template hinterlassen hat: aufräumen.
        try {
            var existing = slots.container.layers.getByName(outputBaseName);
            if (existing) existing.remove();
        } catch (eIgnore) {}

        app.activeDocument = photoDoc;
        cutoutLayer.duplicate(templateDoc, ElementPlacement.PLACEATBEGINNING);

        app.activeDocument = templateDoc;
        var newLayer = slots.container.layers.getByName(outputBaseName);

        var b = newLayer.bounds;
        var sw = b[2].value - b[0].value;
        var sh = b[3].value - b[1].value;
        var scale = Math.min(tw / sw, th / sh);
        newLayer.resize(scale * 100, scale * 100, AnchorPosition.TOPLEFT);

        var b2 = newLayer.bounds;
        var newW = b2[2].value - b2[0].value;
        var newH = b2[3].value - b2[1].value;
        var deltaX = (tx0 + (tw - newW) / 2) - b2[0].value;
        var deltaY = (ty0 + (th - newH) / 2) - b2[1].value;
        newLayer.translate(deltaX, deltaY);

        if (slots.placeholderLayer) {
            var pb = slots.placeholderLayer.bounds;
            var isEmpty = (pb[2].value - pb[0].value) === 0 || (pb[3].value - pb[1].value) === 0;
            if (isEmpty) {
                slots.placeholderLayer.remove();
            } else {
                slots.placeholderLayer.visible = false;
            }
        }

        slots.lockLayer.name = CONFIG.lockLayerName;
        slots.lockLayer.visible = false;

        var psdFile = new File(CONFIG.outputFolder + "/" + outputBaseName + ".psd");
        templateDoc.saveAs(psdFile, new PhotoshopSaveOptions(), false, Extension.LOWERCASE);

        var pngFile = new File(CONFIG.outputFolder + "/" + outputBaseName + ".png");
        templateDoc.saveAs(pngFile, new PNGSaveOptions(), true, Extension.LOWERCASE);

        alert(
            "Fertig!\n\n" +
            "Zielbereich: " + tw + "x" + th + " px\n" +
            "Skalierung: " + Math.round(scale * 1000) / 10 + "%\n" +
            "Gespeichert als:\n" + psdFile.fsName + "\n" + pngFile.fsName
        );
    } finally {
        app.displayDialogs = originalDialogMode;
    }
})();
