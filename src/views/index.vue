<template>
  <div class="container">
    <PageHeader :back-icon-show="false" :list-icon-show="true" />
    <index-scroll-wrapper />
  </div>
</template>

<script>
import PageHeader from "@/components/Header";
import IndexScrollWrapper from "@/components/ScrollWrapper";
export default {
  name: "index",
  components: {
    PageHeader,
    IndexScrollWrapper
  },
  methods: {}
};
</script>

<style lang="scss" scoped></style>
