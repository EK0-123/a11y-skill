# Checklist de validation — Image

## Cadrage (BA/PO/UX)
- [ ] Le rôle de chaque image est défini dans son contexte.
- [ ] Le contenu éditorial de l'alternative est validé.
- [ ] La destination/action des images fonctionnelles est explicite.
- [ ] Une description détaillée est prévue si nécessaire.
- [ ] Les images de texte et cas particuliers sont justifiés.

## Développement
- [ ] Chaque `<img>` possède un `alt` adapté (`""` si décoratif).
- [ ] Les SVG informatifs ont un nom accessible et des IDs uniques si utilisés.
- [ ] Les SVG décoratifs ne créent pas d'annonces inutiles.
- [ ] Les `<picture>` portent l'alternative sur `<img>`.
- [ ] Les `<figure>`/`<figcaption>` sont utilisés de façon pertinente.
- [ ] Aucune image statique n'a de `tabindex="0"` inutile.
- [ ] Les images CSS ne portent pas seules une information essentielle.
- [ ] Les liens/boutons images ont un nom accessible pertinent.

## QA — contrôles automatiques
- [ ] Scan axe-core exécuté sur les pages concernées.
- [ ] Assertions structurelles Playwright exécutées sur les cas connus.
- [ ] Les résultats et limites sont enregistrés.

## QA — contrôles manuels
- [ ] Pertinence des alternatives vérifiée en contexte.
- [ ] Caractère réellement décoratif vérifié.
- [ ] Parcours clavier des images fonctionnelles vérifié.
- [ ] Restitution lecteur d'écran vérifiée sur la matrice cible.
- [ ] Description des graphiques complexes jugée complète.
- [ ] Exceptions et anomalies résiduelles documentées.

## Traçabilité
Projet/page : … · Composant/version : … · Testeur : … · Date : … · Navigateur/AT : … · Statut : conforme sur points vérifiés / non conforme / à vérifier / N/A.

## Vérifications supplémentaires — mobile
- [ ] Web : chaque source responsive transmet la même information essentielle, et l’alternative reste pertinente.
- [ ] Web : contrôles iconographiques activables au toucher et avec lecteur d’écran.
- [ ] Web : zoom, texte agrandi, reflow et portrait/paysage vérifiés selon le contexte.
- [ ] Web : tests manuels VoiceOver iOS et TalkBack Android réalisés sur appareils cibles.
- [ ] Natif : chaque image est classée (informative, décorative, fonctionnelle, complexe).
- [ ] Natif : restitution attendue et critères de recette documentés, **sans imposer de code**.
- [ ] Les limites de l’automatisation et les environnements réellement testés sont consignés.
