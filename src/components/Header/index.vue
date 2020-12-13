<template>
  <div class="header">
    <header-back-icon :back-icon-show="backIconShow" />
    <header-logo />
    <header-list-icon :list-icon-show="listIconShow" />
  </div>
</template>

<script>
import HeaderBackIcon from "./BackIcon";
import HeaderLogo from "./Logo";
import HeaderListIcon from "./ListIcon";

export default {
  name: "Header",
  components: {
    HeaderBackIcon,
    HeaderLogo,
    HeaderListIcon
  },
  props: {
    backIconShow: {
      type: Boolean,
      default () {
        return false;
      }
    },
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
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 0.44rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}
</style>
