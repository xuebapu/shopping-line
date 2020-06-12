<template>
  <div class="wrapper" ref="wrapperBox">
    <div class="rowcontent" ref="rowcontent">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';
  export default {
    name: "RowScorll",
    components:{
      BScroll,
    },
    data(){
      return{
        num: 8
      }
    },
    methods: {
      verScroll () {
        let width = this.num*85;
        this.$refs.rowcontent.style.width = width + 'px'  // 修改滚动区域的宽度
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.wrapperBox, {
              startX: 0,  // 配置的详细信息请参考better-scroll的官方文档，这里不再赘述
              click: true,
              scrollX: true,
              scrollY: false,
              eventPassthrough: 'vertical'
            })
          } else {
            this.scroll.refresh() //如果dom结构发生改变调用该方法
          }
        })
      }
    },
    mounted () {
      this.$nextTick(() => {
        let timer = setTimeout(() => { // 其实我也不想写这个定时器的，这相当于又嵌套了一层$nextTick，但是不这么写会失败
          if (timer) {
            clearTimeout(timer)
            this.verScroll()
          }
        }, 0)
      })
    }
  }
</script>

<style scoped>
</style>
