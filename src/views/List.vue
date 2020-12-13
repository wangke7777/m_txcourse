<template>
  <div class="container">
    <PageHeader :back-icon-show="true" :list-icon-show="false" />
  </div>
</template>

<script>
import PageHeader from "@/components/Header";
export default {
  name: "ListPage",
  components: {
    PageHeader
  },
  data () {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped></style>
