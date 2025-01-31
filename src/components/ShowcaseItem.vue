<script lang="ts">
import { defineComponent, ref } from "vue";
import { QCarousel, QCarouselSlide } from 'quasar';

  export default defineComponent({
    name: "ShowcaseItem",
    components: {QCarousel, QCarouselSlide},
    data() {
      return {
        slide: ref<number>(0),
        autoplay: ref(true),
        fullscreen: ref(false)
      }
    },
    props: {
      title: String,
      description: String,
      url: String,
      imgs: Array<String>,
    },
  });

</script>

<template>
  <div class="showcase-card q-mr-sm">
    <div class="showcase-card__header">
      <h3>
        <a :href="url" target="_blank" :title="title">
          {{ title }} <q-icon name="open_in_new" />
        </a>
      </h3>
    </div>
    <div class="showcase-card__carousel">
      <q-responsive :ratio="16/9">
        <QCarousel
          swipeable
          animated
          v-model="slide"
          thumbnails
          infinite
          :autoplay="autoplay"
          v-model:fullscreen="fullscreen"
        >
          <template v-slot:control>
            <q-carousel-control
              position="right"
              :offset="[-4,100]"
              class="text-white rounded-borders"
              style="background: rgba(0, 0, 0, .3); padding: 4px 8px;"
            >
              <q-toggle dense dark color="primary" v-model="autoplay" />
            </q-carousel-control>
            <q-carousel-control
              position="right"
              :offset="[4,135]"
            >
              <q-btn
                push round dense color="white" text-color="primary"
                :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
                @click="fullscreen = !fullscreen"
              />
            </q-carousel-control>
          </template>
  <!--        <template v-slot:navigation-icon-->
  <!--        >-->
  <!--        </template>-->
          <QCarouselSlide v-for="(img, i) in imgs" :key="i" :name="img.title" :img-src="img.src" :title="img.title" class="carousel-slide"/>


        </QCarousel>
      </q-responsive>
    </div>
    <div class="showcase-card__footer">
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .showcase-card {
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


  .carousel-slide img {
    object-fit: contain;
    height: 100%;
    width: auto;
    max-width: 100%;
    display: block;
  }
</style>

<style>
  .q-carousel__thumbnail{
    border: 1px solid var(--q-primary) !important;
  }
  .q-carousel__thumbnail--active{
    border-width: 2px !important;
  }
</style>
