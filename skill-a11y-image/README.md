# Accessibilité web — Composant Image

**Référentiel :** RGAA 4.1.2 · **Version du pack :** 1.0.0 · **Statut :** prototype à valider par l'équipe accessibilité.

Ce dossier est à la fois une **documentation lisible sans IA** et un **Skill pour les assistants compatibles**. Il peut être publié sur Confluence (pages créées depuis les références), sur un site Markdown ou consulté dans VS Code.

## Par où commencer ?
| Besoin | Fichier |
| --- | --- |
| Comprendre comment choisir une alternative | [Arbre de décision](references/decision.md) |
| Lire les exigences RGAA | [Règles RGAA](references/regles-rgaa.md) |
| Copier du code HTML, SVG ou CSS | [Exemples de code](references/html.md) |
| Savoir ce qu'attendre au clavier et avec NVDA/VoiceOver | [Comportements](references/comportements.md) |
| Rédiger les critères d'acceptation | [Gherkin](references/gherkin.md) |
| Vérifier une livraison | [Checklist](references/checklist.md) |
| Lancer des contrôles automatisés | [Tests Playwright](scripts/README.md) |
| Configurer une IA compatible | [SKILL.md](SKILL.md) |

## Périmètre
Images `<img>`, `<picture>`, `<svg>`, images CSS, `<figure>`/`<figcaption>`, logos, icônes, images fonctionnelles, images de texte, graphiques et schémas. Les CAPTCHA et cas spécifiques sont signalés ; leur conformité requiert un examen dédié.

## Utilisation sans IA
Consulter les liens ci-dessus dans l'interface Markdown de Git, VS Code ou dans la publication Confluence. Les équipes non techniques n'ont pas besoin d'exécuter les scripts. Les pages Confluence doivent provenir des mêmes fichiers sources afin d'éviter deux référentiels divergents.

## Règle qualité
La présence d'un `alt` ou l'absence de violations axe-core **ne prouve pas** que le contenu est accessible. Vérifier la pertinence en contexte et, lorsque nécessaire, la restitution réelle par technologies d'assistance.

## Sources
- [RGAA 4.1.2 — critères et tests](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [W3C WAI — Images tutorial](https://www.w3.org/WAI/tutorials/images/)
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)

**Gouvernance :** propriétaire, date de revue, liste des navigateurs/lecteurs d'écran supportés et validation interne à compléter avant diffusion.
