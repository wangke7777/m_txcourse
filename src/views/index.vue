<template>
  <div class="container">
    <PageHeader :back-icon-show="false" :list-icon-show="true" />
  </div>
</template>

<script>
import PageHeader from "@/components/Header";
export default {
  name: "index",
  components: {
    PageHeader
  },
  methods: {}
};
</script>

<style lang="scss" scoped></style>
