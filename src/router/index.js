import Vue from 'vue'
import Router from 'vue-router'
const Doc = () => import(/* webpackChunkName: "doc" */ '@/components/Doc.vue')
const Home = () => import(/* webpackChunkName: "home" */ '@/components/Home.vue')
const DefaultVideo = () => import(/* webpackChunkName: "defaultvideo" */ '@/components/DefaultVideo.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/doc',
      name: 'doc',
      component: Doc
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/defaultvideo',
      name: 'defaultvideo',
      component: DefaultVideo
    }
  ]
})
