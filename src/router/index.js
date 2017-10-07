import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Food from '@/components/Food'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/food',
      name: 'Food',
      component: Food
    }
  ],
  //prevent hashes in URL
  mode: 'history'
})
