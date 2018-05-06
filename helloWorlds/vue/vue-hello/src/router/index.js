import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting
const Home = () => import('../views/Home.vue')
const HelloWorld = () => import('../components/HelloWorld.vue')
const SubComp = () => import('../components/subComp.vue')

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/vue-subComp', component: SubComp },
      { path: '/vue-helloWorld', component: HelloWorld },
      { path: '/', component: Home }
    ]
  })
}
