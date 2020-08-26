<template>
  <div id="app" class="flex">
    <Sidebar
     :menuIsOpen = menuIsOpen 
    />
    <div class="page-content" :class="{menuIsOpen : menuIsOpen}">
      <Header 
      @clickOnMenuBtn = "toggleMenu"
      />
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";


export default {
  data() {
    return {
      menuIsOpen: false
    }
  },
  components: {
    Header, Sidebar
  },

  methods: {
    toggleMenu() {
      this.menuIsOpen = !this.menuIsOpen;    
    }
  },
};
</script>

<style lang="scss">
@import "~materialize-css/dist/css/materialize";
*{
  transition: 0.3s;
}
body {
  color: black;
}
.flex {
  display: flex;
}
.page-content{
  width: 100%;
  &.menuIsOpen{
    margin-left: 256px;
  }
}

.wrapper{
  padding: 0px 16px;
}
</style>
