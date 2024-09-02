# Usage

## DPE complet

<div data-dpe></div>

<script setup>
  import { onMounted } from 'vue';
  import { dpeLabels} from '../lib';

  onMounted(() => {
    dpeLabels();
  });
</script>