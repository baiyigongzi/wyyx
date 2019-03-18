<template>
    <div class="tabbar">
        <ul>
           <router-link to="/home" tag="li" class="home">
            <a href="#">
             <i class="iconfont">&#xe609;</i>
            <span>首页</span>
            </a>
           </router-link>
         <router-link to="/classify" tag="li">
            <a href="#">
            <i class="iconfont">&#xe778;</i>
            <span>分类</span>
            </a>
            </router-link>
          <router-link to="/find" tag="li">
            <a href="#">
            <i class="iconfont">&#xe66b;</i>
            <span>识图</span>
            </a>
            </router-link>
          <router-link to="/shopp" tag="li">
            <a href="#">
            <i class="iconfont">&#xe618;</i>
            <span>购物车</span>
            </a>
           </router-link>
          <router-link to="/me" tag="li">
            <a href="#">
            <i class="iconfont">&#xe608;</i>
            <span>我的</span>
            </a>
          </router-link>
        </ul>
      </div>
</template>
<style scoped>
@font-face {
  font-family: 'iconfont';
  src: url('./download/iconfont.eot');
  src: url('./download/iconfont.eot?#iefix') format('embedded-opentype'),
      url('./download/iconfont.woff2') format('woff2'),
      url('./download/iconfont.woff') format('woff'),
      url('./download/iconfont.ttf') format('truetype'),
      url('./download/iconfont.svg#iconfont') format('svg');
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
    .tabbar{
      position: fixed;
      bottom:0;
      left: 0;
      width: 100%;
  }
  .tabbar ul{
      display: flex;
      justify-content:space-around;
      width: 100%;
     height: 38px;

  }
 .tabbar ul li{
    display: flex;
    justify-content:center;
    align-items: center;
    height: 38px;
    width: 30px;
    text-align:center;
  }
  .tabbar ul li a{
    height:30px;
  }
  .tabbar ul li a span{
    font-size: 12px;
  }
</style>
