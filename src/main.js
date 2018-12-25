import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import zj_plugin from '../public/common/zj_plugin/zj_plugin'
import './Mock/Mock'
import './filters'

Vue.config.productionTip = false
Vue.use(zj_plugin)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
