# Mathematik

## Grundlegende Mathematik
### Mengen
Eine Menge ist eine **ungeordnete** Sammlung von Objekten, den Elementen. Man schreibt $m \in M$ um auszudrücken, dass das Objekt $m$ ein Element der Menge $M$ ist. Mit $m \notin M$ wird das Gegeteil ausgedrückt. Mengen können auch andere Mengen enthalten, jedoch nicht sich selbst. Mengen können auf zwei verschiedene Arten definiert werden. Durch Aufzählung der Elemente oder durch deren Charakteristische Eigenschaft.

<img src="./menge.svg">

$$\left\{a, b, c, d\right\}$$

Die Menge, welche keine Elemente enthält wird mit $\emptyset$ oder $\{\}$ bezeichnet.



### Tupel
Ein Tupel ist eine **geordnete** Sammlung von Objekten.
$$\left(a, b, c, d\right)$$

### Relationen
#### Mengen-Relationen
Zwischen zwei Mengen sind folgende Relation definiert.

| Relation        |  Schreibweise   | Beschreibung         |
| :-------------- | :-------------: | :------------------- |
| Gleich          |     $M = N$     | Gleiche Elemente     |
| Teilmenge       | $M \subseteq N$ | Ausschnitt aus Menge |
| Echte-Teilmenge |  $M \subset N$  | Ausschnitt aus Menge |

Falls keine Relation besteht werden die Mengen als **Disjunkt** bezeichnet.
Relationen werden zum Beispiel für Konditionen verwendet.

#### Kartesisches Produkt
Das Kartesische Produkt liefert alle möglichen Kombinationen zwischen den Elementen von Mengen als Tupel.
$$M \times N = \left\{(m, n) | m \in M, n \in N\right\}$$

Das $n$-fache Kartesische Produkt einer Menge mit sich selbst ist wie folgt definiert.
$$M^n = M \times M \times ... \times M$$

#### Relationen
Eine Relation $R$ gibt die Beziehung zwischen bestimmten Objekten an. Sie ist eine Teilmenge eines Kartesischen Produkts.
$$R \subseteq M^n$$

Mit $\left(a, b\right) \in R$ bezeichnet man, dass $a$ mit $b$ in Relation steht. Eine Relation $R$ kann auf verschiedene Mengen bezogen sein und verschiedene Eigenschaften auf den jeweiligen Mengen besitzen.


#### Relationen-Eigenschaften
| Eigenschaft        | Definition                                            | Beschreibung                                                         | Beispiel Graph                         |
| ------------------ | ----------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------- |
| Reflexiv           | $$\forall a \in M: (a, a) \in R$$                     | Alles steht mit sich selbst in Relation                              | <img src="./reflexiv.svg"/>            |
| Symmetrisch        | $$(a,b) \in R \Rightarrow (b,a) \in R$$               | Alle Relationen sind Beidseitig.                                     | <img src="./symmetrisch.svg"/>         |
| Antisymmetrisch    | $$(a,b), (b,a) \in R \Rightarrow a = b$$              | Alle Relationen sind Einseitig.                                      | <img src="./antisymmetrisch.svg"/>     |
| Transitiv          | $$(a,b),(b,c)\in R \Rightarrow (a,c)\in R$$           | Über zwei Relationen verknüpfte Elemente sind auch direkt verknüpft. | <img src="./transitiv.svg"/>           |
| Total              | $$\forall a,b \in M: (a,b) \in R \lor (b,a) \in R$$   | Alles steht mit allem mindestens Einseitig in Relation.              | <img src="./total.svg"/>               |
| Halbordnung        | Reflexiv, <b>Antisymmetrisch</b> und Transitiv.       | -                                                                    | <img src="./halbordnung.svg"/>         |
| Totalordnung       | Reflexiv, <b>Antisymmetrisch</b> Transitiv und Total. | Die Relation gibt den Elementen eine Reihenfolge.                    | <img src="./totalordnung.svg"/>        |
| Äquivalenzrelation | Reflexiv, <b>Symmetrisch</b> und Transitiv            | Die Relation unterteilt eine Menge in Äquivalenzklassen.             | <img src="./aequivalenzrelation.svg"/> |


#### Äquivalenzklassen
Alle Elemente einer Äquivalenzklasse sind Äquivalent.

| Äquivalenzklasse 1                                | Äquivalenzklasse 2                     |
| ------------------------------------------------- | -------------------------------------- |
| <img src="./aequivalenzklasse_1.svg"/>            | <img src="./aequivalenzklasse_2.svg"/> |
| $$[a]_R = [b]_R = [c]_R$$ $$[a]_R = \{a, b, c\}$$ | $$[d]_R$$ $$[d]_R = \{d\}$$            |

Die Menge der Äquivalenzklassen lautet wie folgt.

$$M/R = \{\{a, b, c\}, \{d\}\}$$


### Abbildungen
Eine Abbildung bzw. Funktion ist ein Sonderfall einer Relation.
$$f = \left\{\left(m_1, n_1\right), \left(m_2, n_2\right), ...\right\} \subset M \times N$$

Sie weist jedem Element aus einer Menge, dem Definitionsbereich, eine Element aus einer Menge, dem Bildbereich, zu. Formal wird folgende Schreibweise verwendet.

$$f: M \rightarrow N$$
$$m_1 \mapsto n_1$$
$$m_2 \mapsto n_2$$
$$...$$

Um für ein Element $x$ das von der Funktion $f$ zugeordnete Element $y$ zu erhalten wird folgende Notation verwendet.

$$y = f(x)$$

Die Abbildung $id_M$ ist die Identität auf einer Menge $M$. Sie bildet jedes Element der Menge auf das gleiche Element ab.
Mit $f \circ g$ drückt man aus, dass $f$ nach $g$ ausgeführt wird. Wenn $f \circ g = id_N$ und $g \circ f = id_M$ gilt dann sind $f$ und $g$ invers zu einander.

$$f:M \rightarrow N$$
$$m_1 \mapsto n_1$$
$$m_2 \mapsto n_2$$
$$...$$

$$g:N \rightarrow M$$
$$n_1 \mapsto m_1$$
$$n_2 \mapsto m_2$$
$$...$$


Der Bildbereich ist so definiert:

$$Bild(f) = \{f(m) | m \in M\}$$

Mit $Abb(M, N)$ erhält man eine Menge aller Abbildungen von der Menge $M$ zur Menge $N$.

|                              Injektiv                               |                              Surjektiv                              |
| :-----------------------------------------------------------------: | :-----------------------------------------------------------------: |
|                     <img src="./injektiv.svg">                      |                     <img src="./surjektiv.svg">                     |
| Jedes Element aus dem Bildbereich wird **maximal einmal** getroffen | Jedes Element aus dem Bildbereich wird **minimal einmal** getroffen |
|        $$\forall a,b \in M: f(a) = f(b) \Rightarrow a = b$$         |           $$\forall b \in N: \exists a \in M: f(a) = b$$            |

|                                                     Bijektiv                                                     |
| :--------------------------------------------------------------------------------------------------------------: |
|                                            <img src="./bijektiv.svg">                                            |
| Jedes Element aus dem Bildbereich wird **genau einmal** getroffen. Bijektive Abbildungen sind immer invertierbar |


### Mengen-Operationen
Um Operationen auf Mengen auszuführen benötigt man ein **Universum** $U$, als Referenz Menge.

| Vereinigung                   | Schnitt                   | Differenz                   | Komplement                   |
| ----------------------------- | ------------------------- | --------------------------- | ---------------------------- |
| <img src="./vereinigung.svg"> | <img src="./schnitt.svg"> | <img src="./differenz.svg"> | <img src="./komplement.svg"> |
| $$M \cup N$$                  | $$M \cap N$$              | $$M \setminus N$$           | $$M^C$$                      |

Die Menge aller Teilmengen der Menge $M$ erhält man wie folgt.
$P(M)=\{m \in U m \subseteq M\}$

### Zahlen Mengen
#### Natürliche Zahlen
Die Menge der Natürlichen Zahlen ist rekursiv definiert. Die Zahl $1$ ist eine Natürliche Zahl.
$$1 \in \mathbb{N}$$
Für jede natürliche Zahl $n$ ist der Nachfolger $\sigma(n)$ auch eine Natürliche Zahl.
$$n \in N \Rightarrow \sigma(n) \in N$$

Für die Menge $\mathbb{N_0}$ gilt zusätzlich.
$$\mathbb{N_0} = \{0\} \cup \mathbb{N}$$
$$\sigma(0) = 1$$

#### Ganze Zahlen
Die Menge der Ganzen Zahlen ist eine Äquivalenzrelation auf den Natürlichen Zahlen.
$$\mathbb{Z} = \left\{((a,b), (c,d)) \in (\mathbb{N_0} \times \mathbb{N_0})^2 | a + d = b + c\right\}$$

#### Kongruenzklassen
Eine Kongruenzklasse 

#### Rationale Zahlen
Die Menge der Rationalen Zahlen ist eine Äquivalenzrelation auf den Ganzen Zahlen.
$$\mathbb{Q} = \left\{((a,b), (c,d)) \in (\mathbb{Z} \times (\mathbb{Z} \setminus \{0\}))^2 | a \cdot d = b \cdot c\right\}$$

#### Reele Zahlen


### Algebraische Strukturen
Algebraische Strukturen ermöglichen es Gesetze für Operationen auf bestimmten Mengen zu formen. Sie bestehen aus einer Menge und einer oder zwei Operationen.
$$(M, \oplus)$$
$$(M, \oplus, \odot)$$

Operationen können unterschiedliche Eigenschaften haben.

| Eigenschaft       |                                   Definition                                    |
| :---------------- | :-----------------------------------------------------------------------------: |
| Abgeschlossenheit |             $$\forall a, b \in M: \exists c \in M: a \oplus b = c$$             |
| Assoziativ        |    $$\forall a, b, c \in M: a \oplus (b \oplus c) = (a \oplus b) \oplus c$$     |
| Neutral Element   |              $$\exists n \in M: \forall e \in M: e \oplus n = e$$               |
| Inverse Elemente  | $$\exists n \in M: \forall e \in M: \exists e^{-1} \in M: e \oplus e^{-1} = n$$ |
| Kommutativ        |                 $$\forall a,b \in M: a \oplus b = b \oplus a$$                  |
| Distributiv       | $$\forall a,b,c \in M: a \odot (b \oplus c) = (a \odot b) \oplus (a \odot c)$$  |

Die Eigenschaften der Operationen auf der Menge bestimmen die Algebraische Struktur.

<img style="max-width: 100%;" src="./algebraische_strukturen.svg"/>

#### Vektorraum
Über einem Körper $M$ kann ein Vektorraum $M^n (n \in \mathbb{N_0})$ definiert werden. Elemente $v$ des Vektorraums $M^n$ werden mit $\vec{v}$ bezeichnet um sie von Elementen des Körpers zu unterscheiden. In solchen Vektorräumen sind zwei Operationen definiert.

| Addition                                                                              | Skalarmultiplikation                                                        |
| ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| $$\oplus: M^n \times M^n \rightarrow M^n$$ $$\vec{a} \oplus \vec{b} \mapsto \vec{c}$$ | $$\odot: M \times M^n \rightarrow M^n$$ $$a \odot \vec{b} \mapsto \vec{c}$$ |
| *(Komponentenweise addiert wie im Körper)*                                            | *(Komponenten skaliert wie im Körper)*                                      |

Ein Untervektorraum ist eine Teilmenge des Vektorraums, welche selbst ein Vektorraum ist.

## Graphen Theorie
Ein Graph $G$ besteht aus einer Knoten-Menge $M$ und einer Kanten-Menge $R$, wobei $M$ eine beliebige Menge und $R$ eine Relation auf $M$ ist.
$$R = M^2$$
$$G = (M, R)$$

Graphen eignen sich zur visualisierung von Relationen.
![](./graph.svg)

Ein Graph ist **ungerichtet**, falls die Relation $R$ symmetrisch ist, ansonsten ist der Graph **gerichtet**. Wenn jeder Knoten von jedem Knoten erreichbar ist, wird der Graph als **zusammenhängend** bezeichnet. Ein zusammenhängender Graph ohne Zyklen wird als Baum bezeichnet.
![](./baum.svg)

In einem Baum ist der Weg von jedem Knoten zu jedem Knoten eindeutig. In manchen Fällen wird ein Start für einen Baum definiert, die **Wurzel** (orange). Jeder Knoten, welcher nur eine Kante besitzt wird als **Blatt** (lime) bezeichnet. Alle anderen Knoten werden als **Innereknoten** (cyan) bezeichnet.
![](./baum_hierachie.svg)

Die Tiefe eines Baums ist die maximale Länge eines Pfades von der Wurzel zu einem Blatt.

## Sprachen
### Formale Sprachen
### Automaten
### Aussagen Logik
### Prädikaten Logik


## Analysis
### Folgen und Reihen
### Differenzial Rechnung
### Integral Rechnung


## lineare Algebra
### Vektoren
### Lineare Transformationen
