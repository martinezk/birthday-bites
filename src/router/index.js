import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Search from '@/components/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ],
  //prevent hashes in URL
  mode: 'history'
})
