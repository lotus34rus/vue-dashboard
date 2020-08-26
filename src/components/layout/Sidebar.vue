<template>
  <div class="sidebar" :class="{active: menuIsOpen}">test</div>
</template>

<script>
export default {
  props: ["menuIsOpen"],

  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  margin-left: -256px;
  width: 256px;
  min-height: 100vh;
  z-index: 10;
  transition: 0.3s;
  color: #fff;
  background: #3c4b64;
  &.active {
    margin-left: 0;
  }
}
</style>

