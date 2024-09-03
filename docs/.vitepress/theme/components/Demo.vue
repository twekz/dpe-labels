<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { type DPEOptions } from '../../../../lib/init'
  import HtmlExampleBlock from './HtmlExampleBlock.vue'

  let onStateUpdate = () => {};

  onMounted(() => {
    import('../../../../lib').then((module) => {
      onStateUpdate = module.dpeLabels;
      onStateUpdate()
    })
  });

  const initialState: DPEOptions = {
    type: 'full',
    cepValue: 123,
    egesValue: 45,
    altitude: false,
    surface: undefined,
    cepGrade: '',
    egesGrade: '',
    message: ''
  }

  const state = ref<DPEOptions>(initialState);
</script>

<template>
  <div class="demo">
    <div class="form">
      <div class="form-row">
        <fieldset>
          <legend>Énergie</legend>
          <label for="cepValue">Valeur CEP&nbsp;:</label>
          <input id="cepValue" type="number" v-model="state.cepValue" placeholder="123" class="input" />
          <label for="cepGrade">Classe énergie&nbsp;:</label>
          <input id="cepGrade" type="text" v-model="state.cepGrade" placeholder="A, B, C, D, E, F, G" class="input" />
        </fieldset>

        <fieldset>
          <legend>Climat</legend>
          <label for="egesValue">Valeur EGES&nbsp;:</label>
          <input id="egesValue" type="number"  v-model="state.egesValue" placeholder="123" class="input" />
          <label for="egesGrade">Classe EGES&nbsp;:</label>
          <input id="egesGrade" type="text" v-model="state.egesGrade" placeholder="A, B, C, D, E, F, G" class="input" />
        </fieldset>

        <fieldset>
          <legend>Détails du bien</legend>
          <label for="surface">Surface&nbsp;:</label>
          <input id="surface" type="number" v-model="state.surface" placeholder="123" class="input" />
          <label>
            Altitude &ge; 800&nbsp;m&nbsp;:
          </label>
          <label class="input">
            <input type="checkbox" name="altitude" v-model="state.altitude">
            {{ state.altitude ? "oui" : "non"}}
          </label>
        </fieldset>

        <fieldset>
          <legend>Affichage</legend>
          <label for="type">Type&nbsp;:</label>
          <select id="type" class="input" v-model="state.type" style="display: block;">
            <option value="full">Étiquettes énergie & climat</option>
            <option value="cep">Étiquette énergie</option>
            <option value="eges">Étiquette climat</option>
          </select>
        </fieldset>
      </div>

      <p style="text-align: center; margin-bottom: 32px">
        <button v-on:click="onStateUpdate" class="button plausible-event-name=Use+Demo">
          Actualiser les étiquettes
        </button>
      </p>

      <HtmlExampleBlock>
        <div
            :data-dpe="state.type"
            :data-dpe-cep="state.cepValue"
            :data-dpe-cep-grade="state.cepGrade"
            :data-dpe-eges="state.egesValue"
            :data-dpe-eges-grade="state.egesGrade"
            :data-dpe-surface="state.surface"
            :data-dpe-altitude="state.altitude"
        ></div>
      </HtmlExampleBlock>
    </div>
  </div>
<!--    <pre><small>{{ state }}</small></pre>-->
</template>

<style scoped lang="scss">
  @use "sass:math";

  .demo {
    margin: 0 auto;
    background: var(--vp-c-bg-alt);
    padding: 16px 32px;
    border-radius: 12px;
  }

  .input {
    border: 1px solid var(--vp-c-neutral);
    border-radius: 0;
    background: var(--vp-c-neutral-inverse);
    display: inline-block;
    margin: .25em 0;
    padding: .5em .85em;
    font-size: 1.1em;

    &::placeholder {
      color: var(--vp-c-neutral);
      opacity: 0.2;
    }

    &:focus {
      border-color: var(--vp-c-brand-1);
    }
  }

  label {
    display: block;
    margin-top: 8px;
  }

  .form-row {
    display: flex;
    flex-flow: row wrap;
    margin: 16px -8px;

    fieldset {
      display: block;
      flex: 1 1 math.div(100,4)*1%;
      border: none;
      margin-bottom: 16px;
      padding: 0 8px;

      legend {
        padding: 0;
        font-weight: bold;
      }
    }
  }

  .button {
    color: var(--vp-button-brand-text);
    background-color: var(--vp-button-brand-bg);
    border-radius: 24px;
    padding: 0 24px;
    line-height: 46px;
    font-size: 16px;
    display: inline-block;
    border: 1px solid var(--vp-button-brand-border);
    text-align: center;
    font-weight: 600;
    white-space: nowrap;
    transition: color 0.25s, border-color 0.25s, background-color 0.25s;

    &:hover {
      border-color: var(--vp-button-brand-hover-border);
      color: var(--vp-button-brand-hover-text);
      background-color: var(--vp-button-brand-hover-bg);
    }
  }
</style>
