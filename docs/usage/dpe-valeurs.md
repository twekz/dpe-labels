# Affichage à partir des valeurs

À partir des valeurs de consommation d'énergie et d'émissions de gaz à effet de serre, ainsi que des
paramètres de surface et d'altitude, **DPE Labels** calcule les classes énergie et climat du DPE,
avant de générer l'affichage des étiquettes correspondantes.

## Consommation et émissions

Les deux valeurs permettant le calcul des deux classes du DPE du bien&nbsp;:

- `data-dpe-cep` indique la consommation d'énergie primaire (CEP),
- `data-dpe-eges` indique les émissions de gaz à effet de serre (EGES),

### Exemple

```html
<div
  data-dpe
  data-dpe-cep="123"
  data-dpe-eges="4"
></div>
```

<HtmlExampleBlock>
    <div
      data-dpe
      data-dpe-cep="123"
      data-dpe-eges="4"
    ></div>
</HtmlExampleBlock>

## Surface

L'attribut `data-dpe-surface` permet d'indiquer la surface de référence du bien (en m<sup>2</sup>)
et d'ajuster automatiquement les seuils des classes pour les biens dont la surface est inférieure à
40 m<sup>2</sup>.

Si l'attribut est absent ou laissé vide, les seuils utilisés sont ceux d'un bien dont la surface de
référence est supérieure ou égale à 40 m<sup>2</sup>.

### Exemple

```html
<div
  data-dpe
  data-dpe-cep="123"
  data-dpe-eges="4"
  data-dpe-surface="22"
></div>
```

<HtmlExampleBlock>
    <div
      data-dpe
      data-dpe-cep="123"
      data-dpe-eges="4"
      data-dpe-surface="22"
    ></div>
</HtmlExampleBlock>

## Altitude ≥ 800 m

L'attribut `data-dpe-altitude` permet d'indiquer que le bien est situé à 800 m d'altitude ou plus et
ainsi d'ajuster les seuils des classes.

Valeurs possibles&nbsp;:

- FAUX : attribut absent, `"0"` ou `"false"`
- VRAI : attribut sans valeur, vide `""` ou toute autre valeur

### Exemple

```html
<h4>Bien à 800 m d'altitude ou plus :</h4>
<div
  data-dpe
  data-dpe-cep="420"
  data-dpe-eges="79"
  data-dpe-altitude=""
></div>
<h4>Bien à moins de 800 m d'altitude :</h4>
<div
  data-dpe
  data-dpe-cep="420"
  data-dpe-eges="79"
></div>
```

<HtmlExampleBlock>
    <h4>Bien à 800 m d'altitude ou plus :</h4>
    <div
      data-dpe
      data-dpe-cep="420"
      data-dpe-eges="79"
      data-dpe-altitude=""
    ></div>
    <h4>Bien à moins de 800 m d'altitude :</h4>
    <div
      data-dpe
      data-dpe-cep="420"
      data-dpe-eges="79"
    ></div>
</HtmlExampleBlock>>

## Combinaison des attributs

Les attributs peuvent être combinés pour ajuster les seuils en fonction des paramètres renseignés.

### Exemple

```html
<div
  data-dpe
  data-dpe-cep="420"
  data-dpe-eges="79"
  data-dpe-altitude=""
  data-dpe-surface="22"
></div>
```

<HtmlExampleBlock>
    <div
      data-dpe
      data-dpe-cep="420"
      data-dpe-eges="79"
      data-dpe-altitude
      data-dpe-surface="22"
    ></div>
</HtmlExampleBlock>

<script setup>
  import { onMounted } from 'vue';
  import { dpeLabels } from '../../lib';

  onMounted(() => {
    dpeLabels()
  });
</script>