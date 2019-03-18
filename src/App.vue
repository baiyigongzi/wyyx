<template>
  <div id="app">
    <!-- 底部导航 -->
    <tabbar></tabbar>
    <router-view/>
  </div>
</template>

<script>
import './assets/reset.css'
import tabbar from '@/assets/nav.vue'
export default {
  name: 'App',
  components: {
    tabbar
  }
}
</script>

<style>

</style>
