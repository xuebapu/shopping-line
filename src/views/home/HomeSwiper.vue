<template>
  <div class="example-3d">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="item in banners">
        <a :href="item.link">
          <img :src="item.image">
        </a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  export default {
    name: "HomeSwiper",
    //得到数据
    props:{
      banners:{
        type:Array,
        default(){
          return [];
        },
      }
    },
    data(){
      return {
        swiperOption: {
          autoplay:{
            delay:2000,
            disableOnInteraction: false,
          },
          loop:true,
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
          },
          pagination: {
            el: '.swiper-pagination'
          },
        }
      }
    },
    components:{
      Swiper,
      SwiperSlide,
    },
  }
</script>

<style scoped>
  .example-3d {
    width: 100%;
    height: 194px;
    /*离外层的高度*/
    background: var(--color-tint);
  }
  .swiper {
    height: 100%;
    width: 100%;
  }
  swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    text-align: center;
    font-weight: bold;
    background-position: center;
    background-size: cover;
  }
  img{ width: 100%;
    height:100%;}
</style>
