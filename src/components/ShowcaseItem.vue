<script setup lang="ts">
  const props = defineProps({
    title: String,
    description: String,
    url: String,
    imgs: Array<String>,
  });
</script>

<template>
  <div class="showcase-card">
    <a :href="url" target="_blank" :title="title">

      <div class="">
        <h3>
            {{ title }}
        </h3>
        <div class="showcase-card__img">
          <img :src="imgs?.[0]" :alt="'Screenshot of '+title" />
        </div>
        <p>{{ description }}</p>
      </div>
    </a>
  </div>
</template>

<style scoped lang="scss">
  .showcase-card{

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
  }
</style>
