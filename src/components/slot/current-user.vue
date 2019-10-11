<template>
  <div>
    <slot v-slot:header></slot>
    <div v-for="(user, index) in users" :key="user.id" style="line-height:2.2;" :style="index % 2 === 0 ? 'background:'+oddBgcolor : 'background:'+evenBgcolor">
      <slot name="cont" v-bind:user="user"> </slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    users: Array,
    oddBgcolor: String,
    evenBgcolor: String
  },
  mounted () {
    console.log('$slots:', this.$slots)
    this.$nextTick(function () {
      console.log('$slots:', this.$slots)
    })
  }
}
</script>
