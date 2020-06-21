<template>
  <div>
    <input
    v-bind:value="value2"
    @input="input"/>
  </div>
</template>
<script>
export default {
  model: {
    prop: 'value2',
    event: 'input2'
  },
  props: {
    value2: String
  },
  methods: {
    input (event) {
      this.$emit('input2', event.target.value)
    }
  }
}
</script>
