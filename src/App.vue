<template>
  <div id="app">
    <img style="margin-top: " src="./assets/zap.svg" width="250vw">
   
    <Search />
  </div>
</template>

<script>
import Search from './components/Search.vue'

export default {
  name: 'App',
  components: {
    Search
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.modal-content {
    border: none !important;
    border-radius: 0px
}

.modal-header {
    border: none !important
}
.modal-dialog {
    min-width: 100% !important;
    margin: 0 !important;
}
</style>
