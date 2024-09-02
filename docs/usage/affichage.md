# Affichage d'un DPE

## Élément `<div data-dpe></div>`

1. Charger le script et le style (voir la [procédure d'installation](/installation)),
2. Insérer une `<div data-dpe></div>` à l'endroit souhaité sur la page,
3. Compléter les attributs `data-dpe-*` avec les valeurs à prendre en compte et/ou afficher.

Par exemple :

```html{15}
<html>
<head>
  <title>Mon annonce immo</title>

  <link rel="stylesheet" href="dpe-labels.css">
  <script type="module" src="dpe-labels.js"></script>
</head>
<body>
  <h1>Annonce : bien à louer</h1>
  
  <h2>Description du bien</h2>
  <p>Lorem ipsum dolor sit amet…</p>

  <h2>Diagnostic de performance énergétique</h2>
  <div data-dpe data-dpe-cep="123" data-dpe-eges="45"></div>
  <p>Montant estimé des dépenses annuelles d'énergie pour un usage standard : entre XXX € et YYY €.</p>
</body>
</html>
```

## Attributs `data-dpe-*`

| Attribut                 | Description                                | Valeurs acceptées                                                                          |
|--------------------------|--------------------------------------------|--------------------------------------------------------------------------------------------|
| `data-dpe` (obligatoire) | Initialise un DPE et définit son type      | Laisser vide ou `cep` ou `eges`                                                            |
| `data-dpe-cep`           | Valeur de consommation d'énergie primaire  | Nombre                                                                                     |
| `data-dpe-eges`          | Valeur d'émissions de gaz à effet de serre | Nombre                                                                                     |
| `data-dpe-altitude`      | Bien situé à une altitude ≥ 800m           | - Faux si l'attribut est absent ou `0` ou `false`<br/>- Vrai si vide ou toute autre valeur |
| `data-dpe-surface`       | Surface du bien                            | Nombre                                                                                     |
| `data-dpe-cep-grade`     | Force l'affichage d'une classe énergie     | Lettre de `A` à `G`                                                                        |
| `data-dpe-eges-grade`    | Force l'affichage d'une classe climat      | Lettre de `A` à `G`                                                                        |

[//]: # (## Importation dans un bundle)

[//]: # ()
[//]: # (Vous pouvez importer **DPE Labels** dans votre bundle JS.)

[//]: # ()
[//]: # (La librairie expose également une fonction `dpeLabels&#40;&#41;` permettant de &#40;ré-&#41;initialiser les rendu)

[//]: # (des étiquettes DPE.)
