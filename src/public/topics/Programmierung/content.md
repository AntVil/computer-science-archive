# Programmierung

## Algorithmen
Ein Algorithmus beschreibt den Weg, wie man für eine Eingabe $e \in E$ eine Ausgabe $a \in A$ erhält. Er löst alle Probleme einer bestimmten Klasse an Problemen. Ein Algorithmus funktioniert wie eine Partielle Abbildung, da nicht alle Eingaben nach endlicher Zeit zu einer Ausgabe führen.
$$f: E \rightarrow A$$
$$x \mapsto \perp$$
$$e_1 \mapsto a_1$$
$$...$$

Eine Abbildung heißt berechenbar, wenn es mindestens einen Algorithmus gibt, welcher für jede Eingabe aus dem Wertebereich eine Ausgabe aus dem Bildbereich liefert.

### Komplexität
Die Komplexität beschreibt das Laufzeitverhalten eines Programms, wenn sich die Größe $n$ der Eingabe ändert. Man kann dies als eine Abbildung $f: \mathbb{N} \rightarrow \mathbb{N}$ mit zum Beispiel $n \mapsto n^2$ auffassen.
Mit $O(f)$ wird eine Menge beschrieben, welche alle Laufzeiten enthält, welche etwa gleich oder langsamer sind als $f$.
Mit $\Omega(f)$ wird eine Menge beschrieben, welche alle Laufzeiten enthält, welche etwa gleich oder schneller sind als $f$.
Mit $\Theta(f)$ wird eine Menge beschrieben, welche alle Laufzeiten enthält, welche etwa gleich-schnell sind wie $f$.
$$f_1: \mathbb{N} \rightarrow \mathbb{N}$$
$$n \mapsto n^2 + \lceil \log(n)\rceil$$
$$f_1 \in \Theta(n \mapsto n^2)$$

Ein nicht-deterministischer Algorithmus ist ein Algorithmus, welcher nicht eindeutige Anweisungen hat und immer die **richtige** Anweisung ausführt, welche in dem Moment gebraucht wird. Die Funktionsweise wie der Algorithmus sich entscheidet ist unklar.

| Komplexitätsklasse P                                    | Komplexitätsklasse NP                                         |
| ------------------------------------------------------- | ------------------------------------------------------------- |
| deterministischen Algorithmen in polynomieller Laufzeit | nicht-deterministischen Algorithmen in polynomieller Laufzeit |

$$P \subseteq NP$$

Mit der Reduktion kann man zwei Probleme auf den gleichen Kern führen. Dieser Schritt des Zusammenführen soll in polynomieller Zeit machbar sein. Wenn man ein Problem $A$ auf ein Problem $B$ reduzieren werden kann, ist $B$ mindestens so schwer wie $A$.
$$A \leq B$$

Ein NP-hartes Problem ist ein Problem, welches mindestens so schwer ist wie das schwerste Problem aus NP. Ein NP-hartes Problem ist zum Beispiel <i>3SAT</i>.
$$\forall A \in NP: A \leq B$$

Ein NP-vollständiges Problem ist NP-hart und liegt selbst in NP.


## Datenstrukturen
### Array
Ein Array ist eine geordnete Sammlung, wobei jedes Element schnell über einen Index abgerufen oder verändert werden kann. Arrays können mehrere Dimensionen haben, jedoch muss die Größe eines Arrays bei seiner Erstellung vorgegeben werden und kann nicht verändert werden. Ein Array ähnelt einem Tupel.
$$a = (...)$$


### Liste
Eine Liste ist eine flexiblere Datenstruktur, da die Größe dynamisch verringert oder erweitert werden kann. Listen basieren auf Knoten und Pointern, welche leichter verändert werden können. Die Pointer eines Listen Elements zeigen immer auf den Nachfolger in der Liste, so kann diese iterativ durchlaufen werden.
Eine Liste ähnelt einer total Ordnung.

<img src="./liste.svg" />

Eine Liste kann auch bidirektional sein, die Pointer gehen in beide Richtungen. Dadurch kann die Listen einfach in beide Richtungen durchgegangen werden und wird noch flexibler.

<img src="./doppel_liste.svg" />


### Stack
Ein Stack (auch Stapel oder Keller) ist eine sonder Form einer Liste, bei der nur am Anfang eingefügt und entfernt werden kann. Er funktioniert nach dem Last-in-First-out Prinzip (LIFO)

<img src="./stack.svg" />


### Queue
Eine Queue (auch Schlange) ist eine sonder Form einer Liste, bei der nur am Ende eingefügt und am Anfang entfernt werden kann. Sie funktioniert nach dem First-in-First-out Prinzip (FIFO). Eine priority Queue funktioniert ähnlich wie eine normale Queue, jedoch haben Elemente eine Priorität, welche benutzt wird um beim Einfügen manche Elemente weiter vor zu ziehen, damit diese schneller bearbeitet werden.

<img src="./queue.svg" />


### Baum
Ein Baum ist eine Erweiterung der Liste. Wie bei der Liste hat jedes Element Nachfolger, jedoch kann ein Baum mehr als nur einen Nachfolger haben. Die maximale Anzahl an Nachfolgern wird mit der Ordnung angegeben.

<img src="./baum.svg" />

Ein Baum kann verschiedene Eigenschaften haben.
| balanciert                                                                                            | vollständig                                         | fast vollständig                                      |
| ----------------------------------------------------------------------------------------------------- | --------------------------------------------------- | ----------------------------------------------------- |
| Für jeden Knoten gilt, die Höhe des linken und rechten Teilbaum unterscheidet sich höchstens um eins. | Jede Ebene ist entweder leer oder komplett befüllt. | Beim Zeilenweise ablesen trifft man nicht auf Lücken. |

#### AVL-Baum

#### Heap

### Graph

### Symboltabellen




### Iterative Tiefensuche
- optimal
- geringerer Suchaufwand als bei Tiefensuche
- vollständig
- geringerer Platzbedarf (wie Tiefensuche)

