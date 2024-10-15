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

## Héritage

Les étiquettes DPE héritent de leur container.

### Exemple

::: code-group
```html
<div class="wrapper-demo">
  <div
    data-dpe
    data-dpe-cep="123"
    data-dpe-eges="45"
  ></div>
</div>
```
```css
.wrapper-demo {
  --dpe-labels--active-border-color: dodgerblue;
  font-family: 'Comic Sans MS', cursive;
  padding: 1em;
  color: dodgerblue;
}
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
    --dpe-labels--active-border-color: orangered;
    font-family: 'Comic Sans MS', cursive;
    padding: 1em;
    color: dodgerblue;
  }
</style>



## Variables CSS

| Variable name                                | Default value | Notes                                |
|----------------------------------------------|---------------|--------------------------------------|
| **`--dpe-labels--color`**                    | `inherit`     | Couleur du texte (titres, légendes)  |
| **`--dpe-labels--color-gray`**               | `gray`        | Couleur des légendes secondaires     |
| **`--dpe-labels--active-border-color`**      | `black`       | Couleur des contours (barres)        |
| **`--dpe-labels--active-text-stroke-color`** | `black`       | Couleur des contours (lettres)       |
| **`--dpe-labels--bar-height--cep`**          | `2.5rem`      | Hauteur des barres "énergie"         |
| **`--dpe-labels--bar-height--eges`**         | `1.75rem`     | Hauteur des barres "GES"             |
| **`--dpe-labels--bar-gap`**                  | `0.25rem`     | Espacement entre les barres          |
| **`--dpe-labels--gutter`**                   | `2em`         | Espacement entre les deux graphiques |
| **`--dpe-labels--z-index`**                  | `10`          |                                      |
| **`--dpe-labels--font-family`**              | `inherit`     |                                      |
| **`--dpe-labels--font-size-base`**           | `1em`         |                                      |
