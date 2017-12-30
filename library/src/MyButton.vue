<template>
  <button type="button" @click="clicked">{{ caption }}</button>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  props: {
    caption: {
      type: String,
      required: false,
      default: () => '[caption]'
    }
  }
})
export default class MyButton extends Vue {
  clicked () {
    this.$emit('click')
  }
}
</script>
