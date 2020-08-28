import Vue from 'vue'
import App from './App.vue'
import throttle from '@'
// import throttle from '../dist/sd-throttle.min'

Vue.use(throttle)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
