# Exigences RGAA et sources

**Référence officielle :** [RGAA 4.1.2 — thématique Images](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#images). Vérifier la rédaction officielle, les tests et les cas particuliers avant toute conclusion d'audit.

| Critère | Sujet (résumé pédagogique, non citation normative) |
| --- | --- |
| 1.1 | Présence d'une alternative textuelle pour les images porteuses d'information. |
| 1.2 | Images de décoration correctement ignorées. |
| 1.3 | Pertinence des alternatives textuelles. |
| 1.4 | Identification de la nature et de la fonction des CAPTCHA et images-tests. |
| 1.5 | Solution alternative pour les CAPTCHA graphiques. |
| 1.6 | Description détaillée lorsque nécessaire. |
| 1.7 | Pertinence de la description détaillée. |
| 1.8 | Remplacement des images de texte par du texte stylé lorsque possible. |
| 1.9 | Légende correctement reliée à son image lorsque nécessaire. |

## Points transversaux
- Les **liens et boutons images** relèvent aussi des exigences de noms, rôles, interactions et navigation clavier.
- Une information portée uniquement par la couleur peut relever de la thématique Couleurs.
- Les SVG interactifs, graphiques dynamiques et contrôles de zoom nécessitent également l'analyse des scripts et des composants interactifs.
- Un attribut `alt` présent n'est pas nécessairement pertinent ; une limite de 125 caractères n'est pas une règle universelle RGAA.
- Un SVG n'a pas automatiquement besoin de `role="img"` s'il est décoratif ; une image CSS décorative ne nécessite pas de nom accessible, mais une information ne doit pas dépendre uniquement de CSS.

## WCAG et documentation complémentaire
- [WAI Images Tutorial](https://www.w3.org/WAI/tutorials/images/)
- [WCAG 2.2, critère 1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)
- [WCAG 2.2, critère 1.4.5 Images of Text](https://www.w3.org/WAI/WCAG22/Understanding/images-of-text.html)

**Ne pas déclarer « conforme RGAA » sur la base d'un seul exemple HTML.** Documenter le contexte, les cas particuliers et les résultats des tests.
