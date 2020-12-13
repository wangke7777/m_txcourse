<template>
  <div class="list-icon">
    <router-link to="list">
      <i v-show="listIconShow" class="iconfont icon-cc-list"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ListIcon",
  props: {
    listIconShow: {
      type: Boolean,
      default () {
        return true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.list-icon {
  display: flex;
  justify-content: center;
  width: 0.44rem;
  height: 0.44rem;
  align-items: center;
  color: #000;

  .iconfont {
    font-size: 0.25rem;
  }
}
</style>
