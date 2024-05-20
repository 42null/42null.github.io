<template>
  <nav class="credits">
    <p>
      Started from from "<a href="https://github.com/Sp0ne/vue3-vite-typescript-starter" title="Vue3 + Vite + Typescript Starter" target="_blank">vue3-vite-typescript-starter</a>" by
      <a href="https://vinces.io" title="Vinces" target="_blank">@vinces</a>.
    </p>
  </nav>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  export default defineComponent({
    name: "Credits",
  });
</script>

<style scoped>
  p {
    font-size: x-small;
  }
</style>
<style scoped lang="scss">
  .credits {
    margin: var(--gap) 0;
  }
</style>
