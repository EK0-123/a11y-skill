# Images — Web responsive sur mobile (iOS / Android)

**Périmètre :** pages et applications **web** dans un navigateur mobile, y compris les WebViews si elles sont dans le périmètre du produit. Les règles s’ajoutent à `html.md`, `decision.md` et `regles-rgaa.md` ; elles ne les remplacent pas.

## Exigences fonctionnelles

1. **Même information essentielle quel que soit le viewport.** Si `<picture>` change la source ou le cadrage, vérifier que le texte alternatif reste pertinent pour la variante effectivement affichée. Si le sens change selon le viewport, ne pas conserver aveuglément une alternative commune : repenser le contenu ou l’implémentation.
2. **Image informative :** alternative accessible et pertinente dans le contexte ; image décorative : ne pas annoncer de contenu superflu. Une image non interactive ne reçoit ni `tabindex="0"` ni gestionnaire de clic par défaut.
3. **Image fonctionnelle :** le lien/bouton porteur expose un nom indiquant la destination ou l’action ; il fonctionne au toucher, avec lecteur d’écran mobile et, pour le web, au clavier lorsque applicable.
4. **Graphique ou schéma complexe :** rendre l’information essentielle disponible en texte structuré, tableau ou description détaillée accessible, sans dépendre du zoom ou de la couleur seule.
5. **Zoom et adaptation :** contrôler l’agrandissement, le reflow, les débordements, le masquage ou recadrage d’informations, les superpositions et l’absence de blocage inutile du zoom utilisateur. Vérifier les cas pertinents du RGAA au-delà de la thématique Images.
6. **Portrait et paysage :** ne pas verrouiller l’orientation sans justification admissible ; vérifier la lisibilité et l’accès à l’information dans les deux orientations.
7. **Cibles tactiles :** pour une image actionnable, vérifier la taille et l’espacement des zones d’activation selon le référentiel applicable ; l’image elle-même ne devient pas une cible si elle est seulement informative.
8. **Chargement différé :** vérifier qu’une image importante et son alternative restent accessibles et que l’information n’est pas perdue lors du chargement, d’une erreur réseau ou d’un changement d’orientation.

## Parcours manuels iOS / Android

- **iOS : Safari + VoiceOver.** Explorer au doigt, puis parcourir par gestes de navigation ; vérifier la présence/absence d’annonce selon le rôle de l’image et l’accès aux descriptions longues.
- **Android : Chrome + TalkBack.** Explorer au doigt, puis parcourir par gestes de navigation ; vérifier les mêmes objectifs fonctionnels.
- **Contrôles fonctionnels :** vérifier que le nom accessible permet de comprendre l’action et que l’activation fonctionne avec le geste adapté au lecteur d’écran ; ne pas exiger une formulation verbatim identique entre plateformes.
- **Responsive :** tester au minimum une largeur étroite, une largeur plus grande, portrait/paysage, texte agrandi et zoom ; consigner les appareils, OS, navigateurs et versions.

## Critères d’acceptation synthétiques

- L’information véhiculée par une image reste accessible dans toutes les variantes responsives.
- L’image décorative n’ajoute pas d’annonce inutile.
- Une image informative statique n’ajoute pas d’arrêt de focus artificiel.
- Les contrôles avec icône ou image possèdent un nom pertinent et sont activables.
- Les informations de graphiques complexes restent accessibles autrement que par la seule perception visuelle.

## Automatisation : ce qu’elle peut et ne peut pas démontrer

Playwright peut vérifier les sources `picture`, les dimensions/overflow, certains noms accessibles, les états et l’interaction des contrôles en émulation mobile. **L’émulation mobile n’est pas un test VoiceOver ou TalkBack réel.** Les annonces, gestes d’exploration et la pertinence des alternatives exigent des essais humains sur appareil.

## Références

- [RGAA 4.1.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [W3C WAI Images](https://www.w3.org/WAI/tutorials/images/)
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
