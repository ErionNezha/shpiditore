<!-- Created by Erion Nezha — © 2026 All rights reserved -->
# ShpiDitore — Qera ditore deri në 5000 lekë

Shpi me qera **ditore** deri në **5000 lekë/nata** — 100% falas, **pa komision**.
Qytetet: **Tiranë, Durrës, Elbasan**.

## Linket live

- 🌐 Sajti live (Netlify): https://shpiditore.netlify.app
- 👀 Demo live (GitHub Pages): https://erionnezha.github.io/shpiditore/demo/
- 📄 Kjo faqe (demo + kodi burim): https://erionnezha.github.io/shpiditore/

## Veçoritë

- 🔍 Kërkim sipas qytetit (Tiranë / Durrës / Elbasan)
- 💰 Filtër çmimi me tavan 5000 lekë/nata (çmimet mbi 5000 refuzohen automatikisht)
- 🏠 Filtra: tipi i shpisë, lagjja, facilitetet (WiFi, AC, parking, kuzhinë)
- 📄 Faqe detaji për çdo shpi me galeri dhe përshkrim
- 📲 Kontakt direkt me pronarin (telefon / WhatsApp) — pa ndërmjetës
- ➕ Formulari "Shto shpinë tënde falas" me validim të rreptë (numër shqiptar, çmim ≤ 5000)
- 🛡️ Njoftimet verifikohen para publikimit (anti-spam: honeypot + rate-limit)
- 📱 Mobile-first, dizajn i ngrohtë mesdhetar (krem + terrakota)

## Teknologjitë

- React 18 + Vite 6
- Netlify Functions + Netlify Blobs (ruajtja e njoftimeve)
- Deploy: Netlify (produksion) + GitHub Pages (demo)

## Struktura

```
shpiditore-github/
├── index.html      ← kjo faqe: demo live + paneli "Kodi Burim"
├── README.md
└── demo/           ← build-i statik i sajtit (demo live)
    ├── index.html
    ├── assets/
    └── code/       ← file-e burim për panelin e kodit
        ├── App.jsx
        ├── listings.js
        └── styles.css
```

---
Krijuar nga Erion Nezha — © 2026 All rights reserved
