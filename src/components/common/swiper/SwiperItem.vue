<template>
  <div class="example-3d">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide><img src="~assets/img/wpin/sp2.png"/></swiper-slide>
      <swiper-slide><img src="~assets/img/wpin/sp3.png"/></swiper-slide>
      <swiper-slide><img src="~assets/img/wpin/sp4.png"/></swiper-slide>
      <swiper-slide><img src="~assets/img/wpin/sp5.png"/></swiper-slide>
      <swiper-slide><img src="~assets/img/wpin/sp3.png"/></swiper-slide>
      <swiper-slide><img src="~assets/img/wpin/sp2.png"/></swiper-slide>
      <swiper-slide><img src="~assets/img/wpin/sp4.png"/></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  export default {
    name: "SwiperItem",
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
          }
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
    width: 90%;
    height: 200px;
    /*离外层的高度*/
    padding-top: 20px;
    padding-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
  }
  .swiper {
    height: 100%;
    width: 100%;
  }
  swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    height: 175px;
    text-align: center;
    font-weight: bold;
    background-position: center;
    background-size: cover;
  }

</style>
