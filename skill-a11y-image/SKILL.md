---
name: accessibilite-image
description: >
  Concevoir, implémenter, auditer et tester les images accessibles sur le web
  (img, SVG, picture, images CSS, images fonctionnelles et graphiques) selon le RGAA 4.1.2.
---

# Skill — Accessibilité des images

## Quand utiliser ce skill
Activer pour toute demande portant sur une image web, une alternative textuelle, un SVG, un pictogramme, un logo, un graphique, une légende, une image CSS, un lien ou bouton contenant une image, ou un contrôle d'accessibilité de ces éléments.

## Principes impératifs
1. **Examiner le contexte** avant de classer une image. Une même image peut être informative ou décorative selon sa page.
2. **Privilégier HTML natif**, le texte réel et des noms accessibles pertinents. Ne pas ajouter ARIA ou tabindex par réflexe.
3. **Ne pas inventer de résultat de test** : séparer code inspecté, vérification automatisée réellement exécutée, et contrôle humain restant.
4. **Ne pas assimiler succès axe-core à conformité RGAA**. Le RGAA 4.1.2 officiel fait foi ; les autres règles pertinentes (liens, scripts, couleurs, structuration) s'appliquent aussi.
5. **Expliquer les décisions**, signaler les hypothèses et les cas particuliers ; si le contexte manque, demander uniquement les informations déterminantes.

## Ressources : ouvrir selon le besoin
- `references/decision.md` : arbre de décision et cas d'usage.
- `references/regles-rgaa.md` : critères et liens normatifs.
- `references/html.md` : implémentations HTML/SVG/CSS, exemples conformes et erreurs.
- `references/comportements.md` : clavier, focus, technologies d'assistance.
- `references/gherkin.md` : critères d'acceptation et scénarios.
- `references/checklist.md` : revue DEV/QA et limites de l'automatisation.
- `scripts/images.spec.ts` : tests automatisés Playwright/axe-core, nécessitant un environnement Node.
- `scripts/fixtures/images.html` : page de démonstration pour les tests.

## Processus d'analyse et de génération
1. Identifier : rôle informatif/décoratif/fonctionnel/complexe/texte, élément HTML, contexte et nom accessible final.
2. Vérifier la nécessité d'une description détaillée, d'une légende et d'une interaction.
3. Consulter `references/html.md`, proposer un code minimal fonctionnel adapté au framework ; ne pas modifier l'apparence sans nécessité.
4. Donner les comportements attendus, en distinguant parcours au clavier et navigation du lecteur d'écran.
5. Proposer Gherkin et contrôles Playwright pertinents, plus une liste explicite des vérifications manuelles.
6. Citer les critères RGAA applicables, sans attribuer un numéro de critère non vérifié.
7. Conclure : **conforme sur points vérifiés / non conforme / à vérifier / non applicable**. Ne jamais déclarer la conformité globale d'un composant sur la seule inspection du code.

## Format de réponse suggéré
**Contexte et classification → Règles → Code recommandé → Restitution → Gherkin → Tests automatisables → Tests manuels → Statut et limites**.
Pour une demande très simple, répondre plus brièvement sans omettre les risques majeurs.

## Maintien
Propriétaire : équipe accessibilité (à compléter). Version du pack : 1.0.0. Référentiel : RGAA 4.1.2. Statut : prototype à valider en interne. Adapter les tests aux composants et environnements du projet.
