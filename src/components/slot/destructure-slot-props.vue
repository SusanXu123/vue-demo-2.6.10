<template>
  <div>
    <slot :content="content"></slot>
  </div>
</template>
<script>
export default {
  // 解构插槽prop
  name: 'destructure-slot-props',
  data () {
    return {
      content: {
        text: '解构插槽 Prop'
      }
    }
  }
}
</script>
