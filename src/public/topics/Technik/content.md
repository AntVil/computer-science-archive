# Technik
## Analog-Digital


## Codierungen


## Schaltungen
### Schaltnetz


### FlipFlops (Schaltwerk)


## Computer Hardware
### CPU
| Architektur             |     |                         |
| ----------------------- | --- | ----------------------- |
| Von-Neumann-Architektur |     | langsam durch einen Bus |
| Harvard-Architektur     |     | schnell aber komplex    |


### Speicher
| Kategorie        | Beschreibung              | Beispiele     |
| ---------------- | ------------------------- | ------------- |
| Primärspeicher   | interne kurzzeit Speicher | RAM/ROM       |
| Sekundärspeicher | interne langzeit Speicher | SSD/HDD       |
| Tertiärspeicher  | externe Speicher          | CD/Magnetband |

Beispiele nicht für Klausur

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

