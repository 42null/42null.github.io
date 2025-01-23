<template>
  <section class="page">
    <div class="top-info">
      <h1>{{props.title}}</h1>
      <p>This is under construction, many projects will be missing. Feel free to check my Github (<a href="https://github.com/42null" target="_blank">@42null</a>) to see what I have been working on (school projects use the handle <a href="https://github.com/josephmemmelatwctc" target="_blank">@josephmemmelatwctc</a> but are committed to by <a href="https://github.com/42null" target="_blank">@42null</a>.) </p>
  <!--    <p class="info">See <code>README.md</code> for more information.</p>-->

      <h2>Currently Available</h2>
    </div>
    <div class="showcases row justify-between q-col-gutter-sm q-row-gutter-sm">
      <article v-for="showcase in props.showcases" class="list-repo__item col-12 col-md-4"><!--TODO: Put back key-->
        <showcase-item :title="showcase.title"
                       :description="showcase.description"
                       :url="showcase.url"
                       :imgs="showcase.imgs"
        ></showcase-item>
      </article>
    </div>

<!--    <h3>My others repositories:</h3>-->
  </section>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import ShowcaseItem from "@/components/ShowcaseItem.vue";
  import Showcase from "@/pages/Showcase.vue";

  const props = defineProps<{
    title: string;
    description: string;
    showcases: Showcase[];
  }>();

  interface ImgDisplay {
    title: string;
    src: string;
  }

  interface Showcase {
    title: string;
    description: string;
    url: string;
    imgs: ImgDisplay[];
  }
</script>

<style lang="scss" scoped>
  .page {
    width: 100%;
    h3 {
      margin-top: calc(var(--gap) * 3);
    }
    .top-info {
      max-width: 650px;
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
      margin-top: 0.8em;
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
  .showcases {
    width: 96%;
    margin-left: 0.1%;
  }
  .showcases > article{
    margin-left: -0.5%;
    margin-right: -0.5%;
  }
</style>
