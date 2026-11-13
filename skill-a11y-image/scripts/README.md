# Exécuter les tests de démonstration

Prérequis : Node.js, npm et navigateur Playwright. Ce répertoire contient une **fixture pédagogique** et des tests automatiques ; il ne vérifie pas un projet réel tant que les sélecteurs et pages ne sont pas adaptés.

À la racine du Skill :
```bash
npm install
npx playwright install chromium
npm test
```

- `fixtures/images.html` : cas conformes volontairement simples, dont le contenu sémantique reste à apprécier manuellement.
- `images.spec.ts` : contrôles axe-core, `alt`, nom accessible et interaction clavier.
- `playwright.config.ts` : ouvre la fixture via `file://` pour une démonstration autonome ; pour un projet réel, remplacer par une URL servie en HTTP(S).

**Important :** une suite verte ne constitue pas un audit RGAA complet ; valider manuellement la pertinence des textes, des descriptions et la restitution lecteur d'écran.
