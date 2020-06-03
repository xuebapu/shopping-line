<template>
    <div class="tab-bar-item" @click="itemClick">
<!--        改变插槽属性现在外面加一个div -->
        <div v-if=" !isAactive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
<!--  {active: isAactive} 动态绑定class 当isAactive 为true是才会把class 添加到元素中    -->
<!--        <div :class="{active: isAactive}"><slot name="item-text"></slot></div>-->
<!--但是  要从分分离  人员要自己可填写-->
        <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        //要传递的参数
        props:{
            path:String,
            activeColor:{
                type:String,
                default:'#ff8198',
            },
        },
        data(){
            return{
                // active:false,
            }
        },
        methods:{
            itemClick(){
                // replace 网页返回键不能使用  push可以返回  .catch(err => err);排除点击多次导航 的报错
                this.$router.replace(this.path).catch(err => err);
                // console.log(this.path)
            }
        },
        //计算属性
        computed:{
            //判断是否是活跃组件  表示
            isAactive(){
                //indexOf==-1  表示没找到这种情况  !==-1  表示找到了前面的结果，表示路由路径相同 返回为true
                return this.$route.path.indexOf(this.path) !== -1;
            },
            //动态获父组件传来的值
            activeStyle(){
                return this.isAactive ? {color: this.activeColor} : {};
            },
        },
    }
</script>

<style scoped>
    .tab-bar-item{
        flex: 1;
        text-align: center;
        height:49px;
        font-size: 12px;
    }
    .tab-bar-item> div> img{
        margin-top: 5px;
        width: 24px;
        height: 24px;
    }

</style>
