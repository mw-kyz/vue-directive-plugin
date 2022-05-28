<template>
  <div id="app"  v-loading="loading">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      fetchData: []
    }
  },
  mounted() {
    setTimeout(() => {
      this.fetchData = [1, 2, 3, 4, 5]
    }, 5000)
  },
  computed: {
    loading() {
      return !this.fetchData.length
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
