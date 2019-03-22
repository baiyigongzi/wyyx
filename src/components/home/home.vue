<template>
  <div class="hello">
   <!-- 搜索栏 -->
   <search></search>
   <!-- 选项 -->
   <channel></channel>
   <router-view></router-view>
  </div>
</template>
<script>
import search from './components/search.vue'
import channel from './components/channel.vue'
import '../../assets/download/iconfont.css'
export default {
  data () {
    return {

    }
  },
  components: {
    search,
    channel
  }
}
</script>
