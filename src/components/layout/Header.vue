<template>
  <nav class="white">
    <div class="nav-wrapper">
      <div class="left-side flex">
        <button type="button" class="hamburger" @click="$emit('click-on-menu-btn')">
          <span></span>
        </button>
        <ul class="hide-on-med-and-down">
          <li>
            <router-link to="/">Dashboard</router-link>
          </li>
          <li>
            <router-link to="/about">Users</router-link>
          </li>
        </ul>
      </div>

  
      <HeaderIcons />
      <Breadcrumbs />
    </div>
  </nav>
</template>



<script>
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import HeaderIcons from "@/components/layout/HeaderIcons";


export default {
  name: "Header",
  components: {
    Breadcrumbs, HeaderIcons
  },
};
</script>


<style lang="scss" scoped>
nav {
  position: sticky;
  left: 0;
  top: 0;
  width: 0;
  height: auto;
  width: 100%;
  z-index: 99;
}

.nav-wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  ul {
    height: 56px;
    a, i {
      color: rgba(0, 0, 21, 0.5);
    }
  }

}
.hamburger {
  min-width: 50px;
  font-size: 1.09375rem;
  background-color: transparent;
  border: 0;
  border-radius: 0.25rem;
  color: rgba(0, 0, 21, 0.5);
  border-color: rgba(0, 0, 21, 0.1);
  cursor: pointer;
  span {
    display: block;
    height: 1.36719rem;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 100% 100%;
    background-image: url(data:image/svg+xml;charset=utf8;base64,PHN2ZyB2aWV3Qm94PScwIDAgMzAgMzAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggc3Ryb2tlPSdyZ2JhKDAsMCwyMSwwLjUpJyBzdHJva2Utd2lkdGg9JzIuMjUnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBkPSdNNCA3aDIyTTQgMTVoMjJNNCAyM2gyMicvPjwvc3ZnPg==);
  }
}
</style>