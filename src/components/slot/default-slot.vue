<template>
  <div>
    <slot :text="'独占默认插槽的缩写语法'"></slot>
  </div>
</template>
<script>
export default {
  name: 'default-slot'
}
</script>
