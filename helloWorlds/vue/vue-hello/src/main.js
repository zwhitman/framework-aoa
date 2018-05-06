import Vue from 'vue'
import App from './App.vue'
import { createStore } from './store'
import { createRouter } from './router'

Vue.config.productionTip = false


// export function createApp () {
//   const store = createStore()
//   const router = createRouter()
//
//   const app = new Vue({
//     router,
//     store,
//     render: h => h(App)
//   })
//
//   return { app, router, store }
// }
//

const store = createStore()
const router = createRouter()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
