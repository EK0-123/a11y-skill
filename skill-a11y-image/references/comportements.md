# Comportements attendus — clavier et lecteurs d'écran

**Différencier la navigation au clavier (Tab) de la navigation du lecteur d'écran (lecture, flèches, navigation par éléments).** Une image statique n'a pas à être rendue focusable pour être lue.

| Cas | Tab / activation | Restitution attendue (principe, pas citation verbatim) |
| --- | --- | --- |
| `<img>` informative | Pas de focus | Alternative disponible lors de la consultation. |
| `<img alt="">` décorative | Pas de focus | Image ignorée. |
| SVG informatif | Pas de focus | Nom accessible annoncé selon environnement. |
| SVG décoratif `aria-hidden` | Pas de focus | Aucune annonce de l'icône. |
| Image seule dans `<a>` | Focus sur le lien ; Entrée | Nom de destination + rôle de lien. |
| Image seule dans `<button>` | Focus sur le bouton ; Entrée/Espace | Nom d'action + rôle de bouton. |
| Image complexe | Pas de focus par défaut | Alternative courte et description détaillée consultable. |
| Image + `<figcaption>` | Pas de focus par défaut | Alternative et légende accessibles sans répétition inutile. |
| Image avec zoom | Focus sur le contrôle, pas l'image statique | Appliquer aussi le comportement du bouton et de la modale éventuelle. |

## Protocole manuel
1. Inspecter le DOM et l'arbre d'accessibilité : nom, rôle, éventuelle description.
2. Parcourir la page au clavier seul : ne pas créer de tabulations sur les images non interactives ; vérifier les contrôles.
3. Parcourir le contenu avec un lecteur d'écran : vérifier l'information restituée et la compréhension de la destination/action.
4. Tester la description détaillée sans voir le graphique.
5. Noter l'environnement : OS, navigateur/version, lecteur d'écran/version, date, résultat observé.

## Environnements possibles
NVDA + Firefox/Chrome (Windows), JAWS + Chrome/Edge (Windows), VoiceOver + Safari (macOS/iOS). Choisir une matrice réaliste selon votre politique interne. Les annonces littérales peuvent varier : ne pas exiger le même mot « image » sur tous les couples.

## Limites
Un test automatique ne simule pas de manière fiable l'expérience complète d'un lecteur d'écran. Une alternative textuelle peut être techniquement présente mais inutile ou trompeuse.
