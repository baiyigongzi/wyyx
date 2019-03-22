<template>
    <div class="option" >
        <div class="catalog">
            <ul>
                <router-link to="/home/recom" tag="li">
                <a href="#">
                <span>推荐</span>
                </a>
            </router-link>
            <router-link to="/home/life" tag="li">
                <a href="#">
                <span>居家生活</span>
                </a>
            </router-link>
                <router-link to="/home/clothing" tag="li">
                <a href="#">
                <span>服饰鞋包</span>
                </a>
            </router-link>
                <router-link to="/home/booze" tag="li">
                <a href="#">
                <span>美食酒水</span>
                </a>
            </router-link>
                <router-link to="/home/clean" tag="li">
                <a href="#">
                <span>个护清洁</span>
                </a>
            </router-link>
                <router-link to="/home/child" tag="li">
                <a href="#">
                <span>母婴亲子</span>
                </a>
            </router-link>
                <router-link to="/home/mov" tag="li">
                <a href="#">
                <span>运动旅行</span>
                </a>
            </router-link>
                <router-link to="/home/appliance" tag="li">
                <a href="#">
                <span>数码家电</span>
                </a>
            </router-link>
                <router-link to="/home/gift" tag="li">
                <a href="#">
                <span>礼品特色</span>
                </a>
            </router-link>
            </ul>
        </div>
        <div class="drop-down">
         <a href="#">
            <i class="iconfont">&#xe760;</i>
        </a>
        </div>
        <!-- <tf></tf> -->
    </div>
</template>
<script>
// import tf from './chidren/tj'
// export default {
//   data () {
//     return {

//     }
//   },
//   components: {
//     tf
//   }
// }
</script>

<style scoped>
.option{
    display: flex;
}
.catalog{
    width:80%;
    overflow-x: auto;
}
::-webkit-scrollbar {display:none}
.catalog ul{
    display: flex;
    width: 750px;
}
.catalog ul li{
   margin: 5px 10px;
}
.option .drop-down{
  width: 20%;
  display: flex;
  justify-content: center;
  align-content: center;
}
.option .drop-down a i{
    font-size:30px;
}
.router-link-active a{
    color:#b4282d;
    border-bottom:2px solid #b4282d;
    padding-bottom:4px;
  }
</style>
