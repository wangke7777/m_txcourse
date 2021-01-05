<template>
  <div class="list-tab">
    <div class="tab-wrapper">
      <ul
        :style="{ width: (fieldData.length + 1) * tabWidth + 'rem' }"
        class="tab-list"
      >
        <tab-item
          :data="{ field_name: '全部课程', field: 'all' }"
          :index="0"
          :tabIndex="0"
        ></tab-item>
        <tab-item
          v-for="(item, index) of fieldData"
          :key="index"
          :data="item"
          :index="index + 1"
          :tabIndex="0"
        ></tab-item>
      </ul>
    </div>
  </div>
</template>

<script>
import TabItem from "./Item";

export default {
  name: "ListTab",
  components: {
    TabItem
  },
  props: {
    fieldData: Array
  },
  data() {
    return {
      tabWidth: 1.2
    };
  }
};
</script>

<style lang="scss" scoped>
.list-tab {
  height: 0.35rem;
  background-color: #fff;
  border-bottom: #eee;
  overflow: hidden;

  .tab-wrapper {
    height: 0.43rem;
    overflow-x: auto;
    overflow-y: hidden;

    .tab-list {
      height: 0.35rem;
    }
  }
}
</style>
