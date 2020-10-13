<template>
  <div id="app" class="flex"  >
    <Preloader v-if="loading" />

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
import Preloader from "@/components/layout/Preloader";



export default {
  data() {
    return {
      menuIsOpen: false,
      loading: true
    }
  },
  components: {
    Header, Sidebar, Footer, Preloader
  },
  mounted() {
    this.loading = false;
  },
  methods: {
    toggleMenu() {
      this.menuIsOpen = !this.menuIsOpen;    
    },
  },
};
</script>

<style lang="scss">
@import "~materialize-css/dist/css/materialize";
@import "@/assets/scss/common.scss";
@import "@/assets/scss/media.scss";

</style>
