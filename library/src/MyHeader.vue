<template>
  <h1>{{ caption }}</h1>
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
