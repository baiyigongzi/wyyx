<template>
    <div class="pic">
       <ul>
            <li v-for="(slide, index) in productlist" :key="index" class="sw-sl">
              <img :src="slide.img" alt="">
              <span>{{slide.name}}</span>
            </li>
       </ul>
    </div>
</template>

<script>
import {getbooknav} from '@/api/index.js'
export default {
  data () {
    return {
      productlist: []
    }
  },

  components: {
  },
  created () {
    getbooknav().then((data) => {
      console.log(data.data)
      this.productlist = data.data
    })
  }
}
</script>
<style scoped>
.pic{
    display: flex;
}
.pic ul{
    display: flex;
    width:100%;
    height: 100%;
    flex-wrap:wrap;
}
.pic ul li{
    width: 20%;
}
</style>
