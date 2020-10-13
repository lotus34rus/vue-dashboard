<template>
  <div class="preloader">
    <div class="progress">
      <div class="indeterminate"></div>
  </div>
  </div>
</template>

<script>
export default {
  name: "Preloader",
};
</script>

<style lang="scss" scoped>
.preloader {
//   position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  background: white;
}
.preloader .progress{
    width: 50%;    
}
</style>