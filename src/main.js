import Vue from 'vue'
import Loading from 'vue-loading-overlay'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

//bootstrapvue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)
// VeeValidate
import {
  ValidationObserver,
  ValidationProvider,
  extend,
  localize
} from "vee-validate";
import * as rules from "vee-validate/dist/rules";
import tw from 'vee-validate/dist/locale/zh_TW.json';

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

localize("tw", tw);



Vue.config.productionTip = false

Vue.component('Loading', Loading)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

// Vue.use(bootstrap)
Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


extend('secret', {
  validate: value => value === 'example',
  message: 'This is not the magic word'
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
