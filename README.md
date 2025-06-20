# Website auf Azure

## Projektübersicht

Ziel ist es, eine öffentlich erreichbare Webseite mit automatisiertem Deployment, täglichem Backup und aktivem Monitoring bereitzustellen. Dies kosteneffizient, wartbar und sicher.

---

## Projektziele

- Deployment einer statischen Webanwendung
- Nutzung mehrerer Azure-Dienste (Static Web Apps, Blob Storage, Monitoring)
- Einrichtung eines Backupsystems
- Vollständiges Monitoring & Alerting
- Dokumentation der Netzwerktopologie und Infrastruktur
- CI/CD Prozess mit automatischer Veröffentlichung
- Benutzerfreundliches, responsives Frontend mit interaktiven Elementen

---

## Technologie-Stack

| Bereich             | Dienst / Tool              |
|---------------------|----------------------------|
| Hosting             | Azure Static Web Apps      |
| CI/CD               | GitHub Actions             |
| Backup              | Azure Blob Storage + CLI Skript |
| Monitoring          | Azure Monitor, Alerts      |
| DNS & Domain        | Azure DNS (optional)       |
| Frontend            | HTML, CSS, Vanilla JS      |
| Versionierung       | GitHub                     |

---

## Projektinhalt

- `/code/` – Webseitenquelle (`index.html`, CSS, JS)
- `/docs/` – Architekturdiagramme, Netzwerklayout, Sicherheitskonzept
- `.github/workflows/` – Automatisiertes Deployment via GitHub Actions
- `README.md` – Projekteinführung, technische Umsetzung und Bewertung

---

## Funktionen der Webanwendung

- Produktübersicht mit Beschreibung, Preis, Bild
- Interaktiver Warenkorb mit Mengenberechnung
- Dynamisches UI mit JavaScript (z. B. Benachrichtigungen, Summenberechnung)
- Validierung von Nutzereingaben
- Responsives Design für mobile & Desktopgeräte
- Vollständig clientseitig, geeignet für Azure Static Web Apps

---

## CI/CD & Deployment

- Automatischer Deploy bei jedem Push auf `main`
- Konfiguration über GitHub Actions (`.yml`)
- Verwendung des Azure Static Web Apps Deployment Tokens
- `app_location` auf `code/` gesetzt

```yaml
app_location: "code"
api_location: ""
output_location: ""
```

---
## Sicherheitsaspekte

- HTTPS für alle externen Verbindungen (via Azure SWA)

- Keine externen APIs oder benutzerbezogenen Daten im Frontend

- Zugriff auf Azure-Konfigurationen durch GitHub Secrets - geschützt

- Monitoring und Benachrichtigungen für Fehlerfälle aktivierbar

- Speicher-Backup verschlüsselt abgelegt


---
## Voraussetzungen

- Microsoft Azure Student-Abonnement

- GitHub-Konto

- Azure Static Web App Ressource konfiguriert

- GitHub Secrets für API-Token hinterlegt


---
## Ausblick & Weiterentwicklung

- Integration eines Kontaktformulars mit Validierung

- Erweiterung um Adminbereich (z. B. mit Static CMS)

- Nutzung von Azure DNS mit benutzerdefinierter Domain

---
## Autor

