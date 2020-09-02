<template>
  <div id="app" class="flex">
    <Sidebar
     :menuIsOpen = menuIsOpen 
    />
    <div class="wrapper" :class="{menuIsOpen : menuIsOpen}">
      <Header 
      @click-on-menu-btn = "toggleMenu"
      />
      <div class="page-container">
         <router-view />
      </div>
      <Footer />
    </div>

  </div>
</template>

<script>
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";



export default {
  data() {
    return {
      menuIsOpen: true
    }
  },
  components: {
    Header, Sidebar, Footer
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
@import "@/assets/scss/common.scss";
</style>
