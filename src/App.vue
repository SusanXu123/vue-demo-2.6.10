<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ul>
      <li v-for="menu in menus" :key="menu.key">
        <button @click="go(menu)">{{menu.name}}</button>
      </li>
    </ul>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
      menus: [{
        name: 'slot',
        key: 1
      },
      {
        name: 'CustomModel',
        key: 2
      }]
    }
  },
  methods: {
    go ({name}) {
      this.$router.push({name})
    }
  }
}
</script>
<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
