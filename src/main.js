import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import Vuelazyload from 'vue-lazyload'

import 'common/stylus/index.styl'
// import axios from 'axios'
Vue.config.productionTip = false

fastclick.attach(document.body)
// axios.defaults.headers.post["referer"] = 'https://c.y.qq.com/'
// axios.defaults.headers.post["host"] = 'c.y.qq.com'
Vue.use(Vuelazyload, {
	loading: require('common/image/default.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
