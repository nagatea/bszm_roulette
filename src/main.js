import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import VueLocalStorage from 'vue-localstorage'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)
Vue.use(VueLocalStorage)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
