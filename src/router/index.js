import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Fire from '../views/Fire.vue'
import Comment from '../views/Comment.vue'
import Service from '../views/Service.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path:'/fire',
    name:'fire',
    component:Fire
  },
  {
    path:'/comment',
    name:'comment',
    component:Comment
  },
  {
    path:'/service',
    name:'service',
    component:Service
  },

]

const router = new VueRouter({
  routes
})

export default router
