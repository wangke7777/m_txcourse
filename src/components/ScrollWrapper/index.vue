<template>
  <div ref="wrapper" class="scroll-wrapper">
    <div class="scroll-content">
      <index-swiper :swiper-data="swiperData"></index-swiper>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
import IndexSwiper from "./IndexSwiper";
import { getCourseDatas } from "@/models";

export default {
  name: "IndexScrollWrapper",
  components: {
    IndexSwiper
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
