import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import router from "@/router";
import VueRouter from 'vue-router';
import store from './store';
import VeeValidate from 'vee-validate';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faHome,
  faUser,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VeeValidate);

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');