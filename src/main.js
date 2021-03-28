import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import router from "@/router";
import VueRouter from 'vue-router';
import store from './store';
import VeeValidate from 'vee-validate';
import { connect } from "./util/websocket";

Vue.config.productionTip = false;
connect()
Vue.use(VueRouter);
Vue.use(VeeValidate);

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');