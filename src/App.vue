<template>
  <div id="app">
    <Header v-if="$route.meta.navShow"></Header>
    <router-view/>
  </div>
</template>

<script>
  import Header from './components/Head/Head'
  export default {
      components:{
          Header
      }
  }
</script>

<style lang="less" type="text/less">
  @import "../public/common/less/common";
  #app{
    height:100%;
  }
</style>
