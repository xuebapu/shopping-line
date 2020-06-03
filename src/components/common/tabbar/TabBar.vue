<template>
    <div id="tab-bar">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "TabBar"
    }
</script>

<style scoped>
    #tab-bar{
        display: flex; background: aliceblue;
        /*把这个属性直接放在最下面  position: fixed;生成固定定位的元素，相对于浏览器窗口进行定位*/
        position: fixed; left: 0; right: 0; bottom: 0;
        /* 出现一个分割线  box-shadow 右上左*/
        box-shadow: 0px -5px 1px rgba(100,100,100,0.2);
    }
</style>
