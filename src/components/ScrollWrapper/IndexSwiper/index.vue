<template>
  <swiper ref="indexSwiper" :options="swiperOptions">
    <swiper-slide v-for="(item, index) of swiperData" :key="index">
      <slider-inner :data="item"></slider-inner>
    </swiper-slide>
    <div slot="pagination" class="swiper-pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import SliderInner from "./SliderInner";
import "swiper/css/swiper.min.css";

export default {
  name: "IndexSwiper",
  props: {
    swiperData: Array
  },
  components: {
    Swiper,
    SwiperSlide,
    SliderInner
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        loop: true,
        loopedSliders: 1
        // autoplay: true
      }
    };
  }
};
</script>

<style lang="scss" scoped></style>
