<template>
  <div>
    <button @click="countHandler">{{count}}</button>
    <current-user :users="users"  odd-bgcolor="#D3DCE6" even-bgcolor="#E5E9F2">
      <template v-slot:header>
        <h1>user list</h1>
      </template>
      <template v-slot:cont="userProps">
        <span class="span">{{userProps.user.id}}</span>
        <span class="span">{{userProps.user.name}}</span>
        <span class="span">{{userProps.user.age}}</span>
        <!-- 这里可以自定[编辑][删除]按钮的链接和样式 -->
        <a class="span">编辑</a>
        <a class="span">删除</a>
      </template>
    </current-user>
    <!-- 默认插槽的缩写语法不能和具名插槽混用，因为它会导致作用域不明确： -->
    <default-slot v-slot="slotProps">
      <h2>{{slotProps.text}}</h2>
    </default-slot>
    <destructure-slot-props v-slot="{content: {text}}">
      <h2>{{text}}</h2>
    </destructure-slot-props>
    <!-- <button @click="switchDynamicSlotName"></button> -->
    <dynamic-slot-name>
      <!-- <template v-slot:[dynamicSlot]></template> -->
      <template v-slot:header>
        <h2>动态插槽{{dynamicSlot}}</h2>
      </template>
    </dynamic-slot-name>
    <shorthand-named-slot>
      <template #header>
        具名插槽缩写
      </template>
      <template #default="{content: {name}}">
        {{name}}
      </template>
    </shorthand-named-slot>
  </div>
</template>
<script>
import CurrentUser from '@/components/slot/current-user.vue'
import DefaultSlot from '@/components/slot/default-slot.vue'
import DestructureSlotProps from '@/components/slot/destructure-slot-props.vue'
import DynamicSlotName from '@/components/slot/dynamic-slot-name.vue'
import ShorthandNamedSlot from '@/components/slot/shorthand-named-slot.vue'

export default {
  name: 'slot-page',
  data () {
    return {
      count: 0,
      users: [
        {id: 1, name: '张三', age: 21},
        {id: 2, name: '李四', age: 22},
        {id: 3, name: '王五', age: 27},
        {id: 4, name: '张龙', age: 27},
        {id: 5, name: '赵虎', age: 27}
      ],
      dynamicSlot: 'header'
    }
  },
  components: {
    CurrentUser,
    DefaultSlot,
    DestructureSlotProps,
    DynamicSlotName,
    ShorthandNamedSlot
  },
  methods: {
    switchDynamicSlotName () {
      this.dynamicSlot = this.dynamicSlot === 'header' ? 'footer' : 'header'
    },
    countHandler () {
      this.count = this.count + 1
    }
  }
}
</script>
<style scope>
.span {
  display: inline-block;
  width: 10%;
  line-height: 20px;
}
</style>
