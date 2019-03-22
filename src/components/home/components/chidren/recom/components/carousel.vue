<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index" class="sw-sl">
      <img :src="slide" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import {getbooknav} from '@/api/index.js'
export default {
  name: 'carrousel',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: true,
        productlist: []
      },
      swiperSlides: [
        'https://yanxuan.nosdn.127.net/2bbcba03698f83d1ae649c2954c2309c.jpg?watermark&type=1&gravity=northwest&dx=0&dy=0&image=YThjZjkzYWU4MzkyNjcyYzJiNjJmMDU1MGEyMTg4MGEucG5n|imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/2d4c11598ff1c3f37a3f78757c079dbb.jpg?imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/2d4c11598ff1c3f37a3f78757c079dbb.jpg?imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/9e38d79e8a381812cb1937aa18301a9e.jpg?watermark&type=1&gravity=northwest&dx=0&dy=0&image=YThjZjkzYWU4MzkyNjcyYzJiNjJmMDU1MGEyMTg4MGEucG5n|imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/0913ab47f2c318304eda6999e6325083.jpg?watermark&type=1&gravity=northwest&dx=0&dy=0&image=YThjZjkzYWU4MzkyNjcyYzJiNjJmMDU1MGEyMTg4MGEucG5n|imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/be6e5c287092e5b9482e5112d255dfff.jpg?watermark&type=1&gravity=northwest&dx=0&dy=0&image=YThjZjkzYWU4MzkyNjcyYzJiNjJmMDU1MGEyMTg4MGEucG5n|imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/9a98a10f260bcde62951a36ac43b2f92.jpg?watermark&type=1&gravity=northwest&dx=0&dy=0&image=YThjZjkzYWU4MzkyNjcyYzJiNjJmMDU1MGEyMTg4MGEucG5n|imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/ca022fac03d97b93eaf9d306d35793ee.jpg?imageView&quality=75&thumbnail=750x0'
      ]
    }
  },
  created () {
    getbooknav().then((data) => {
      this.productlist = data.data
    })
  },
  mounted () {
    // setInterval(() => {
    //   console.log('simulate async data')
    //   if (this.swiperSlides.length < 5) {
    //     this.swiperSlides.push(this.swiperSlides.length + 1)
    //   }
    // }, 3000)
  }
}
</script>
<style>
  .sw-sl{
    height: 100%;
    width: 100%;
  }
  .sw-sl img{
    width: 100%;
    height: 100%;
  }
</style>
