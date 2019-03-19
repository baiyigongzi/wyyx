<template>
    <div class="search">
        <ul >
            <li class="left">
            <a href="#" >
             <i class="iconfont left-sr">&#xe653;</i>
            </a>
            </li>
            <li class="seek">
                <i class="iconfont left-sr">&#xe68f;</i>
                <input type="text" value="搜索商品, 共21596款好物">
            </li>
            <li class="right">
                <a href="#">
                    <span>登陆</span>
                </a>
            </li>
        </ul>
    </div>
</template>
<style scoped>
 .search>ul{
    display: flex;
    justify-content: center;
    align-items:center;
    height: 32px;
    margin-top:10px;
}
.search ul .left a i{
    display: block;
    height: 20px;
    font-size: 30px;
    color: #000;
    padding: 0px 20px;
    margin-top:-5px;
}
.seek{
    display: flex;
    background-color: #f4f4f4;
    height: 20px;
    width: 60%;
    border-radius: 5px;
    justify-content: center;
    align-content: center;
}
.seek i{
    margin-left: 10px;
    line-height: 20px
}
.seek input{
    background-color: #f4f4f4;
    width: 80%;
    font-size: 12px;
    color: #666;
}
.right{
    height: 15px;
    width: 30px;
    display: block;
    border:1px solid #b4282d;
    font-size: 12px;
    text-align:center;
    border-radius: 5px;
    margin-left: 5px;
}
.right a{
    line-height: 15px;
    color: #b4282d;
}

</style>
