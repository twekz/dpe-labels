# Étiquettes énergie et climat individuelles

Afin d'accommoder au mieux votre mise en page, **DPE Labels** permet d'afficher les étiquettes
énergie et climat de manière indépendante.

Tout comme l'affichage complet, l'affichage séparé occupe toute la largeur fournie.

## Étiquette énergie (CEP)

Pour afficher uniquement l'étiquette énergie, l'attribut `data-dpe` doit indiquer `"cep"`.

:::info
Étant donné que la classe énergie tient compte de la classe climat, il est nécessaire d'indiquer une
valeur et/ou une classe EGES (respectivement `data-dpe-eges` ou `data-dpe-eges-grade`).
:::

### Exemple

```html{2}
<div
  data-dpe="cep"
  data-dpe-cep="123"
  data-dpe-eges="4"
></div>
```

<HtmlExampleBlock>
<div
  data-dpe="cep"
  data-dpe-cep="123"
  data-dpe-eges="4"
></div>
</HtmlExampleBlock>

## Étiquette climat (EGES)

Pour afficher uniquement l'étiquette climat, l'attribut `data-dpe` doit être réglé sur `eges`.

### Exemple

```html{2}
<div
  data-dpe="eges"
  data-dpe-eges="4"
></div>
```

<HtmlExampleBlock>
<div
  data-dpe="eges"
  data-dpe-eges="4"
></div>
</HtmlExampleBlock>

<script setup>
import { onMounted } from 'vue';
import { dpeLabels } from '../../lib';

onMounted(() => {
  dpeLabels()
});
</script>
