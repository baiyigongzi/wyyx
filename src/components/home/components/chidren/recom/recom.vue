<template>
    <div>
        <!-- 推荐界面 -->
        <!-- 轮播图 -->
        <carousl></carousl>
        <!-- 网易服务 -->
        <grow></grow>
        <!-- 图片介绍 -->
        <picture1></picture1>
        <jjj></jjj>
    </div>
</template>
<script>
import carousl from './components/carousel'
import grow from './components/grow'
import picture1 from './components/picture1'
import jjj from './components/jjj'
import 'swiper/dist/css/swiper.css'
export default {
  data () {
    return {

    }
  },
  components: {
    carousl,
    grow,
    picture1,
    jjj
  }
}
</script>
