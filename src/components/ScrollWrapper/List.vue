<template>
  <div ref="wrapper" class="scroll-wrapper">
    <div class="scroll-content">
      <course-list :course-data="courseData"></course-list>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import CourseList from "./CourseList";
export default {
  name: "ListScrollWrapper",
  props: {
    courseData: Array
  },
  components: {
    CourseList
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.bs = new BScroll(this.$refs.wrapper, {
        mouseWheel: true,
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
