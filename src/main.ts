// import { createApp } from "vue";
// import { store } from "@/store";
// import App from "@/App.vue";
// import router from "@/router";
//
// import "@/assets/scss/style.scss";
// // import 'quasar/src/css/index.sass';
// import '@/assets/scss/styles/custom-quasar-styles.scss';
// import Quasar from "quasar";
//
// const app = createApp(App);
// app.use(store);
// app.use(router);
// app.use(Quasar, {
//   config: {
//     brand: {
//       primary: '#027be3',
//       secondary: '#26A69A',
//       accent: '#9C27B0',
//
//       dark: '#1D1D1D',
//
//       positive: '#21BA45',
//       negative: '#C10015',
//       info: '#31CCEC',
//       warning: '#F2C037',
//     },
//   }
// } as object);
// app.mount("#app");

import { createApp } from "vue";
import { store } from "@/store";
import App from "@/App.vue";
import router from "@/router";
import { Quasar } from "quasar";
import "@quasar/extras/material-icons/material-icons.css";

// Import Quasar CSS
import "quasar/src/css/index.sass";
import "@/assets/scss/style.scss";
import "@/assets/scss/styles/custom-quasar-styles.scss";

const app = createApp(App);

app.use(store);
app.use(router);
// @ts-ignore
app.use(Quasar, {
  config: {
    extras: [
      'material-icons'
    ]
  },
});

app.mount("#app");

