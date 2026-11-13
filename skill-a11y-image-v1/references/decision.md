# Identifier le rôle de l'image

**Ne jamais décider à partir du fichier seul.** Lire le texte, la légende, le rôle de l'image et son éventuelle interaction.

| Question | Décision |
| --- | --- |
| L'image est-elle un contrôle ou le seul contenu d'un lien/bouton ? | **Fonctionnelle** : nommer la destination ou l'action, non la forme graphique. |
| Apporte-t-elle une information non déjà transmise ? | **Informative** : alternative textuelle pertinente et contextualisée. |
| Est-elle purement esthétique ou redondante avec un texte voisin ? | **Décorative** : `alt=""` pour `<img>` ; masquer un SVG décoratif aux technologies d'assistance. |
| Contient-elle des données, des relations ou un schéma impossibles à résumer ? | **Complexe** : alternative courte + description détaillée accessible (tableau, texte structuré). |
| Contient-elle du texte ? | **Image de texte** : préférer du texte HTML ; examiner les exceptions (logo, présentation essentielle, etc.). |
| Est-elle accompagnée d'une légende ? | Utiliser `<figure>`/`<figcaption>` si pertinent ; ne pas confondre légende et alternative. |

## Exemples contextuels
- Photo d'un chien dans une fiche d'adoption : décrire les caractéristiques utiles ; la même photo en fond décoratif peut être ignorée.
- Icône de loupe à côté du mot visible « Rechercher » : icône décorative ; loupe seule dans un bouton : le **bouton** doit avoir le nom « Rechercher ».
- Logo seul dans un lien vers l'accueil : le nom du lien doit permettre d'identifier le site et/ou la destination.
- Graphique de ventes : une description complète peut être un tableau HTML associé et accessible à proximité.

## Questions de clarification à poser si nécessaire
Quel est le texte autour de l'image ? Est-elle interactive ? Quelle information doit être comprise sans la voir ? Existe-t-il une légende ou une description détaillée ?
