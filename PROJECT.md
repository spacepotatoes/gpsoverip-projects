# GPSauge MI6 – Fuhrpark/Telematik-Slide

## Auftrag

Eine Instagram/Social-Media-Infografik ("1. Fahrzeugdaten erfassen") zur
Telematik-Hardware GPSauge MI6 sollte in Figma **als vollständig editierbares
Layout** nachgebaut werden — alle Elemente als eigene Ebenen ("freigestellt"),
nicht als ein flaches Bild. Ausgangspunkt war ein einzelnes Referenzbild
(Screenshot einer fertigen Infografik), das der Nutzer im Chat eingefügt hat.
Diese Bilddatei selbst liegt nirgends im Dateisystem — nur als Bildinhalt in
der ursprünglichen Unterhaltung. Die folgende Beschreibung hält den Inhalt
textuell fest, damit er auch ohne das Originalbild rekonstruierbar bleibt.

### Inhalt des Referenzbilds (Layout von oben nach unten)

1. Hintergrundfoto: Himmel (hellblauer Verlauf) mit einer Reihe weißer LKW
   (Sattelzugmaschinen), die nach links Richtung Kamera zeigen. Das Foto füllt
   etwa die obere Hälfte des Bildes und geht unten in Weiß über (Verlaufsmaske).
2. Oben links: orangener Kreis mit weißer, fetter "1." darin.
3. Rechts daneben/darüber: zweizeilige fette Headline "Fahrzeugdaten erfassen"
   in dunklem Anthrazit/Grau.
4. Darunter eine weiße, abgerundete Box mit dünnem orangenem Rahmen. Inhalt:
   zweizeiliger kursiver fetter Text in Orange — "Telematik-Hardware GPSauge MI6"
   / "sitzt direkt im Fahrzeug".
5. Darunter ein Produktfoto: zwei freigestellte schwarz-orange Hardware-Geräte
   (GPSauge MI6 PRO), mit Aufschrift "MI6 PRO" und diversen Anschlüssen/Kabeln,
   leicht schräg gegeneinander gestellt, mit Bodenreflexion.
6. Darunter eine Checkliste mit 4 Punkten, jeweils orangenes rundes
   Häkchen-Icon + dunkelgrauer Text:
   - GPS-Ortung
   - Fahrzeugdaten über CAN / FMS
   - Über 100 Telemetriewerte
   - Tacho-Remote-Download
7. Ganz unten: durchgehender oranger Balken über die volle Breite mit fettem,
   zentriertem Text in dunklem Rotbraun/Maroon: "Daten werden automatisch an
   das Fuhrparkportal übertragen".

Vermutlich Folie 1 einer mehrteiligen Slide-Serie (Nummerierung "1." deutet auf
weitere Folgefolien hin — bisher nicht besprochen/angefragt).

## Figma-Datei (bereits umgesetzt)

- URL: https://www.figma.com/design/U6lzjE0TSKUQ8H19G0ofNJ
- File Key: `U6lzjE0TSKUQ8H19G0ofNJ`
- Seite: `1 – Fahrzeugdaten erfassen`
- Root-Frame: `Slide – Fahrzeugdaten erfassen`, Node-ID `2:2`, 1080×1350px,
  weißer Hintergrund, `clipsContent: true`

### Gebaute Ebenen (mit Node-IDs, Stand 21.06.2026)

| Element | Node-ID | Details |
|---|---|---|
| Hintergrundfoto-Platzhalter | `2:3` | Rect 1080×660 @ (0,0), linearer Verlauf Himmelblau `{0.78,0.88,0.94}` → `{0.93,0.96,0.98}` |
| Weiß-Fade-Overlay | `2:4` | Rect 1080×260 @ (0,460), Verlauf transparent→weiß |
| Label "Foto einsetzen" (Hintergrund) | `2:5` | Text, Inter Bold 20px, grau `{0.35,0.35,0.35}` |
| Badge-Kreis | `2:6` | Ellipse 140×140 @ (64,64), Fill Orange `{0.949,0.510,0.106}` ≈ `#F2821B` |
| Badge-Text "1." | `2:7` | Inter Black 64px, weiß, zentriert in 140×140 @ (64,64) |
| Headline | `2:8` | "Fahrzeugdaten\nerfassen", Inter Black 58px, Anthrazit `{0.22,0.22,0.22}`, line-height 105%, @ (246,78), Breite 760 |
| Hinweisbox (Rahmen) | `2:9` | Frame 860×132 @ (110,268), weiß, Orange-Stroke 2.5px, cornerRadius 16 |
| Hinweisbox-Text | `2:10` | "Telematik-Hardware GPSauge MI6\nsitzt direkt im Fahrzeug", Inter Bold Italic 30px, Orange, zentriert |
| Produktfoto-Platzhalter | `2:11` | Frame 740×320 @ (170,470), hellgrau, gestrichelter Rand, cornerRadius 8 |
| Label "Foto einsetzen" (Geräte) | `2:12` | Text, Inter Bold 20px |
| Checkliste (Auto-Layout, vertikal) | `2:13` | @ (110,850), itemSpacing 28 |
| → Reihe "GPS-Ortung" | `2:14` | Auto-Layout horizontal, Icon-Ellipse 44×44 Orange + "✓" weiß Inter Bold 24px + Label Inter Semi Bold 34px Anthrazit |
| → Reihe "Fahrzeugdaten über CAN / FMS" | `2:18` | gleiche Struktur |
| → Reihe "Über 100 Telemetriewerte" | `2:22` | gleiche Struktur |
| → Reihe "Tacho-Remote-Download" | `2:26` | gleiche Struktur |
| Unterer Balken | `2:30` | Rect 1080×130 @ (0,1220), Fill `{0.937,0.482,0.090}` ≈ `#EF7B17` |
| Balken-Text | `2:31` | "Daten werden automatisch an das Fuhrparkportal übertragen", Inter Bold 30px, Maroon `{0.42,0.11,0.05}` ≈ `#6B1C0D`, zentriert in 940×130 @ (70,1220) |

Schriftschnitte verwendet (alle aus Familie **Inter**, lokal verfügbar
bestätigt): Black, Bold, Bold Italic, Semi Bold.

### Offene Punkte in Figma

1. **Echte Fotos fehlen noch** — beide Platzhalter-Frames (`2:3`/Hintergrund
   LKW-Flotte und `2:11`/Produktfoto GPSauge MI6 PRO) haben nur graue
   Platzhalter-Fläche + Beschriftung. Es lagen keine separaten
   Rohbilder/Freisteller vor, nur das fertige Referenzbild als Ganzes — eine
   pixelgenaue Freistellung daraus war nicht möglich. Echte Bilder müssen vom
   Nutzer eingesetzt werden (Drag&Drop in Figma direkt auf die
   Platzhalter-Frames, oder per `upload_assets`-Tool mit `nodeId`, falls
   Bilddateien als Anhang vorliegen).
2. Farben/Schrift/Abstände sind eine visuelle Annäherung (per Bildbetrachtung
   geschätzt, keine exakte Farbpipette) — bei Bedarf gegen das Original
   nachschärfen.
3. Es ist unklar, ob es weitere Folien (2., 3., …) der gleichen Serie geben
   soll — bisher nicht angefragt.

## Figma-Zugriff / Account

- Figma-Account: Giusi, E-Mail `gt-foto@gmx.de`, Team "Giusi's team"
- Plan wurde während der Session von **Starter/View-Seat** (nur 6
  MCP-Tool-Calls/Monat) auf **Pro/Dev-Seat** (200 Calls/Tag) hochgestuft —
  damit funktionieren `use_figma`/Screenshot-Tools wieder normal.
- Voraussetzung für Figma-Schreibzugriff in einer neuen Claude-Code-Session:
  einmaliger OAuth-Login für den `figma-remote-mcp` Server (Browser-Login mit
  demselben Figma-Account). Details zur Diagnose falls Tools fehlen: siehe
  Memory-Datei `reference_figma_use_figma.md` im Hauptprojekt (zeitgeist_v01),
  liegt lokal unter
  `C:\Users\Giusi_PC\.claude\projects\c--Users-Giusi-PC-Documents-claudeProjekte-zeitgeist-v01\memory\`
  — dieser Ordner ist **nicht** Teil eines Git-Repos und daher an diesem PC
  gebunden.

## Dieses Projekt / Repo

- Lokaler Ordner: `C:\Users\Giusi_PC\Documents\claudeProjekte\gpsauge-mi6\`
- Soll als **privates** GitHub-Repo unter dem persönlichen Account des Nutzers
  angelegt werden (gleiches Account-Muster wie `zeitgeist_v01`, dort
  `origin = https://github.com/spacepotatoes/zeitgeist.git`) — vermuteter
  Ziel-Name: `spacepotatoes/gpsauge-mi6`, **noch nicht bestätigt/erstellt**.
- Grund für eigenes Repo statt im zeitgeist_v01-Repo: inhaltlich völlig
  anderes Thema (Fuhrpark-/Telematik-Kunde, nicht Webdesign/Fotografie von
  zeitgeist).
- GitHub-CLI (`gh`) ist auf diesem PC **nicht installiert** — Repo muss
  manuell auf github.com angelegt werden (leer, ohne README/.gitignore),
  danach `git remote add origin <url> && git push -u origin master`.
- Stand: lokales Git-Repo ist initialisiert, ein Commit vorhanden
  ("docs: Projekt-Kontext für GPSauge MI6 Figma-Layout angelegt"), noch
  **kein Remote verbunden, noch nicht gepusht**.

## Warum dieses Setup (Hintergrund der Entscheidung)

Der Nutzer wollte morgen vom Arbeits-PC aus weiterarbeiten können. Diese
Chat-Unterhaltung und das bisherige Claude-Gedächtnis (Memory-System) liegen
lokal auf diesem PC und sind nicht über Git transportierbar. Vereinbart wurde:
Figma-Zugriff läuft ohnehin über den Cloud-Account (kein Setup nötig außer
Login), und für den inhaltlichen Kontext wird diese Datei (`PROJECT.md`) als
einziger "Wissensträger" gepflegt, der per GitHub auf den Arbeits-PC
übertragen werden kann. Eine neue Claude-Code-Session am Arbeits-PC hat **kein**
Erinnerungsvermögen an dieses Gespräch — sie muss sich ausschließlich über
diese Datei (und ggf. Nachfragen an den Nutzer) wieder einlesen.

## Nächste Schritte

1. ~~GitHub-Repo anlegen, Remote setzen, pushen.~~ Erledigt — Remote ist
   `https://github.com/spacepotatoes/gpsoverip-projects.git` (Branch `master`).
2. Am Arbeits-PC: Repo klonen, Claude Code starten, Figma-OAuth einmalig
   bestätigen, diese Datei lesen lassen.
3. Echte freigestellte Fotos (Hintergrund LKW + GPSauge MI6 PRO Geräte) in
   die Platzhalter-Frames in Figma einsetzen — dafür ggf. den neu
   eingerichteten Photoshop-MCP-Server nutzen (siehe unten).
4. Bei Bedarf: Farben/Schrift/Abstände gegen das Original feinjustieren.

## Photoshop-MCP-Server (21.06.2026 eingerichtet)

- Installiert via `pip install --user photoshop-mcp-server` (Paket
  `photoshop-mcp-server` 0.1.11, nutzt `photoshop-python-api` per COM gegen
  eine lokal laufende Adobe-Photoshop-Installation — kein eigenes Rendering).
- Ausführbar unter
  `C:\Users\Giusi_PC\AppData\Roaming\Python\Python312\Scripts\photoshop-mcp-server.exe`
  (nicht im PATH, daher voller Pfad nötig).
- Bei Claude Code registriert: `claude mcp add --scope user photoshop -- "<obiger Pfad>"`
  → Scope `user`, d.h. in **jedem** Projekt auf diesem PC verfügbar, nicht nur hier.
  Eintrag liegt in `C:\Users\Giusi_PC\.claude.json`.
- Voraussetzung zur Nutzung: Adobe Photoshop 2026 ist auf diesem PC
  installiert (bestätigt) und muss beim Tool-Aufruf **geöffnet** sein.
- Gedacht für: die fehlenden Freisteller (Hintergrundfoto LKW-Flotte,
  Produktfoto GPSauge MI6 PRO) direkt aus Rohbildern in Photoshop
  zuzuschneiden/freizustellen und dann in die Figma-Platzhalter
  (`2:3`/`2:11`) einzusetzen.
- Achtung: dieses Setup ist **lokal an diesen PC gebunden** (Pfad zur exe,
  `.claude.json`-Eintrag, installiertes Photoshop). Am Arbeits-PC müsste der
  Server bei Bedarf separat installiert/registriert werden — diese Notiz
  beschreibt nur, dass und wie es hier gemacht wurde.
