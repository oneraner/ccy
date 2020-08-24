import Vue from 'vue'
import Loading from 'vue-loading-overlay'
import App from './App.vue'
import router from './router'
// import bootstrap from 'bootstrap'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.config.productionTip = false

Vue.component('Loading', Loading)

// Vue.use(bootstrap)
Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
