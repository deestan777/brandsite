import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import FlagIcon from "vue-flag-icon";
import i18n from "./i18n";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
Vue.use(FlagIcon);

new Vue({
  router,
  store,
  FlagIcon,
  i18n,
  vuetify,
  render: h => h(App)
}).$mount("#app");
