import Vue from 'vue'

import { MyHeader } from 'library'

new Vue({
  el: '#app',
  render: h => h(MyHeader, { props: { caption: 'Hello!' } })
})
