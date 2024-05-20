<template>
  <section class="page">
    <h1>Joseph Memmel's Portfolio Site</h1>
    <h2></h2>
    <div class="talkative">
      <p></p>
  <!--    <p class="info">See <code>README.md</code> for more use.</p>-->
      <p class="info">This is a rework of my Github Pages site and is currently still under development. This site will act as a portfolio link to other work that I have done (and is an opportunity for me to try out typescript &#128522;).</p>
    </div>
    <router-link :to="{ name: 'Showcase' }" title="Showcase" class="pill-button">Showcase</router-link>
  </section>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
  h1 {
    margin: var(--gap) 0;
  }
  h2 {
    margin-bottom: 0;
  }
  .info {
    margin-top: calc(var(--gap) * 2);
  }
  .talkative{
    max-width: min(50vw, 750px);
    margin-bottom: 2em;
  }
  .pill-button {
    background-color: var(--contrast);
    border-radius: 100vw;
    font-size: 1.5rem;
    line-height: 1.25rem;
    padding: 1.05rem;
    color: var(--color);
  }
</style>
