<template>
  <div>
    <myInput v-model="text"></myInput>
    <div>{{text}}</div>
    <button @click="add"></button>
  </div>
</template>
<script>
import myInput from '@/components/custom-model/my-input.vue'
export default {
  data () {
    return {
      text: '222'
    }
  },
  components: {myInput},
  methods: {
    add () {
      this.text = 'prefix_' + this.text
    }
  }
}
</script>
