# Technik


# Analog-Digital
# Moore's Law
Die Komplexität integrierter Schaltkreise verdoppelt sich regelmäßig (ca. 2 Jahre)



# Analoges Signal
<div>Kontinuierlicher Verlauf(Kurve, Fließend)$$
![beispiel_analog]()


# Digitales Signal
<div>Diskreter Verlauf(Treppe, Abstufungen)$$
![beispiel_digital]()





# Signal Converter
<div class="table" style="grid-template-columns: repeat(2, 1fr); grid-template-rows: repeat(5, 1fr);">
<div class="table_right"><b>adc</b>$$<div class="table_left">analog-digital-converter$$
<div class="table_right"><b>dac</b>$$<div class="table_left">digital-analog-converter$$
<div class="table_right"><b>Abtastung</b>$$<div class="table_left">Zeitachse diskretisieren$$
<div class="table_right"><b>Quantisierung</b>$$<div class="table_left">Werteachse diskretisieren$$
<div class="table_right"><b>Auflösung</b>$$<div class="table_left">$\frac{Werteabstand}{Stufenanzahl}$ (Genauigkeit)$$
<div class="table_right"><b>Quantisierungsfehler</b>$$<div class="table_left">$\pm \frac{Aufloesung}{2}$ (Rundungsfehler)$$
$$


# Abtasttheorem (Nyquist-Shannon)
Abtastfrequenz$f_A$ muss mindestens doppelt so groß sein, wie die größte Signalfrequenz:
$$f_A \geq 2 \cdot f_{max}$$
Andernfalls können Frequenzen nicht korrekt wiedergegeben werden. (Alias Effekte)








# Codierung
<b>Tetraden Code</b> = Jede Ziffer mit Nibble codiert
<br>
<b>Maschinenwort</b> = Bitstream (Folge an Bits)
<div class="table" style="grid-template-columns: repeat(2, 1fr); grid-template-rows: repeat(5, 1fr);">
<div class="table_right">Nibble$$<div class="table_left">4Bits$$
<div class="table_right">Byte$$<div class="table_left">8Bits$$
<div class="table_right">kB$$<div class="table_left">$2^{10}$ Bytes$$
<div class="table_right">MB$$<div class="table_left">$2^{20}$ Bytes$$
<div class="table_right">GB$$<div class="table_left">$2^{30}$ Bytes$$
<div class="table_right">TB$$<div class="table_left">$2^{40}$ Bytes$$
$$


# Komma Codierung
<div class="table" style="grid-template-columns: repeat(2, 1fr); grid-template-rows: repeat(5, 1fr);">
<div class="table_right table_bottom">Festkomma$$<div class="table_left table_bottom">Gleitkomma$$
<div class="table_right table_top">einfach$$<div class="table_left table_top">komplex$$
<div class="table_right">ungenau$$<div class="table_left">genau$$
<div class="table_right">werte-genau$$<div class="table_left">fließend$$
<div class="table_right">eingeschränkt$$<div class="table_left">flexibel$$
<div class="table_right"><i>Komma-fest</i>$$<div class="table_left">$\pm$ | Exp | Mantisse$$
$$




# zu Binär


Durch zwei mit Rest teilen bis 0 herauskommt, danach
Reste von unten nach oben ablesen.

$$19 : 2 = 9 |R:1$$
$$9 : 2 = 4 |R:1$$
$$4 : 2 = 2 |R:0$$
$$2 : 2 = 1 |R:0$$
$$1 : 2 = 0 |R:1$$
<br>
$$19_{(10)} = 10011_{(2)}$$


Nachkommastellen mal Zwei rechnen bis gewünschte Genauigkeit erreicht, danach von oben nach unten ganze ablesen.

$$0.41 \cdot 2 =|0|.82$$
$$0.82 \cdot 2 =|1|.64$$
$$0.64 \cdot 2 =|1|.28$$
$$0.28 \cdot 2 =|0|.56$$
$$0.56 \cdot 2 =|1|.12$$
<br>
$$0.41_{(10)} \approx 0.01101_{(2)}$$





# Komplement
<b>Einerkomplement</b>: alles Invertiert (0 doppelt encodiert, symmetrisch)
<br>
<b>Zweierkomplement</b>: alles Invertiert plus 1 (0 einfach encodiert)








# Codierungen
# Beschreibung
Ein Zeichenvorrat beschreibt die Menge aller Zeichen, welche in einem Wort verwendet werden können. 
Dabei ist eine Codierung eine Abbildung von einem Zeichenvorrat in einen anderen Zeichenvorrat. In der (Technischen) Informatik ist der Bildbereich meist die Menge $\left\{0, 1\right\}^*$ (Jede Kombination aus 0 und 1). 
$$bcd: [0, 9] \rightarrow \left\{0, 1\right\}^*$$
$$0 \mapsto (0, 0, 0, 0)$$
$$1 \mapsto (0, 0, 0, 1)$$
$$...$$
Bekannte Codes wären 7-Bit ASCII, 8-Bit ASCII und Unicode.

# Eigenschaften (Rechencodes)


# Symmetrische Codes
Wertebereich 0 bis 4 ergibt gespiegelt und invertiert 5 bis 9
<br>
<i>Exzess-3-Code</i>, <i>Aiken-Code</i>


# Progressive Codes
Aufeinander folgende Zahlen unterscheiden sich in einem Bit
<br>
<i>Gray-Code</i>, <i>Glixon-Code</i>





# Gleichgewichtige Codes
Jedes Wort ist gleich lang und hat die gleiche Anzahl an $1$
<br>
<i>Walking-Code</i>, <i>w-aus-m-Codes</i>





# Fano-Bedingung
Kein Wort einer Codierung ist ein Teil eines anderen Worts. Nur Blätter im Binärbaum werden codiert. (präfixfrei)


![beispiel_fano_bedingung_1]()
<div class="table" style="grid-template-columns: repeat(6, 1fr); grid-template-rows: repeat(2, 1fr);">
<div>$a$$$<div>$b$$$<div>$c$$$<div>$d$$$<div>$e$$$<div>$f$$$
<div>$00$$$<div>$01$$$<div>$10$$$<div>$11$$$<div>$0$$$<div>$1$$$
$$
<div style="text-align: center;">
Erfüllt Bedingung nicht, wegen $e$, $f$.
$$


![beispiel_fano_bedingung_2]()
<div class="table" style="grid-template-columns: repeat(4, 1fr); grid-template-rows: repeat(2, 1fr);">
<div>$a$$$<div>$b$$$<div>$c$$$<div>$d$$$
<div>$00$$$<div>$01$$$<div>$10$$$<div>$11$$$
$$
<div style="text-align: center;">
Fano-Bedingung erfüllt.
$$



# Hamming-Distanz


Die Hamming-Distanz $D_n$ beschreibt den kleinsten Unterschied zwischen allen Codierten Wörtern. Die Wörter $000$ und $010$ unterscheiden sich in einem Zeichen, die Distanz wäre $1$. Codes die eine Korrektur zu lassen heißen Hamming-Codes.


<div class="table" style="grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(3, 1fr);">
<div>Hamming-Distanz$$<div>Erkannte Fehler$$<div>Behebbare Fehler$$
<div>$D_n$ gerade$$<div>$D_n - 1$$$<div>$\frac{D_n}{2} - 1$$$
<div>$D_n$ ungerade$$<div>$D_n - 1$$$<div>$\frac{(D_n - 1)}{2}$$$
$$



# Blockprüfung
Mit der Blockprüfung kann ein Code erweitert werden, um die Position von Fehlern zu finden und zu beheben. Es ist die Kombination aus VRC und LRC.


# VRC (vertical redundancy check)
Prüft die Korrektheit in einem Block nach jeder Zeile, durch ein Paritätsbit.


# LRC (longitudinal redundancy check)
Prüft die Korrektheit in einem Block nach jeder Spalte, durch ein Paritätsbit.


<div style="text-align: center;">
<i>(Paritäts-Festlegung wird im voraus ausgemacht)</i>
$$

# Datenkompression
# Huffman-Code Algorithmus
Der Huffman-Code Algorithmus erstellt für einen Eingabetext einen Binär-Codierbaum zur codierung und decodierung des Eingabetext. Dabei wird die Häufigkeit von Symbolen gezählt. Symbole mit größster Häufigkeit werden zusammengefasst zu einem Baum.


<div style="text-align: center;"><b>brennen</b>$$
![beispiel_huffman_1]()


![beispiel_huffman_2]()


# Informationsreduzierende Codes
Bei Bild-, Video- und Audiodateien können Information entfernt werden, ohne vom Menschen sicht-/hörbare unterschiede. Die Kompression kann nicht mehr rückgängig gemacht werden, ist aber in den meisten Fällen auch nicht nötig.
<br>
<i>MP3</i>, <i>JPEG</i>




# Schaltungen (Schaltnetz)
# Beschreibung


$\textcolor{red}{F}$ und $\textcolor{LimeGreen}{W}$ werden definiert durch Bereiche statt durch einzelne Werte.
$\textcolor{red}{F}$ ($\textcolor{red}{LOW}$) ist der Bereich, welcher näher an $-\infty$ liegt.
$\textcolor{LimeGreen}{W}$ ($\textcolor{LimeGreen}{HIGH}$) ist der Bereich, welcher näher an $+\infty$ liegt.
Die beiden Bereiche werden von einander getrennt durch einen Sicherheitsabstand in welchem nicht entschieden werden kann ob der Wert $\textcolor{red}{F}$ oder $\textcolor{LimeGreen}{W}$ ist.


![beispiel_logische_bereiche]()




# Logische-Gatter


# not-Gatter
![beispiel_not]()


# and-Gatter
![beispiel_and]()


# or-Gatter
![beispiel_or]()


# xor-Gatter
![beispiel_xor]()


# nand-Gatter
![beispiel_nand]()


# nor-Gatter
![beispiel_nor]()


# xnor-Gatter
![beispiel_xnor]()




# Vollständiges System
Ein vollständiges System ist eine Menge an Logischen Gattern mit denen man jede Schaltung Realisieren kann. Die Menge $\{nand\}$ wäre ein mögliches Vollständiges System.


# Schaltnetz
Eingänge und Ausgänge ohne Speicher (Zeitunabhängig)
$$f(A, B, ...) = (Y_1, Y_2, ...)$$




# Halbaddierer (HA)
Addiert zwei Bits
<div>$S$: Sum, $C$: Carry$$
![beispiel_halbaddierer]()


# Volladdierer (VA)
Addiert drei Bits
<div>$S$: Sum, $C$: Carry$$
![beispiel_volladdierer]()



Mit beliebig vielen Volladdierern kann man eine beliebig große Additions-Schaltung bauen, indem man sie in einer Reihe zusammen schließt und die Eingänge C mit den Ausgängen C verbindet.
Mit dem fast-carry-Verfahren kann man die Gatterlaufzeit beschränken, welche durch die in Reihe Schließung auftritt.








# FlipFlops (Schaltwerk)
# Beschreibung
Ein FlipFlop ist eine zeitabhängige Schaltung, wegen einer Gedächnisfunktion bzw. eines Zustandsspeicher, durch <b>Rückkopplung</b> von den Ausgängen zu den Eingängen.
$$f(A, B, ..., Y_{n-1, 1}, ...) = (Y_{n, 1}, Y_{n, 2}, ...)$$

# Nicht-Taktgesteuerte FlipFlops (Basis-FlipFlop)}
# RS NOR-Latch


Speichert ein Bit, durch einen Reset $R$ und Set $S$ Eingang. $(R \land S)$ ist ein undefinierter Zustand.


![beispiel_rs_nor_latch]()



# Taktgesteuerte FlipFlops
# RS-FlipFlop


Arbeitet wie eine RS NOR-Latch, jedoch nur wenn der Takt auf $\textcolor{LimeGreen}{W}$ ist, sonst wird der Zustand gespeichert.


![beispiel_taktgesteuertes_rs_flipflop]()



# D-FlipFlop


Übernimmt den Zustand von $D$ und speichert diesen Während $T$ den Wert $\textcolor{red}{F}$ hat.


![beispiel_taktgesteuertes_d_flipflop]()





# Flankengesteuerte FlipFlops
# Impulsglied


Ein Impulsglied erkennt positive Flanken eines Signals, die Zeitpunkte zu denen ein Signal von $\textcolor{red}{F}$ zu $\textcolor{LimeGreen}{W}$ wechselt.


![beispiel_impulsglied]()


# Einflankengesteuerte FlipFlops
# RS-FlipFlop


Arbeitet wie eine RS NOR-Latch , jedoch nur bei positiven Flanken von $T$, sonst wird der Zustand gespeichert.


![beispiel_einflankengesteuertes_rs_flipflop]()



# D-FlipFlop


Übernimmt den Zustand von $D$ während der positiven Taktflanken von $T$ und speichert diesen.


![beispiel_einflankengesteuertes_d_flipflop]()




# JK-FlipFlop


Arbeitet genau wie ein Einflankengesteuertes RS-FlipFlop, nur, dass $(R \land S)$ zum toggeln des gespeicherten Bit führt. (Toggle-Modus)


![beispiel_einflankengesteuertes_jk_flipflop]()




# Zweiflankengesteuerte FlipFlops
# JK-FlipFlop


Arbeitet wie ein Einflankengesteuertes JK-FlipFlop, nur, dass es erst bei der negativen Flanke von $T$ das gespeicherte Bit ausgibt. (Retardierend)


![beispiel_zweiflankengesteuertes_jk_flipflop]()




# Synthese-Tabelle


Eine Synthese-Tabelle ist eine abgewandelte Wahrheitstabelle um ein FlipFlop platzsparend zu charakterisieren.


<div class="table" style="grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(6, 1fr);">
<div class="table_right" style="grid-column: 1 / span 2;">$t_n$$$<div class="table_left">$t_{n+1}$$$
<div class="table_bottom">$S$$$<div class="table_bottom table_right">$R$$$<div class="table_bottom table_left">$Q_{n+1}$$$
<div class="table_top">$\textcolor{#FF0000}{F}$$$<div class="table_top table_right">$\textcolor{#FF0000}{F}$$$<div class="table_top table_left">$Q_n$$$
<div>$\textcolor{#FF0000}{F}$$$<div class="table_right">$\textcolor{LimeGreen}{W}$$$<div class="table_left">$\textcolor{#FF0000}{F}$$$
<div>$\textcolor{LimeGreen}{W}$$$<div class="table_right">$\textcolor{#FF0000}{F}$$$<div class="table_left">$\textcolor{LimeGreen}{W}$$$
<div>$\textcolor{LimeGreen}{W}$$$<div class="table_right">$\textcolor{LimeGreen}{W}$$$<div class="table_left">$\perp$$$
$$
<div style="text-align: center;">
<i>RS-FlipFlop</i>
$$






# Endliche Automaten (Schaltwerk)
# Beschreibung


In der Technischen Informatik werden Automaten verwendet um Schaltwerke zu entwerfen. Ein Automat $A$ besteht aus der Menge der Eingangskombinationen $X$, der Ausgangskombinationen $Y$, der Zustandskombinationen $Z$ und der Abbildung der Zustandsübergangsfunktion $\delta$ und der Ausgabefunktion $\lambda$.
$$A = (X, Y, Z, \delta, \lambda)$$
Ein Automat ist ein Modell für Taktgesteuerte FlipFlops, da Automaten schrittweise arbeiten.
Bei der graphischen Darstellung werden Zustände über Übergänge verknüpft. Ein Übergang besteht aus den Eingängen welche anliegen müssen getrennt durch Kommas, danach folgen die Ausgänge.


![beispiel_automat]()




# Eigenschaften


# Mealy-Automat
Die Ausgabe kann sich ändern während $T \equiv 0$.
Der Automat ist <b>ereignisorientiert</b>.
$$\delta: X \times Z \rightarrow Z$$
$$\lambda: X \times Z \rightarrow Y$$


# Moore-Automat
Die Ausgabe ist nur durch den Zustand bestimmt.
Der Automat ist <b>zustandsorientiert</b>.
$$\delta: X \times Z \rightarrow Z$$
$$\lambda: Z \rightarrow Y$$





# Medwedjew-Automat
Die Ausgabe ist der Zustand.
$$\delta: X \times Z \rightarrow Z$$
$$\lambda = id_{Z}$$


# Autonomer-Automat
Es gibt keine Eingänge.
$$X = \left\{()\right\}$$
$$\delta: X \times Z \rightarrow Z$$
$$\lambda: Z \rightarrow Y$$






# Zustandsübergangs-Tabelle
Eine Zustandsübergangs-Tabelle ist eine abgewandelte Wahrheitstabelle um einen Automaten zu charakterisieren.
Das Beispiel rechts ist ein Automat, welcher entscheiden kann, ob eine Eingabe $e \in \{0, 1\}^*$ eine gerade Anzahl an $1$ enthält.


<div class="table" style="grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(6, 1fr);">
<div class="table_right" style="grid-column: 1 / span 2;">$t_n$$$<div class="table_left">$t_{n+1}$$$
<div class="table_bottom">$X_0$$$<div class="table_bottom table_right">$Z_n$$$<div class="table_bottom table_left">$Z_{n+1}$$$
<div class="table_top">$\textcolor{#FF0000}{F}$$$<div class="table_top table_right">$z_0$$$<div class="table_top table_left">$z_0$$$
<div>$\textcolor{LimeGreen}{W}$$$<div class="table_right">$z_0$$$<div class="table_left">$z_1$$$
<div>$\textcolor{#FF0000}{F}$$$<div class="table_right">$z_1$$$<div class="table_left">$z_0$$$
<div>$\textcolor{LimeGreen}{W}$$$<div class="table_right">$z_1$$$<div class="table_left">$z_1$$$
$$



# Synchrone Zähler
Um einen Automaten mit mehreren Zuständen zu realisieren, bildet man, für ein gewähltes FlipFlop, die Charakteristische Gleichung, also die Normalform. Danach bildet man die Normalform von jedem Ausgang einzeln, wobei man bei jedem die Ausgangs-variable nicht kürzen darf.
Im nächsten Schritt wird für jede Normalform der Ausgänge ein Koeffizientenvergleich mit der Normalform des FlipFlops durchgeführt. Dadurch erhält man die Kombination aus Eingängen, welche an den jeweiligen Eingang der FlipFlops kommt.
Um die Schaltung zu realisieren, werden die Eingänge der FlipFlops entsprechend verknüpft und die Clock wird mit allen FlipFlops verbunden.




$$Q_{n+1} = D$$
<div style="text-align: center;">
<i>(Gleichung D-FlipFlop)</i>
$$


$$Q_{n+1} = ((J \land \neg Q_n) \lor (\neg K \land Q_n))$$
<div style="text-align: center;">
<i>(Gleichung JK-FlipFlop)</i>
$$









Stapelbetrieb/Batch-Verarbeitung: nicht-interaktiv
Dialogbetrieb/Prozessbetrieb: interaktiv, es läuft immer ein Prozess
Echtzeitbetrieb: Verarbeitungszeit im voraus festgelegt

Einprogrammbetrieb: immer nur ein Programm
Mehrprogrammbetrieb: mehrere Programme gleichzeitig

Einbenutzerbetrieb: 
Mehrbenutzerbetrieb: mehrere Benutzer gleichzeitig

Einprozessorbetrieb: 
Mehrprozessorbetrieb: 


Mehrprogrammverarbeitung: 

Skalare und Superskalare Architektur: Parallelverarbeitung auf CPU selber

Pipeline: Fließband


Betriebssystem ist im Kernel-modus und hat höhere Rechte als Admin

RAM/ROM Primärspeicher

SSD/HDD Sekundärspeicher

Parallel: Prozesse auf verschiendenen Kernen
Quasi-Parallel: Prozesse auf gleichem Kern abwechselnd
