import Vue from 'vue'

import MyHeader from './MyHeader.vue'

new MyHeader({
  el: '#app',
  propsData: {
    caption: 'Hello, world!'
  }
})
