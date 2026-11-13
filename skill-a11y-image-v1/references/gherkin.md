# Critères d'acceptation Gherkin — Images

Les tags `@manuel` et `@automatisable` indiquent le **type de contrôle envisagé**, pas une garantie que le scénario est déjà implémenté dans la CI.

```gherkin
# language: fr
Fonctionnalité: Accessibilité des images
  Afin de comprendre les contenus visuels
  En tant qu'utilisateur, y compris avec un lecteur d'écran
  Je dois accéder à l'information ou à la fonction de chaque image

  @automatisable
  Scénario: Une image informative possède une alternative
    Étant donné une image identifiée comme informative
    Quand j'inspecte son élément img
    Alors l'attribut alt est présent et non vide

  @manuel
  Scénario: L'alternative informative est pertinente
    Étant donné une image informative et son contexte éditorial
    Quand je lis son alternative sans voir l'image
    Alors je comprends l'information utile transmise par l'image
    Et l'alternative ne répète pas inutilement le texte voisin

  @automatisable
  Scénario: Une image identifiée comme décorative est ignorée
    Étant donné une image img validée comme décorative
    Quand j'inspecte son élément
    Alors son attribut alt est exactement vide

  @manuel
  Scénario: Une image décorative n'est pas annoncée
    Étant donné une image décorative
    Quand je parcours la page avec un lecteur d'écran
    Alors aucune annonce inutile ne correspond à cette image

  @automatisable
  Scénario: Un lien composé uniquement d'une image a un nom
    Étant donné un lien contenant uniquement une image
    Quand je consulte son nom accessible
    Alors ce nom n'est pas vide

  @manuel
  Scénario: Le nom d'un lien image indique sa destination
    Étant donné un lien composé uniquement d'une image
    Quand je le consulte avec un lecteur d'écran
    Alors je peux comprendre où mène le lien

  @automatisable
  Scénario: Un bouton image est utilisable au clavier
    Étant donné un bouton contenant uniquement une icône
    Quand je place le focus sur ce bouton
    Et j'appuie sur Entrée puis sur Espace lors de deux essais distincts
    Alors l'action attendue est déclenchée dans chaque essai

  @manuel
  Scénario: Un graphique complexe dispose d'un équivalent complet
    Étant donné un graphique transmettant plusieurs valeurs
    Quand je consulte son alternative et sa description détaillée
    Alors je peux retrouver les données et relations utiles

  @manuel
  Scénario: Une légende est correctement associée
    Étant donné une image accompagnée d'une légende
    Quand j'inspecte la structure et la restitution
    Alors la légende est correctement liée au contenu illustré
    Et l'alternative apporte une information complémentaire si nécessaire

  @manuel
  Scénario: Une image de texte est évitée si possible
    Étant donné un visuel contenant du texte
    Quand j'évalue son besoin et les exceptions prévues
    Alors le texte est rendu en HTML lorsque possible
    Ou la justification de l'exception est documentée
```

**BA/PO :** remplacer les descriptions génériques par le contenu métier réel, la destination réelle du lien et le résultat réel de l'action. **QA :** ne pas transformer les assertions sémantiques en simples tests `alt != ""`.

## Scénarios supplémentaires — mobile web et natif (recette manuelle)

```gherkin
@web @mobile @manuel
Scénario: Image informative dans une mise en page responsive
  Étant donné une image informative affichée sur une page web mobile
  Quand je consulte la page avec VoiceOver sur iOS ou TalkBack sur Android
  Alors l'information essentielle de l'image est accessible
  Et l'alternative reste pertinente pour la variante affichée

@web @mobile @manuel
Scénario: Icône d'action sur écran tactile
  Étant donné un contrôle web représenté uniquement par une icône
  Quand je l'atteins avec le lecteur d'écran mobile
  Alors son nom permet de comprendre l'action
  Et je peux l'activer avec le geste prévu par le lecteur d'écran

@natif @ios @android @manuel
Scénario: Image décorative dans une application native
  Étant donné une image purement décorative dans un écran natif
  Quand je parcours l'écran avec VoiceOver ou TalkBack
  Alors l'image ne produit pas d'annonce parasite

@natif @ios @android @manuel
Scénario: Graphique complexe dans une application native
  Étant donné un graphique porteur de données essentielles
  Quand je consulte l'écran sans perception visuelle du graphique
  Alors je peux retrouver les données et conclusions essentielles
```

Les scénarios `@manuel` ne sont pas validés par une simple émulation Playwright.
