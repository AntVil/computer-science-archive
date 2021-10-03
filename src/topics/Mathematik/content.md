# Mathematik
## Mengen
Eine Menge ist eine **ungeordnete** Sammlung von Objekten, den Elementen. Man schreibt $m \in M$ um auszudrücken, dass das Objekt $m$ ein Element der Menge $M$ ist. Mengen können auch andere Mengen enthalten, jedoch nicht sich selbst. Mengen können auf zwei verschiedene Arten definiert werden. Durch Aufzählung der Elemente oder durch deren Charakteristische Eigenschaft. Zweimal die **gleiche** Menge:
$$\left\{1, 2, 4, 8, 16,...\right\} = \left\{x \in \mathbb{N}_0 | \exists k \in \mathbb{N}_0: x = 2^k\right\}$$
Die Menge, welche keine Elemente enthält wird mit $\emptyset$ bezeichnet.
$\{\} = \emptyset$


![beispiel_menge]()

Mit $n \notin M$ wird ausgedrückt, dass das Objekt $n$ nicht in der Menge $M$ enthalten ist.
Eine **unendliche** Menge heißt Abzählbar, wenn es eine bijektive Abbildung zwischen $\mathbb{N}_0$ und der Menge gibt. Wenn es keine gibt heißt die Menge Überabzählbar.

### Relationen
Gleich
$$M = N$$

*(Gleiche Elemente)*

#### Teilmenge
$$M \subseteq N$$

*(Ausschnitt aus Menge)*

#### Echte-Teilmenge
$$M \subset N$$

*(Ausschnitt aus Menge)*

#### Disjunkt
$M$ und $N$ sind disjunkt

*(Nicht in Relation)*

### Operationen
Um Operationen auf Mengen auszuführen benötigt man ein **Universum** $U$, als Referenz Menge.
#### Vereinigung
![beispiel_vereinigung]()
$M \cup N$
#### Schnitt
![beispiel_schnitt]()
$M \cap N$
#### Differenz
![beispiel_differenz]()
$M \setminus N$
#### Komplement
![beispiel_komplement]()
$M^C$

### Kardinalität
Mächtigkeit einer Menge
$|M| \in \mathbb{N}_0$
### Potenzmenge
Menge aller Teilmengen
$P(M)=\{m \in U m \subseteq M\}$

### Kartesisches Produkt
Mit $(a, b, ...)$ bezeichnet man ein Tupel, eine **geordnete** Sammlung an Objekten. Beim Kartesischen Produkt entsteht eine Menge aus Tupeln.
$M \times N = \{(m,n) | m \in M, n \in N\}$
$M^n = M \times M \times ...$
### Kleenscher Abschluss
$M^* = M^0 \cup M^1 \cup ...$
### Positive Hülle
$M^+ = M^1 \cup M^2 \cup ...$
