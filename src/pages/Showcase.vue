<template>
  <section class="page">
    <div class="top-info">
      <h1>Showcases</h1>
      <p>This is under construction, many projects will be missing. Feel free to check my Github (<a href="https://github.com/42null" target="_blank">@42null</a>) to see what I have been working on (school projects use the handle <a href="https://github.com/josephmemmelatwctc" target="_blank">@josephmemmelatwctc</a> but are committed to by <a href="https://github.com/42null" target="_blank">@42null</a>.) </p>
  <!--    <p class="info">See <code>README.md</code> for more information.</p>-->

      <h2>Currently Available</h2>
    </div>
    <div class="showcases">
      <article v-for="showcase in allShowcases" class="list-repo__item"><!--TODO: Put back key-->
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

  const allShowcases = ref<Showcase[]>([
    { title: 'Instant Inventory',
      description: 'Instant Inventory (JS2 Final). Deployed but requires a login for authentication. It uses a NoSQL firebase for interacting with data.',
      url: 'https://fir-demo-621bc.web.app/#/',
      imgs: [
        {
          title: 'Home',
          src: 'images/showcases/JS2_final/home_admin.png',
        },{
          title: 'Inventory',
          src: 'images/showcases/JS2_final/inventory_root_admin.png',
        },{
          title: 'Admin',
          src: 'images/showcases/JS2_final/admin_admin.png',
        },{
          title: 'Notifications (Out of Stock)',
          src: 'images/showcases/JS2_final/notifications_out_of_order.png',
        },{
          title: 'Notifications (Reorder Level Reached)',
          src: 'images/showcases/JS2_final/notifications_reorder_level_reached.png',
        },{
          title: 'Records',
          src: 'images/showcases/JS2_final/records_admin.png',
        },{
          title: 'Statistics',
          src: 'images/showcases/JS2_final/statistics_records_admin.png',
        },
      ],
    },//https://github.com/JosephMemmelAtWCTC/vue-app-instant-inventory-vite-quasar.git
    { title: '.NET Web Final',
      description: 'I was in charge of the ratings (creating, displaying, API, and showing previous orders). The project is using the identity framework ans a SQL database with .NET MVC',
      url: 'https://expandeddotnetwebfinal.azurewebsites.net/',
      imgs: [
        {
          title: 'OrderCart',
          src: 'images/showcases/advanced_dotnet_web/NorthwindBuyChaiCart.png',
        },
        {
          title: 'Purchase History',
          src: 'images/showcases/advanced_dotnet_web/NorthwindPurchaseHistory.png',
        },
        {
          title: 'Discounts',
          src: 'images/showcases/advanced_dotnet_web/NorthwindDiscounts.png',
        },
        // ,{
        //   title: '',
        //   src: 'https://placehold.co/1200x500.png?text=Placeholder+Image',
        // },
      ],
    },
  ]);
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
    width: 80%;
  }
</style>
