<template>
  <div ref="wrapper" class="scroll-wrapper">
    <div class="scroll-content">
      <index-swiper :swiper-data="swiperData"></index-swiper>
      <main-title :data="{ field_name: '推荐课程', field: 'all' }"></main-title>
      <div v-if="fieldData.length > 0 && courseData.length > 0">
        <main-title :data="fieldData[0]"></main-title>
        <main-title :data="fieldData[1]"></main-title>
        <main-title :data="fieldData[2]"></main-title>
        <main-title :data="fieldData[3]"></main-title>
      </div>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
import IndexSwiper from "./IndexSwiper";
import MainTitle from "./MainTittle";
import { getCourseDatas } from "@/models";

export default {
  name: "IndexScrollWrapper",
  components: {
    IndexSwiper,
    MainTitle
  },
  data () {
    return {
      swiperData: [],
      fieldData: [],
      courseData: [],
      recomCourseData: []
    };
  },
  mounted () {
    this.getCourseDatas();
    this.scroll = new BetterScroll(this.$refs.wrapper, {
      mouseWheel: true,
      click: true,
      tap: true
    });
  },
  methods: {
    async getCourseDatas () {
      const { swipers, fields, courses, recomCourses } = await getCourseDatas();
      this.swiperData = swipers;
      this.fieldData = fields;
      this.courseData = courses;
      this.recomCourseData = recomCourses;
    }
  }
};
</script>

<style lang="scss" scoped></style>
