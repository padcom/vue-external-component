<template>
  <h1 class="my-header">{{ caption }}</h1>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  props: {
    caption: {
      required: true,
      type: String
    }
  }
})
export default class MyHeader extends Vue {
}
</script>

<style>
.my-header {
  color: gray;
}
</style>
