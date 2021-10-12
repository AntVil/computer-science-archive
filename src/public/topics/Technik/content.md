# Technik
## Analog-Digital
| Analoges Signal                           | Digitales Signal                       |
| ----------------------------------------- | -------------------------------------- |
| <img src="./analog.svg" />                | <img src="./digital.svg" />            |
| Kontinuierlicher Verlauf(Kurve, Fließend) | Diskreter Verlauf(Treppe, Abstufungen) |

Eine Konversion von Analog zu Digital erfolgt durch einen **adc**. Mit der **Abtastung** wird Zeitachse diskretisiert. Mit der **Quantisierung** wird die Werteachse diskretisiert. Die Gegenoperation wird von einem **dac** durchgeführt.

Die Abtastfrequenz $f_A$ muss mindestens doppelt so groß sein, wie die größte Signalfrequenz:
$$f_A \geq 2 \cdot f_{max}$$

Andernfalls können Frequenzen nicht korrekt wiedergegeben werden. (Alias Effekte)


## Codierungen

| Einheit  | Bits           |
| -------- | -------------- |
| $Nibble$ | $4Bits$        |
| $Byte$   | $8Bits$        |
| $kB$     | $2^{10} Bytes$ |
| $MB$     | $2^{20} Bytes$ |
| $GB$     | $2^{30} Bytes$ |
| $TB$     | $2^{40} Bytes$ |

### Datentypen
#### Ganzzahlen
Ganzzahlen werden codiert durch Zweierpotenzen
$$1001_{(2)} = 1 \cdot 2^3 + 0 \cdot 2^2 + 0 \cdot 2^1 + 1 \cdot 2^0$$

Um eine Zahl binär zu codieren wird sie durch zwei mit Rest geteilt bis null herauskommt. Danach werden die Reste rückwärts abgelesen.

$$19 : 2 = 9 |R:1$$
$$9 : 2 = 4 |R:1$$
$$4 : 2 = 2 |R:0$$
$$2 : 2 = 1 |R:0$$
$$1 : 2 = 0 |R:1$$
<br>
$$19_{(10)} = 10011_{(2)}$$

Negativ Zahlen werden durch das **Zweierkomplement** gebildet. Dabei werden die Stellen der Positiven Zahl invertiert und eins addiert.

#### Kommazahlen
| Festkomma     | Gleitkomma             |
| ------------- | ---------------------- |
| einfach       | komplex                |
| ungenau       | genau                  |
| werte-genau   | fließend               |
| eingeschränkt | flexibel               |
| *Komma-fest*  | $\pm$ + Exp + Mantisse |

### Codes
Codes können spezielle Eigenschaften haben.

| Code                   | Beschreibung                                                  | Beispiele                       |
| ---------------------- | ------------------------------------------------------------- | ------------------------------- |
| Symmetrische Codes     | Wertebereich 0 bis 4 ergibt gespiegelt und invertiert 5 bis 9 | *Exzess-3-Code*, *Aiken-Code*   |
| Progressive Codes      | Aufeinander folgende Zahlen unterscheiden sich in einem Bit   | *Gray-Code*, *Glixon-Code*      |
| Gleichgewichtige Codes | Jedes Wort ist gleich lang und hat die gleiche Anzahl an $1$  | *Walking-Code*, *w-aus-m-Codes* |
| Fano-Bedingung         | Jedes Wort im Binärbaum ist in den Blättern des Baums         | *bcd-Code*                      |

Die **Hamming-Distanz** $D$ gibt die minimale Anzahl an unterschieden zwischen zwei beliebigen Wörtern an. Die Anzahl an erkennbaren Fehlern beträgt $D - 1$. Die Anzahl an korrigierbaren Fehler beträgt $\frac{D}{2}$.

Ein weiteres Verfahren zur Fehlererkennung und Korrektur ist die **Blockprüfung**. Mit der Blockprüfung kann ein Code erweitert werden, um die Position von Fehlern zu finden und zu beheben. Es ist die Kombination aus VRC und LRC.

| VRC (vertical redundancy check)                                               | LRC (longitudinal redundancy check)                                            |
| ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| Prüft die Korrektheit in einem Block nach jeder Zeile, durch ein Paritätsbit. | Prüft die Korrektheit in einem Block nach jeder Spalte, durch ein Paritätsbit. |

*(Paritäts-Festlegung wird im voraus ausgemacht)*

### Kompression
Verlustfreie Kompression komprimiert eine Eingabe ohne Verlust von Informationen. Der Huffman-Code komprimiert beispielsweise Texte verlustfrei.
Informationsreduzierende Codes komprimieren nicht verlustfrei. Diese Kompression wird auf Bild-, Video- und Audiodateien verwendet. Die Kompression kann nicht mehr rückgängig gemacht werden, ist aber in den meisten Fällen auch nicht nötig. Beispiele wären MP3 und JPEG.



## Schaltungen
### Moore's Law
Die Komplexität integrierter Schaltkreise verdoppelt sich regelmäßig (ca. 2 Jahre)

### Logische Gatter
In Logischen Gattern werden die Logischen Werte Wahr und Falsch mit Bereichen definiert. Dabei ist der Bereich näher an $+\infty$ Wahr und der Bereich näher an $-\infty$ Falsch. Zwischen den Bereichen ist ein Sicherheitsabstand, welcher undefiniert ist.

<img src="./logische_bereiche.svg" />

Logische Gatter sind Verknüpfungen aus der Aussagen Logik.

| Gatter      | Schaltsymbol             | Beschreibung         |
| ----------- | ------------------------ | -------------------- |
| not-Gatter  | <img src="./not.svg" />  | Negation             |
| and-Gatter  | <img src="./and.svg" />  | Konjunktion          |
| or-Gatter   | <img src="./or.svg" />   | Disjunktion          |
| xor-Gatter  | <img src="./xor.svg" />  | Äquivalenz           |
| nand-Gatter | <img src="./nand.svg" /> | Negierte Konjunktion |
| nor-Gatter  | <img src="./nor.svg" />  | Negierte Disjunktion |
| xnor-Gatter | <img src="./xnor.svg" /> | Negierte Äquivalenz  |

Eine Menge an Gattern wird als vollständiges System bezeichnet, wenn mit der Menge alle Gatter gebildet werden können. Die Menge $\{nand\}$ wäre ein mögliches vollständiges System.

### Schaltnetz
Ein Schaltnetz ist eine Zeitunabhängige Funktion, ohne Speicher.
$$f(A, B, ...) = (Y_1, Y_2, ...)$$


### FlipFlops (Schaltwerk)
Ein Schaltwerk ist eine Zeitabhängige Funktion. Dies würd durch **Rückkopplung** der Eingänge erreicht.
$$f(A, B, ..., Y_{n-1, 1}, ...) = (Y_{n, 1}, Y_{n, 2}, ...)$$

#### Nicht-Taktgesteuerte FlipFlops (Basis-FlipFlop)
| FlipFlop     | Schaltung                            | Beschreibung |
| ------------ | ------------------------------------ | ------------ |
| RS NOR-Latch | <img src="./rs_nor_latch.svg.svg" /> |              |


#### Taktgesteuerte FlipFlops
| FlipFlop    | Schaltung                                       | Beschreibung |
| ----------- | ----------------------------------------------- | ------------ |
| RS-FlipFlop | <img src="./taktgesteuertes_rs_flipflop.svg" /> |              |
| D-FlipFlop  | <img src="./taktgesteuertes_d_flipflop.svg" />  |              |


#### Flankengesteuerte FlipFlops
Ein Impulsglied erkennt positive Flanken eines Signals, die Zeitpunkte zu denen ein Signal von Falsch zu Wahr wechselt.

<img src="./impulsglied.svg" />

##### Einflankengesteuerte FlipFlops
| FlipFlop    | Schaltung                                             | Beschreibung |
| ----------- | ----------------------------------------------------- | ------------ |
| RS-FlipFlop | <img src="./einflankengesteuertes_rs_flipflop.svg" /> |              |
| D-FlipFlop  | <img src="./einflankengesteuertes_d_flipflop.svg" />  |              |
| JK-FlipFlop | <img src="./einflankengesteuertes_jk_flipflop.svg" /> |              |


##### Zweiflankengesteuerte FlipFlops
| FlipFlop    | Schaltung                                              | Beschreibung |
| ----------- | ------------------------------------------------------ | ------------ |
| JK-FlipFlop | <img src="./zweiflankengesteuertes_jk_flipflop.svg" /> |              |

## Computer Hardware
### CPU
| Architektur             |     |                         |
| ----------------------- | --- | ----------------------- |
| Von-Neumann-Architektur |     | langsam durch einen Bus |
| Harvard-Architektur     |     | schnell aber komplex    |


### Speicher
Speicher welche näher an der CPU sind, sind deutlich schneller, jedoch haben diese schon für geringe mengen Speicherplatz hohe Kosten. Langsamere Speicher sind oft billiger.

| Kategorie        | Beschreibung              | Beispiele     |
| ---------------- | ------------------------- | ------------- |
| Primärspeicher   | interne kurzzeit Speicher | RAM/ROM       |
| Sekundärspeicher | interne langzeit Speicher | SSD/HDD       |
| Tertiärspeicher  | externe Speicher          | CD/Magnetband |

Für optimale Performace wird ein großer Block an Daten aus einem Sekundär- oder Tertiärspeicher in den Primärspeicher geladen.



## Betriebssysteme
Das Betriebssystem verwaltet alle Prozesse, die Leistung und bietet abstrakte Schnittstellen zu der Hardware. Zudem werden die Prozesse von einander getrennt und besitzen unterschiedliche Rechte.
Zudem werden Benutzer verwaltet. Ein Benutzer kann maximal Administrator-Rechte besitzen/ausführen. Das Betriebssystem ist im Kernel-modus und hat damit noch höhere Rechte.

- Job-Managment
- Task-Managment
- Data-Managment

- Programm - Prozess - Thread

- Monolithischer Kernel: schnell komplex
- Schichtenmodell: flexibel aber langsamer
- Mikrokern Architektur (server bereich)

| Betriebssystemkategorie              |
| ------------------------------------ |
| Großrechner                          |
| Serverbetriebssyteme                 |
| Personal Computer Betriebssytem      |
| Echtzeit-Betriebssytem               |
| Embedded Systems                     |
| Betriebssytem für Tablets und Handys |
| Smartcard-Betriebssytem              |

Betriebssysteme können unterschiedlich betrieben werden.

| Betriebsart                            | Beschreibung                                     | Anwendung         |
| -------------------------------------- | ------------------------------------------------ | ----------------- |
| Stapelbetrieb/Batch-Verarbeitung       | nicht-interaktiv (Stapel/Queue abarbeitung)      |                   |
| Dialogbetrieb/Prozessbetrieb           | interaktiv                                       | Personal-Computer |
| Echtzeitbetrieb                        | Verarbeitungszeit festgelegt                     | Automation        |
| Einprogrammbetrieb                     | immer nur ein Programm                           |                   |
| Mehrprogrammbetrieb (Multiprogramming) | mehrere Programme gleichzeitig                   |                   |
| Einbenutzerbetrieb                     | nur ein Nutzer zu bestimmten Zeitpunkt           | Personal-Computer |
| Mehrbenutzerbetrieb                    | mehrere Benutzer gleichzeitig                    | Server            |
| Einprozessorbetrieb                    | ein Prozessor für alles                          |                   |
| Mehrprozessorbetrieb                   | mehrere Prozessoren                              |                   |
| Pipeline                               | wie Fließband - verarbeitung in vielen Stationen |                   |


### Betriebssystemvirtualisierung
- Virtuelle Computer
- Speicher Virtualisierung: Abstraktion von Speicheradressen (sicherer und einfacher)
- Anwendungsvirtualisierung
- Virtuelle Prozessumgebung
- Virtuelle Prozessoren: Java Virtual Machine
- Netzwerkvirtualisierung (vLAN): 

- Emulation - Virtualisierung: Komplette Nachbildung der Hardware in Software - Geringer Teil muss nachgebildet werden


JVM & .NET


### Interrupts
- Polling: aktives warten (permanent abfragen)
- Interrupt: unterbrechen (sofortiges abfangen) Betriebssystembedingung (Fehler) asynchrones Ereignis (Klick)
- synchron von CPU ausgelöst
- asynchron unabhängig von System

- interrupt service tabelle - Schnittstellen zu Betriebssystem
- interrupt service routinen aufgerufen je nach interrupt

deferred interrupt: interrupt später verarbeitet (niedrige priorität)

animation interrupt wikipedia

Systemcalls: schnittstellen zum betriebssystemkern


## Netzwerktechnik

