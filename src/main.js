import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// Bootstrap Vue Add
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import { VBScrollspy } from "bootstrap-vue";
// Note: Vue automatically prefixes the directive name with 'v-'
Vue.directive("b-scrollspy", VBScrollspy);

// Main CSS Add
import "./assets/app.css";

// import animate.css
import AnimateCSS from "animate.css";
Vue.use(AnimateCSS);

// import aos
import AOS from "aos";
import "aos/dist/aos.css";
Vue.use(AOS);

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

import { BIcon } from "bootstrap-vue";
Vue.component("b-icon", BIcon);

Vue.config.productionTip = false;

new Vue({
  router,

  render: (h) => h(App),
  mounted() {
    AOS.init({
      delay: 100,
      duration:700,
      once: true,
    });
  },
}).$mount("#app");
