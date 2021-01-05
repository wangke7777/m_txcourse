<template>
  <li
    :class="['tab-item', { current: index === tabIndex }]"
    @click="onTabClick"
  >
    {{ data.field_name }}
  </li>
</template>

<script>
export default {
  name: "TabItem",
  props: {
    data: Object,
    index: Number,
    tabIndex: Number
  },
  methods: {
    onTabClick() {
      console.log(1);
    }
  }
};
</script>

<style lang="scss" scoped>
.tab-item {
  float: left;
  width: 1.2rem;
  height: 100%;
  font-size: 0.14rem;
  text-align: center;
  line-height: 0.35rem;
  box-sizing: border-box;
  &.current {
    color: #23b8ff;
    border-bottom: 1px solid;
  }
}
</style>
