<template>
  <section class="page">
    <h1>Showcases</h1>
    <p>This is under construction, many projects will be missing. Feel free to check my Github (<a href="https://github.com/42null" target="_blank">@42null</a>) to see what I have been working on (school projects use the handle <a href="https://github.com/josephmemmelatwctc" target="_blank">@josephmemmelatwctc</a> but are committed to by <a href="https://github.com/42null" target="_blank">@42null</a>.) </p>
<!--    <p class="info">See <code>README.md</code> for more information.</p>-->

    <h3>Showcase</h3>
    <article v-for="showcase in allShowcases" class="list-repo__item"><!--TODO: Put back key-->
      <showcase-item :title="showcase.title" :description="showcase.description" :url="showcase.url"></showcase-item>
    </article>

<!--    <h3>My others repositories:</h3>-->
  </section>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import ShowcaseItem from "@/components/ShowcaseItem.vue";

  interface Item {
    title: string;
    description: string;
    url: string;
  }

  const allShowcases = ref<Item[]>([
    { title: 'Instant Inventory', description: 'Instant Inventory (JS2 Final). Feel free to message me for a login :). It uses a NoSQL firebase for interacting with data.', url: 'https://fir-demo-621bc.web.app/#/' },//https://github.com/JosephMemmelAtWCTC/vue-app-instant-inventory-vite-quasar.git
    { title: '.NET Web Final', description: 'I was in charge of the ratings (creating, displaying, API, and showing previous orders). The project is using the identity framework ans a SQL database with .NET MVC', url: 'https://expandeddotnetwebfinal.azurewebsites.net/' },
  ]);
</script>

<style lang="scss" scoped>
  .page {
    max-width: 650px;
    width: 100%;
    h3 {
      margin-top: calc(var(--gap) * 3);
    }
  }
  .current-repo {
    display: flex;
    border-radius: 5px;
    overflow: hidden;
    background: var(--background-light);
    padding: var(--gap);
    border: 1px solid var(--border);
    &__img {
      display: flex;
      width: 40%;
      justify-content: center;
      align-items: center;
      img {
        max-height: 150px;
        width: 100%;
        max-width: 100%;
        height: auto !important;
        display: inline-flex;
      }
    }
    &__info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      text-align: left;
      width: 60%;
      padding: 0 var(--gap);
    }
  }
  .list-repo {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(145px, 1fr));
    grid-gap: var(--gap);
    grid-auto-flow: dense;
    &__item {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      border-radius: 5px;
      overflow: hidden;
      background: var(--background-light);
      border: 1px solid var(--border);
    }
    &__content {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      text-align: center;
      padding: var(--space);
      margin: 0;
      height: 100%;
    }
  }
</style>
