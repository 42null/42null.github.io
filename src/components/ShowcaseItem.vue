<script setup lang="ts">
  const props = defineProps({
    title: String,
    description: String,
    url: String,
  });
</script>

<template>
  <div class="current-repo">
    <a :href="url" target="_blank" :title="title">

      <div class="current-repo__img">
  <!--      <img :src="getImageRepo(currentRepository.name)" :alt="currentRepository.name" />-->
      </div>
      <div class="current-repo__info">
        <h4>
            {{ title }}
        </h4>
        <p>{{ description }}</p>
      </div>
    </a>
  </div>
</template>

<style scoped lang="scss">

</style>
