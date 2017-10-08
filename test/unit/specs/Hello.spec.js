import Vue from 'vue'
import Login from '@/components/Login'
import Food from '@/components/Food'

describe('Login.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Login)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.login h4').textContent)
      .to.equal('Login')
  })
})

describe('Food.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Food)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.food a').textContent)
      .to.equal('Go somewhere')
  })
})
