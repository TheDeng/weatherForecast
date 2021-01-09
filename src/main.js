import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import axios from 'axios' //导入axios
import './assets/iconfont/iconfont.css'
const Base64 = require('js-base64').Base64
// import jquery from './assets/js/jquery'
// import md5 from './assets/js/md5'
// import HmacSHA1 from'./assets/js/HmacSHA1'
// import hmac from'./assets/js/hmac-sha256'
// import enc from './assets/js/enc-base64-min'
Vue.prototype.$axios = axios
Vue.use(Vant)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  Base64,
  render: h => h(App)
}).$mount('#app')
