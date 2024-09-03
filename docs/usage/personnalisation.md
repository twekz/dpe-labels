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
  font-family: 'Comic Sans MS', cursive;
  padding: 1em;
  color: var(--vp-c-brand);
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
    font-family: 'Comic Sans MS', cursive;
    padding: 1em;
    color: var(--vp-c-brand);
  }
</style>



## Variables CSS

::: info
**DPE Labels** va mettre des variables CSS à disposition pour personnaliser certains aspects du
style des étiquettes. Elles seront bientôt documentées.
:::
