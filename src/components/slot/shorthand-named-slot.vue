<template>
  <div>
    <h2>
      <slot name="header"></slot>
    </h2>
    <h3>
      <slot :content="content"></slot>
    </h3>
  </div>
</template>
<script>
export default {
  name: 'shorthand-named-slot',
  data () {
    return {
      content: {
        name: '默认具名插槽的缩写'
      }
    }
  }
}
</script>
