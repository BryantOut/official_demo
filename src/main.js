import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Utils from '@/utils/utils'

Vue.config.productionTip = false

import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

// 导入bootstrap
import "bootstrap"
import "bootstrap/dist/css/bootstrap.css"

import { Image, Button } from 'element-ui';
Vue.use(Image)
Vue.use(Button)

Vue.prototype.$utils = Utils

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
