<template>
    <tab-bar>
        <tab-bar-item path="/home">
            <img slot="item-icon" src="~assets/img/tabBar/home/home.png">
            <img slot="item-icon-active" src="~assets/img/tabBar/home/Ahome.svg" >
          <div slot="item-text">主页</div>
        </tab-bar-item>
        <tab-bar-item path="/category">
            <img slot="item-icon" src="~assets/img/tabBar/category/fenlei.png">
            <img slot="item-icon-active" src="~assets/img/tabBar/category/Afenlei.svg" >
            <div slot="item-text">分类</div>
        </tab-bar-item>
        <tab-bar-item path="/cart">
            <img  slot="item-icon" src="~assets/img/tabBar/cart/shopping.png">
            <img slot="item-icon-active" src="~assets/img/tabBar/cart/Ashopping.svg" >
            <div slot="item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path="/profile">
            <img slot="item-icon" src="~assets/img/tabBar/wode/wode.png">
            <img slot="item-icon-active" src="~assets/img/tabBar/wode/Awode.svg" >
            <div slot="item-text">我的</div>
        </tab-bar-item>
    </tab-bar>
</template>

<script>
    import TabBar from "components/common/tabbar/TabBar";
    import TabBarItem from "components/common/tabbar/TabBarItem";
    export default {
        name: "MainTabBar",
        components:{
            TabBar,
            TabBarItem,
        }
    }
</script>

<style scoped>

</style>
