<template>
  <div class="html-example-block">
    <slot></slot>
  </div>
</template>

<style lang="scss">
  .html-example-block {
    display: block;
    background: #fff;
    border: 1px solid var(--vp-c-border);
    border-radius: 8px;
    margin: 16px 0;
    padding: 10px;

    h1,h2,h3,h4,h5,h6 {
      &:first-child {
        margin-top: 0;
      }
    }
  }
</style>
