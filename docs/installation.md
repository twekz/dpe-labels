# Installation

## Initialisation

Cette librairie nécessite de charger deux fichiers dans votre page HTML&nbsp;:

- Le script `dpe-labels[.min].js`
- Le style `dpe-labels.css`

Il est recommandé d'ajouter les deux lignes suivantes entre les balises `<head>…</head>` de la
page (l'attribut `type="module"` sur la balise `<script>` permet de ne pas bloquer le chargement de
la page pendant celui du script)&nbsp;:

Par exemple :

```html{5-6}
<html>
<head>
  <title>Mon annonce immo</title>
  <link rel="stylesheet" href="mon-style.css">
  <link rel="stylesheet" href="dpe-labels.css">
  <script type="module" src="dpe-labels.min.js"></script>
</head>
<body>
  <!-- mon contenu  -->
</body>
</html>
```

## Téléchargement des fichiers

### Paquet NPM

Si `npm` est configuré dans votre projet, vous pouvez télécharger les fichiers nécessaires en
installant le paquet `dpe-labels` pour les intégrer dans votre page ou template&nbsp;:

```shell
$ npm install dpe-labels
```

### CDN

Sinon, vous pouvez directement récupérer les fichiers nécessaires auprès d'un service de CDN&nbsp;:

#### jsDelivr

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/dpe-labels@0.3.0/dist/dpe-labels.css">
<script type="module" src="https://cdn.jsdelivr.net/npm/dpe-labels@0.3.0/dist/dpe-labels.min.js"></script>
```

#### unpkg

```html
<link rel="stylesheet" href="https://unpkg.com/dpe-labels@0.3.0/dist/dpe-labels.css">
<script type="module" src="https://unpkg.com/dpe-labels@0.3.0/dist/dpe-labels.min.js"></script>
```

## Compatibilité avec les frameworks

**DPE Labels** n'est pas directement compatible avec les frameworks JavaScript tels que React, Vue
ou Angular, car elle interagit directement avec le DOM.

## Support des navigateurs

En l'état, _**DPE Labels**_ nécessite un navigateur supportant les modules ES6, soit environ
[98% des navigateurs en France](https://caniuse.com/es6-module). La librairie risque donc de ne pas
fonctionner correctement sur Internet Explorer ou sur des version très datées de Chrome, Safari ou
Firefox.