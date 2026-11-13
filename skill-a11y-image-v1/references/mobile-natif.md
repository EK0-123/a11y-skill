# Images — Applications natives iOS et Android : règles et restitution attendue

**Objet :** fiche fonctionnelle pour BA, PO, design, QA et équipes mobiles. **Ne pas générer de code natif, d’API iOS/Android ou de recommandations d’implémentation** à partir de ce document. Les équipes mobiles choisissent les solutions techniques adaptées à leurs frameworks et aux exigences internes.

**Référentiel :** s’appuyer sur les exigences d’accessibilité applicables au produit et aux plateformes, et sur les principes pertinents du RGAA/WCAG à titre de comparaison ; **ne pas affirmer que le RGAA 4.1.2 est à lui seul une méthode de test native iOS/Android**.

| Situation | Règle fonctionnelle | Restitution attendue VoiceOver (iOS) / TalkBack (Android) |
| --- | --- | --- |
| Image informative | Fournir une description utile, courte et contextualisée | L’information pertinente est accessible à la navigation du lecteur d’écran ; formulation exacte variable |
| Image décorative | Éviter toute annonce parasite | L’illustration n’est pas annoncée comme un élément utile isolé |
| Icône seule déclenchant une action | Donner un nom d’action clair ; rendre le contrôle activable | Nom compréhensible + nature de contrôle ; activation possible avec le geste de l’outil |
| Image seule ouvrant une destination | Exprimer la destination, pas seulement l’apparence | Destination et caractère actionnable compréhensibles |
| Image accompagnée d’un texte équivalent | Éviter une lecture redondante | Information entendue une fois, sans duplication inutile |
| Graphique / infographie | Fournir les données et conclusions essentielles sous une forme accessible | Information détaillée consultable, même sans perception de l’image |
| Image contenant du texte | Restituer le texte utile dans l’interface accessible | Contenu textuel disponible et compréhensible |
| Image mise à jour dynamiquement | Conserver une description correcte ; annoncer un changement seulement s’il est important | Information actualisée accessible, sans annonces intempestives |
| Image agrandissable | Permettre l’accès à l’action et au contenu agrandi | Action identifiable, ouverture et retour compréhensibles |

## Scénarios de recette manuelle

1. **VoiceOver iOS :** explorer l’écran au doigt puis par gestes ; vérifier nom, rôle/action, absence de doublons et accès à l’information essentielle.
2. **TalkBack Android :** reproduire les vérifications avec exploration tactile et navigation séquentielle.
3. Vérifier les variantes d’affichage (petit écran, texte agrandi, portrait/paysage lorsque pris en charge).
4. Pour une image complexe, demander à un testeur de retrouver l’information clé sans regarder l’image.
5. Consigner le résultat observé avec appareil, version OS, lecteur d’écran, version de l’application et captures/vidéo si nécessaire.

## Points de vigilance

- Ne pas imposer le même libellé oral exact à VoiceOver et TalkBack : les annonces dépendent du contexte, de la langue, de la plateforme et de la version.
- Ne pas exiger que toute image soit un élément de navigation indépendant : une image décorative ou redondante doit au contraire éviter de créer du bruit.
- Une inspection statique ou un test automatique ne valide pas l’expérience réelle du lecteur d’écran.
- Pour les contrôles d’icônes, les règles du composant **Bouton/Lien** restent applicables.

## Références utiles

- [Apple — Accessibility](https://developer.apple.com/accessibility/)
- [Android — Accessibility](https://developer.android.com/guide/topics/ui/accessibility)
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
