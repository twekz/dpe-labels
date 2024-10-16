---
next: false
---

<script setup>
  import { onMounted } from 'vue';
  
  onMounted(() => {
    import('../../lib').then(({ dpeLabels }) => {
        dpeLabels();
    })
  });
</script>

# Personnalisation

**DPE Labels** génère des étiquettes DPE transparentes et qui héritent de leur conteneur, permettant une meilleure intégration visuelle sur une page web.

Un certain nombre de [variables CSS](#reference-des-variables-css) sont également mises à disposition pour personnaliser les éléments des étiquettes DPE de manière plus précise.

## Exemple

::: code-group
```css
.wrapper-demo {
  --dpe-labels--active-bar-border-color: orangered;
  background-color: cornsilk;
  color: dodgerblue;
  font-family: 'Comic Sans MS', cursive;
  padding: 1em;
}
```
```html
<div class="wrapper-demo">
  <div
    data-dpe
    data-dpe-cep="123"
    data-dpe-eges="45"
  ></div>
</div>
```
:::

<HtmlExampleBlock>
    <div class="wrapper-demo">
        <div
            data-dpe
            data-dpe-cep="123"
            data-dpe-eges="45"
        ></div>
    </div>
</HtmlExampleBlock>

<style>
  .wrapper-demo {
    --dpe-labels--active-bar-border-color: orangered;
    background-color: cornsilk;
    color: dodgerblue;
    font-family: 'Comic Sans MS', cursive;
    padding: 1em;
  }
</style>



## Référence des variables CSS

| Variable name                                | Default value | Notes                                |
|----------------------------------------------|---------------|--------------------------------------|
| **`--dpe-labels--color`**                    | `inherit`     | Couleur du texte (titres, légendes)  |
| **`--dpe-labels--color-alt`**                | `gray`        | Couleur des légendes secondaires     |
| **`--dpe-labels--active-bar-border-color`**  | `black`       | Couleur des contours (barres)        |
| **`--dpe-labels--active-text-border-color`** | `black`       | Couleur des contours (lettres)       |
| **`--dpe-labels--bar-height--cep`**          | `2.5rem`      | Hauteur des barres "énergie"         |
| **`--dpe-labels--bar-height--eges`**         | `1.75rem`     | Hauteur des barres "GES"             |
| **`--dpe-labels--bar-gap`**                  | `0.25rem`     | Espacement entre les barres          |
| **`--dpe-labels--gutter`**                   | `2em`         | Espacement entre les deux graphiques |
| **`--dpe-labels--z-index-base`**             | `10`          |                                      |
| **`--dpe-labels--font-family`**              | `inherit`     |                                      |
| **`--dpe-labels--font-size-base`**           | `1em`         |                                      |
