import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import router from "@/router";
import VueRouter from 'vue-router';
import store from './store';
import VeeValidate from 'vee-validate';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VeeValidate);

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');