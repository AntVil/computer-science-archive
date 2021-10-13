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

### Liste

### Stack

### Queue

### Baum

#### AVL-Baum

#### Heap

### Graph

### Symboltabellen




### Iterative Tiefensuche
- optimal
- geringerer Suchaufwand als bei Tiefensuche
- vollständig
- geringerer Platzbedarf (wie Tiefensuche)

