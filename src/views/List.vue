<template>
  <div class="container">
    <page-header :back-icon-show="true" :list-icon-show="false" />
    <list-tab :field-data="fieldData" />
  </div>
</template>

<script>
import PageHeader from "@/components/Header";
import ListTab from "@/components/ListTab";
import { getCourseFields, getCourses } from "@/models/list";

export default {
  name: "ListPage",
  components: {
    PageHeader,
    ListTab
  },
  data() {
    return {
      fieldData: [],
      courseData: []
    };
  },
  mounted() {
    this.getCourseFields();
    this.getCourses();
  },
  methods: {
    async getCourseFields() {
      this.fieldData = await getCourseFields();
    },
    async getCourses(field = "all") {
      this.courseData = await getCourses(field);
    }
  }
};
</script>

<style lang="scss" scoped></style>
