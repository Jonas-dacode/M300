# Website auf Azure

## Projektübersicht

Ziel ist es, eine öffentlich erreichbare Webseite mit automatisiertem Deployment, täglichem Backup und aktivem Monitoring bereitzustellen. Dies kosteneffizient, wartbar und sicher.

---

## Projektziele

- Deployment einer Webseite
- Nutzung mehrerer Azure-Dienste (App Services, Static Web Apps, Blob Storage, Monitoring)
- Einrichtung eines Backupsystems
- Vollständiges Monitoring & Alerting
- Dokumentation der Netzwerktopologie und Infrastruktur

---

## Technologie-Stack

| Bereich             | Dienst / Tool              |
|---------------------|----------------------------|
| Hosting             | Azure App Service oder Static Web App |
| CI/CD               | GitHub Actions, Azure CLI (alternativ) |
| Backup              | Azure Blob Storage + Automation |
| Monitoring          | Azure Monitor + Application Insights |
| DNS & Domain        | Azure DNS oder extern |

---

## Projektinhalt

- `src/` – Webseitenquelle (HTML, CSS, JS oder App-Code)
- `scripts/` – CLI-Skripte für Backup & Recovery
- `docs/` – Architekturdiagramme, Netzwerklayout, Sicherheitskonzept
- `README.md` – Projekteinführung (dieses Dokument)

---

## Sicherheitsaspekte

- HTTPS für alle Verbindungen
- Zugriffsbeschränkungen auf Managementschnittstellen
- Backup-Daten verschlüsselt gespeichert
- Alerting bei Anomalien oder Ausfällen

---

## 🛠️ Voraussetzungen

- Microsoft Azure Student Abonnement
- GitLab-Konto 
- Azure CLI (lokal, optional)


---

## Autor

Dieses Projekt wird im Rahmen eines Azure-Projekts dokumentiert und umgesetzt.
