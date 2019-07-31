import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import ErroNotification from "@/components/ErroNotification.vue";
import SucessNotification from "@/components/SucessNotification.vue";

Vue.component("ErroNotification", ErroNotification);
Vue.component("SucessNotification", SucessNotification);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
