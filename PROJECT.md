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
  demselben Figma-Account `gt-foto@gmx.de`).

### Setup am Arbeits-PC (falls Claude Code dort noch keinen Figma-Zugriff hat)

1. Server registrieren (einmalig, Terminal):
   ```
   claude mcp add --transport http figma-remote-mcp https://mcp.figma.com/mcp --scope user
   ```
2. In `C:\Users\<User>\.claude\settings.json` sicherstellen, dass das Plugin
   aktiviert ist:
   ```json
   "enabledPlugins": {
     "figma@claude-plugins-official": true
   }
   ```
   (meist automatisch vorhanden, wenn nicht: manuell ergänzen)
3. Claude Code neu starten → OAuth-Login-Dialog erscheint im Browser → mit
   `gt-foto@gmx.de` einloggen.
4. Prüfen mit `claude mcp list` — `figma-remote-mcp` sollte "✓ Connected" zeigen.

Bei Problemen (Tools fehlen trotz Verbindung, Token abgelaufen etc.): das ist
am Hauptrechner schon mal vorgekommen, ausführliche Diagnose-Schritte liegen
dort in der lokalen Memory-Datei `reference_figma_use_figma.md` — die ist
PC-gebunden und nicht hier im Repo, im Zweifel einfach neu fragen.

### Photoshop-MCP-Server am Arbeits-PC (optional, nur falls dort benötigt)

Nicht eingerichtet und nicht Teil dieses Repos — siehe Abschnitt weiter unten
("Photoshop-MCP-Server"). Falls am Arbeits-PC auch Photoshop-Automatisierung
gewünscht ist, müssten die dortigen Schritte (pip install, `claude mcp add`,
Photoshop-Installation) separat wiederholt werden.

## Dieses Projekt / Repo

- Lokaler Ordner: `C:\Users\Giusi_PC\Documents\claudeProjekte\gpsauge-mi6\`
- GitHub-Repo: **privat**, `https://github.com/spacepotatoes/gpsoverip-projects.git`
  (Branch `master`) — Name bewusst `gpsoverip-projects` (nicht `gpsauge-mi6`),
  vom Nutzer ausdrücklich bestätigt; vermutlich als Sammel-Repo für weitere
  GPSoverIP-Kundenprojekte gedacht, nicht nur dieses eine Layout.
- Grund für eigenes Repo statt im zeitgeist_v01-Repo: inhaltlich völlig
  anderes Thema (Fuhrpark-/Telematik-Kunde, nicht Webdesign/Fotografie von
  zeitgeist).
- GitHub-CLI (`gh`) ist auf diesem PC **nicht installiert** — das Repo wurde
  manuell auf github.com angelegt, danach hier per
  `git remote add origin ... && git push -u origin master` verbunden.
- Stand: verbunden und gepusht, lokaler und Remote-Branch `master` sind sync.

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

## Session-Verlauf (21.06.2026, chronologisch)

1. Figma-Layout fertig gebaut (siehe oben), Screenshot geprüft.
2. Nutzer wollte vom Arbeits-PC weiterarbeiten können → Klärung: Chat-Verlauf
   und Memory sind PC-gebunden, Figma ist Cloud (kein Setup nötig außer
   Login), für den Rest wird dieses Repo + `PROJECT.md` als Wissensträger
   angelegt.
3. Lokalen Ordner `gpsauge-mi6` angelegt, `git init`, `PROJECT.md` geschrieben
   und committet.
4. Nutzer hat das GitHub-Repo manuell angelegt und den Remote-Befehl
   `git remote add origin https://github.com/spacepotatoes/gpsoverip-projects.git`
   geschickt — Name weicht vom ursprünglich besprochenen `gpsauge-mi6` ab;
   auf Nachfrage vom Nutzer **ausdrücklich bestätigt**, dass
   `gpsoverip-projects` der richtige/gewollte Name ist.
5. Remote verbunden, gepusht (`master`).
6. Nutzer fragte, ob für dieses Mini-Projekt eine `.env`/Config nötig ist →
   Antwort: nein, kein Code/Backend/Secrets vorhanden, erst relevant falls
   später echter Code mit API-Keys entsteht (dann sofort `.gitignore`, analog
   zu `public/api/config.php` im Hauptprojekt zeitgeist_v01).
7. Nutzer wollte `pip install photoshop-mcp-server`. Erster Versuch ins
   globale `C:\Python312` schlug fehl (`wheel.exe` gesperrt/Berechtigung,
   `WinError 2`). Erfolgreich mit `pip install --user photoshop-mcp-server`.
   Danach per `claude mcp add --scope user photoshop -- "<exe-Pfad>"`
   registriert, Verbindung mit `claude mcp list` als "✓ Connected" bestätigt,
   installiertes Adobe Photoshop 2026 auf diesem PC per Registry-Check
   verifiziert. Hinweis an Nutzer: Tools erst nach Session-Neustart + bei
   geöffnetem Photoshop nutzbar.
8. Nutzer fragte gezielt, ob der Befehl zur Figma-Installation für den
   Arbeits-PC in `PROJECT.md` steht — war bis dahin nur indirekt über einen
   Verweis auf eine PC-gebundene Memory-Datei vorhanden. Daraufhin den
   konkreten Befehl (`claude mcp add --transport http figma-remote-mcp
   https://mcp.figma.com/mcp --scope user`) plus Folgeschritte direkt in
   diese Datei aufgenommen (siehe Abschnitt "Setup am Arbeits-PC" oben).
9. Dieser Log-Abschnitt selbst wurde auf Wunsch des Nutzers ergänzt, damit
   der Gesprächsverlauf/die Entscheidungen auch ohne Zugriff auf den
   Original-Chat nachvollziehbar bleiben.
