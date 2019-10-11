<template>
  <div>
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
  </div>
</template>
<script>
import CurrentUser from '@/components/slot/current-user.vue'
export default {
  data () {
    return {
      users: [
        {id: 1, name: '张三', age: 21},
        {id: 2, name: '李四', age: 22},
        {id: 3, name: '王五', age: 27},
        {id: 4, name: '张龙', age: 27},
        {id: 5, name: '赵虎', age: 27}
      ]
    }
  },
  components: {CurrentUser}
}
</script>
<style>
.span {
  display: inline-block;
  width: 10%;
  line-height: 20px;
}
</style>
