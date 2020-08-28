<template>
  <div class="sidebar" :class="{active: menuIsOpen}">
        <router-link to='/' class="sidebar__logo">
          <img src="img/logo.png" alt="">
        </router-link>
  </div>
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
  
  &__logo{
    display: block;
    text-align: center;
    height: 56px;
    width: 100%;
    background: rgba(0,0,21,.2);
    img{
      height: 100%;
    }
  }
}
</style>

