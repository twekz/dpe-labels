<script setup>
  import { onMounted } from 'vue';
  
  onMounted(() => {
    import('../../lib').then(({ dpeLabels }) => {
        dpeLabels();
    })
  });
</script>

# Affichage à partir des classes

Il est également possible de forcer l'affichage des classes énergie et climat de votre choix et
ainsi de contourner les calculs de **DPE Labels**.

Les deux attributs suivants permettent d'indiquer chacune des classes souhaitées&nbsp;:

- `data-dpe-cep-grade` pour la classe climat (CEP)
- `data-dpe-eges-grade` pour la classe énergie (EGES)

## Classe avec valeur définie

Pour afficher une valeur de votre choix, il suffit de la saisir dans l'attribut correspondant.
C'est la classe renseignée qui sera affichée dans l'étiquette du DPE.

### Exemple

```html
<div
  data-dpe
  data-dpe-cep="1"
  data-dpe-cep-grade="G"
  data-dpe-eges="999"
  data-dpe-eges-grade="A"
></div>
```

<HtmlExampleBlock>
    <div
      data-dpe
      data-dpe-cep="1"
      data-dpe-cep-grade="G"
      data-dpe-eges="999"
      data-dpe-eges-grade="A"
    ></div>
</HtmlExampleBlock>

## Classe sans valeur

Si vous ne renseignez qu'une classe sans valeur associée, l'étiquette correspondante affichera la
fourchette des valeurs possibles, selon les paramètres saisis (surface et altitude).

### Exemple

```html
<h4>Surface ≥ 40 m<sup>2</sup> :</h4>
<div
  data-dpe
  data-dpe-cep-grade="G"
  data-dpe-eges-grade="E"
></div>
<h4>Surface = 12 m<sup>2</sup> et altitude > 800 m :</h4>
<div
  data-dpe
  data-dpe-cep-grade="G"
  data-dpe-eges-grade="E"
  data-dpe-surface="12"
  data-dpe-altitude
></div>
```

<HtmlExampleBlock>
    <h4>Surface ≥ 40 m<sup>2</sup> :</h4>
    <div
      data-dpe
      data-dpe-cep-grade="G"
      data-dpe-eges-grade="E"
    ></div>
    <h4>Surface = 12 m<sup>2</sup> et altitude > 800 m :</h4>
    <div
      data-dpe
      data-dpe-cep-grade="G"
      data-dpe-eges-grade="E"
      data-dpe-surface="12"
      data-dpe-altitude
    ></div>
</HtmlExampleBlock>
