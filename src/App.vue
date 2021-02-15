<template>
  <div id="app">
    <Finder/>
  </div>
</template>

<script>
import Finder from './components/Finder.vue'

export default {
  name: 'App',
  components: {
    Finder
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
