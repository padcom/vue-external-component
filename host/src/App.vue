<template>
  <div>
    <MyHeader caption="Hello, world! from host application" />
    <MyButton caption="Click me!" @click="clicked"/>
  </div>
</template>

<script>
import Vue from 'vue'
import { MyHeader, MyButton } from 'library'

export default Vue.extend({
  components: {
    MyHeader,
    MyButton
  },
  methods: {
    clicked () {
      alert('MyButton has been clicked')
    }
  }
})
</script>
