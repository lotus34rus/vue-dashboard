<template>
  <nav class="white">
    <div class="nav-wrapper">
      <div class="left-side flex">
        <button type="button" class="hamburger" @click="$emit('clickOnMenuBtn')">
          <span></span>
        </button>
        <ul class="hide-on-med-and-down">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
        </ul>
      </div>

      <ul class="right hide-on-med-and-down">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
      </ul>
      <div class="col s12 dm_breadcrumb">
        <router-link to="/">Home</router-link>/
        <span>Analitic</span>
      </div>
    </div>
  </nav>
</template>



<script>
export default {};
</script>


<style lang="scss" scoped>
nav {
  position: sticky;
  left: 0;
  width: 0;
  height: auto;
  width: 100%;
}

.nav-wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  ul {
    a {
      color: rgba(0, 0, 21, 0.5);
    }
  }
  .dm_breadcrumb {
    width: 100%;
    border-top: 1px solid rgba(0, 0, 21, 0.2);
    padding-left: 17px;
    color: rgba(0, 0, 21, 0.5);
    a {
      color: rgba(0, 0, 21, 0.5);
      padding-right: 10px;
      &:hover{
          text-decoration: underline;
      }
    }
    span{
        padding-left: 10px;
    }
    .router-link-active {
      color: #321fdb;
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