<template>
  <div class="col s5 progress-bar">
    <div class="progress-bar__name">{{barTitle}}</div>
    <div class="progress-bar__count">{{count}} ( {{percent}}% )</div>
    <k-progress :percent="percent" :color="color" :show-text="false" />
  </div>
</template>



<script>
export default {
  props: ["barTitle", "count", "percent", "color"],
};
</script>



<style lang="scss">
.k-progress-outer {
  padding-right: 0 !important;
}
.progress-bar {
  padding: 10px 20px;
  width: 25%;
  &__name {
    color: #768192;
    font-size: 15px;
    text-align: center;
    margin-bottom: 10px;
  }
  &__count {
    color: #3c4b64;
    text-align: center;
    font-weight: 600;
    margin-bottom: 20px;
  }
}
</style>