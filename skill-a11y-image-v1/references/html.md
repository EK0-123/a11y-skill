# HTML attendu — Composant Image

Chaque exemple est **contextuel** : les valeurs de `alt` sont des exemples, à réécrire selon le contenu réel et le texte voisin.

## 1. `<img>` informative
```html
<img src="/media/agence-lyon.jpg" alt="Entrée de l'agence bancaire de Lyon" width="640" height="420">
```
L'alternative transmet l'information utile. Ne pas écrire systématiquement « image de » ou le nom de fichier.

**À éviter :** `<img src="/media/agence-lyon.jpg">` (absence de `alt`) ; `alt="photo"` (insuffisant).

## 2. `<img>` décorative
```html
<img src="/media/ornement.svg" alt="">
```
`alt=""` est intentionnel ; **ne pas supprimer l'attribut**. Ne pas ajouter de `tabindex`.

## 3. Icône décorative à côté d'un texte visible
```html
<button type="button">
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24">
    <path d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z"/>
  </svg>
  Rechercher
</button>
```
Le texte visible nomme déjà le bouton. Ne pas annoncer l'icône en plus.

## 4. Bouton avec image seule
```html
<button type="button" aria-label="Rechercher">
  <img src="/icons/recherche.svg" alt="">
</button>
```
Le **bouton** porte le nom accessible. Il doit répondre à Entrée et Espace. Alternative équivalente possible : `<img alt="Rechercher">` dans le bouton, si cela produit le nom souhaité et évite les doublons.

## 5. Lien avec logo seul
```html
<a href="/accueil">
  <img src="/media/logo-banque.svg" alt="Banque Exemple — accueil">
</a>
```
La destination doit être compréhensible ; adapter si un autre texte visible nomme déjà le lien.

## 6. SVG informatif autonome
```html
<svg role="img" aria-labelledby="statut-titre" viewBox="0 0 24 24">
  <title id="statut-titre">Paiement sécurisé</title>
  <path d="M12 2 4 6v6c0 5 3 8 8 10 5-2 8-5 8-10V6Z"/>
</svg>
```
L'élément doit posséder un nom accessible pertinent. **ID unique** sur la page, particulièrement si le composant SVG est répété. Vérifier la restitution avec les combinaisons navigateur/lecteur d'écran prises en charge. Ne pas mettre de focus sur un SVG purement informatif.

## 7. SVG décoratif
```html
<svg aria-hidden="true" focusable="false" viewBox="0 0 24 24">
  <path d="M2 12h20"/>
</svg>
```
Ne pas appliquer `aria-hidden="true"` à un élément interactif/focusable ou à un contenu dont l'information n'existe pas ailleurs.

## 8. `<picture>` responsive
```html
<picture>
  <source media="(min-width: 768px)" srcset="/media/agence-large.webp">
  <img src="/media/agence-mobile.webp" alt="Façade de l'agence bancaire de Lyon">
</picture>
```
L'attribut `alt` appartient au `<img>` ; les différentes sources doivent conserver la même information essentielle.

## 9. `<figure>` et `<figcaption>`
```html
<figure>
  <img src="/media/equipe.jpg" alt="Cinq personnes autour d'une table de réunion">
  <figcaption>Atelier accessibilité — septembre 2026</figcaption>
</figure>
```
`<figcaption>` est une légende. **`<caption>` est réservé aux tableaux**. Ne pas dupliquer mot pour mot l'alternative et la légende.

## 10. Graphique complexe + description détaillée
```html
<figure>
  <img src="/media/ventes.png" alt="Graphique des ventes trimestrielles ; données détaillées dans le tableau suivant">
  <figcaption>Évolution des ventes en 2026</figcaption>
</figure>
<table>
  <caption>Ventes trimestrielles 2026, en millions d'euros</caption>
  <thead><tr><th scope="col">Trimestre</th><th scope="col">Ventes</th></tr></thead>
  <tbody>
    <tr><th scope="row">T1</th><td>12</td></tr>
    <tr><th scope="row">T2</th><td>15</td></tr>
    <tr><th scope="row">T3</th><td>18</td></tr>
    <tr><th scope="row">T4</th><td>21</td></tr>
  </tbody>
</table>
```
Le tableau est un exemple de description détaillée **accessible dans le flux**, pas une obligation universelle de structure. Une description textuelle peut mieux convenir selon le graphique.

## 11. Image CSS
```html
<section class="hero" aria-labelledby="hero-title">
  <h2 id="hero-title">Nos engagements</h2>
</section>
```
```css
.hero { background-image: url('/media/ornement.jpg'); }
```
Réserver l'image CSS aux éléments décoratifs ou garantir que toute information importante est disponible en HTML. Une image CSS n'offre pas d'attribut `alt`.

## 12. Image de texte
**À privilégier :**
```html
<p class="offre">Jusqu'à 100 € offerts</p>
```
Le CSS peut styliser le texte réel. Une image contenant du texte n'est acceptable que dans les conditions prévues par le référentiel, avec une alternative pertinente.

## 13. `<input type="image">` (si présent dans un héritage)
```html
<input type="image" src="/icons/envoyer.png" alt="Envoyer le formulaire">
```
Privilégier un `<button type="submit">` avec texte visible lorsque possible.

## 14. `<canvas>` et graphiques dynamiques
Ne pas supposer qu'un canvas est accessible parce qu'il est visible. Fournir un équivalent accessible aux informations (tableau, texte structuré, interactions alternatives), puis vérifier le comportement réel. La solution dépend de l'usage.

## 15. Cas nécessitant une analyse complémentaire
CAPTCHA, images-test, cartes interactives, SVG cliquables, animations, zoom, images avec texte indispensable, pictogrammes indiquant uniquement un état et changements dynamiques. Appliquer les autres critères RGAA pertinents.

## Anti-patterns
```html
<img src="/media/graphique.png" alt="graphique">
<img src="/media/ornement.png" alt="ornement décoratif">
<img src="/media/produit.png" tabindex="0" alt="Produit">
<a href="/accueil"><img src="/media/logo.svg" alt="logo"></a>
```
Ces exemples sont généralement insuffisants ou incorrects dans les contextes indiqués. Ne pas attribuer automatiquement une non-conformité sans examen du contexte.
