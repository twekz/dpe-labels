---
next: false
---

# Personnalisation

## Héritage

Les étiquettes DPE héritent de leur container.

### Exemple

::: code-group
```html
    <div
        class="box"
        data-dpe
        data-dpe-cep="123"
        data-dpe-eges="45"
    ></div>
```
```css
    .box {
      background: no-repeat top/cover url("https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWQ0OWg5OWg0M3l4MjIwaWJudXM0NnJwOGphc3Z1MnJubTgzcHJmMSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/pNpONEEg3pLIQ/giphy.gif");      backgroud-repeat: no-repeat;
      font-family: 'Comic Sans MS';
    }
```
:::

<HtmlExampleBlock>
    <div
        class="box"
        data-dpe
        data-dpe-cep="123"
        data-dpe-eges="45"
    ></div>
</HtmlExampleBlock>

<IncludeLibrary />

<style>
.box {
    background: no-repeat top/cover url("https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWQ0OWg5OWg0M3l4MjIwaWJudXM0NnJwOGphc3Z1MnJubTgzcHJmMSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/pNpONEEg3pLIQ/giphy.gif");
    font-family: 'Comic Sans MS';
}
</style>



## Variables CSS

::: info
**DPE Labels** va mettre des variables CSS à disposition pour personnaliser certains aspects du
style des étiquettes. Elles seront bientôt documentées.
:::


<script setup>
import { onMounted } from 'vue';
import { dpeLabels } from '../../lib';

onMounted(() => {
  dpeLabels()
});
</script>