<template>
  <div class="back-icon">
    <i
        v-show="backIconShow"
        class="iconfont icon-arrow-left"
        @click="goBack"
    ></i>
  </div>
</template>

<script>
export default {
  name: "BackIcon",
  props: {
    backIconShow: {
      type: Boolean,
      default () {
        return false;
      }
    }
  },
  methods: {
    goBack () {
      this.$router.go(- 1);
    }
  }
};
</script>

<style lang="scss" scoped>
.back-icon {
  display: flex;
  width: 0.44rem;
  justify-content: center;
  align-items: center;
  color: #000;
}
</style>
