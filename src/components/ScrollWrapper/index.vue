<template>
  <div ref="wrapper" class="scroll-wrapper">
    <div class="scroll-content">
      <index-swiper :swiper-data="swiperData"></index-swiper>
      <main-title :data="{ field_name: '推荐课程', field: 'all' }"></main-title>
      <recom-course-list
        :recom-course-data="recomCourseData"
      ></recom-course-list>
      <div v-if="fieldData.length > 0 && courseData.length > 0">
        <main-title :data="fieldData[0]"></main-title>
        <course-list
          :course-data="courseData | filterCourseData('0')"
        ></course-list>
        <main-title :data="fieldData[1]"></main-title>
        <course-list
          :course-data="courseData | filterCourseData('1')"
        ></course-list>
        <main-title :data="fieldData[2]"></main-title>
        <course-list
          :course-data="courseData | filterCourseData('2')"
        ></course-list>
        <main-title :data="fieldData[3]"></main-title>
        <course-list
          :course-data="courseData | filterCourseData('3')"
        ></course-list>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import IndexSwiper from "./IndexSwiper";
import MainTitle from "./MainTittle";
import RecomCourseList from "./RecomCourseList";
import CourseList from "./CourseList";

import { getCourseDatas } from "@/models";

export default {
  name: "IndexScrollWrapper",
  components: {
    IndexSwiper,
    MainTitle,
    RecomCourseList,
    CourseList
  },
  data() {
    return {
      swiperData: [],
      fieldData: [],
      courseData: [],
      recomCourseData: []
    };
  },
  mounted() {
    this.getCourseDatas();
    this.init();
  },
  methods: {
    async getCourseDatas() {
      const { swipers, fields, courses, recomCourses } = await getCourseDatas();
      this.swiperData = swipers;
      this.fieldData = fields;
      this.courseData = courses;
      this.recomCourseData = recomCourses;
    },
    init() {
      this.bs = new BScroll(this.$refs.wrapper, {
        probeType: 3,
        click: true
      });
      //手指放在滚动容器内 从新计算高度 解决图片加载慢导致的滚动内容高度不正确
      this.bs.on("beforeScrollStart", () => {
        this.bs.refresh();
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
