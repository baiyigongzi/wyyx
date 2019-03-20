<template>
    <div class="option" >
        <div class="catalog">
        <ul>
            <li>推荐</li>
            <li>居家生活</li>
            <li>服饰鞋包</li>
            <li>美食酒水</li>
            <li>个护清洁</li>
            <li>母婴亲子</li>
            <li>运动旅行</li>
            <li>数码家电</li>
            <li>礼品特色</li>
        </ul>
        </div>
        <div class="drop-down">
         <a href="#">
            <i class="iconfont">&#xe760;</i>
        </a>
        </div>
    </div>
</template>
<style scoped>
.option{
    display: flex;
}
.catalog{
    width:80%;
    overflow-x: auto;
}

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
</style>
