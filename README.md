# Rendite & Realität

Astro-Website für das persönliche Immobilien- und Unternehmerjournal **Rendite & Realität**.

## Struktur

```txt
src/
  components/        Wiederverwendbare Bausteine
  content/journal/   Blog- und Erfahrungsbeiträge als Markdown
  content/mehrwerte/ Leadmagneten und Checklisten als Markdown
  data/site.ts       zentrale Stammdaten, Navigation, Unternehmenslinks
  layouts/           Seitenlayouts
  pages/             Website-Seiten und dynamische Detailseiten
public/images/       Bilder, Logos und Vorher/Nachher-Material
```

## Lokal starten

```bash
npm install
npm run dev
```

## Für Vercel

1. Repository in GitHub anlegen.
2. Diese Dateien in das Repository hochladen.
3. In Vercel das GitHub-Repository importieren.
4. Framework Preset: `Astro`.
5. Build Command: `npm run build`.
6. Output Directory: `dist`.
7. Domain verbinden.

## Vor dem Launch anpassen

- Kontaktdaten in `src/data/site.ts`
- LinkedIn- und Instagram-Links in `src/data/site.ts`
- finale Domain in `astro.config.mjs`
- Impressum in `src/pages/impressum.astro`
- Datenschutz in `src/pages/datenschutz.astro`
- bei Bedarf Newsletter/Formularanbieter für Leadmagneten

## Neue Beiträge hinzufügen

Neue Journalbeiträge kommen als Markdown-Dateien nach:

```txt
src/content/journal/
```

Neue Mehrwerte kommen nach:

```txt
src/content/mehrwerte/
```

Jede Datei braucht oben einen Frontmatter-Block wie:

```md
---
title: "Titel"
description: "Kurzbeschreibung"
date: 2026-05-18
category: "Erfahrung"
featured: false
image: "/images/interiors/interior-hero.jpg"
---
```
