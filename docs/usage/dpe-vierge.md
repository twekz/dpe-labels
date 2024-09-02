# DPE vierge

En l'absence de tout autre attribut que `data-dpe`, **DPE Labels** affiche un DPE sans appliquer de
classe.

```html
<div data-dpe></div>
```

<HtmlExampleBlock>
    <div data-dpe></div>
</HtmlExampleBlock>

<script setup>
import { onMounted } from 'vue';
import { dpeLabels } from '../../lib';

onMounted(() => {
  dpeLabels()
});
</script>
