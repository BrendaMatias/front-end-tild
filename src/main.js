import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebookSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import ErroNotification from "@/components/ErroNotification.vue";
import SucessNotification from "@/components/SucessNotification.vue";

library.add(faFacebookSquare, faLinkedin, faTwitterSquare)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component("ErroNotification", ErroNotification);
Vue.component("SucessNotification", SucessNotification);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
