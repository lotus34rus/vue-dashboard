<template>
  <div class="sidebar" :class="{active: menuIsOpen}">
    <router-link to="/" class="sidebar__logo">
      <img src="img/md-dash.png" alt />
    </router-link>
    <ul>
      <li class="waves-effect waves-default">
        <router-link to="/" >
          <i class="material-icons">dashboard</i>Dashboard
        </router-link>
      </li>
    </ul>

    <ul>
      <li>
        <div class="subheader">THEME</div>
      </li>
      <li class="waves-effect waves-default">
        <router-link to="/colors">
          <i class="material-icons">invert_colors</i>Colors
        </router-link>
      </li>
    </ul>

    <ul>
      <li>
        <div class="subheader">COMPONENTS</div>
      </li>
      <li class="has-submenu">
        <ul class="collapsible collapsible-accordion">
          <li class="waves-effect waves-default">
            <a class="collapsible-header" tabindex="0">
              <span>
                <i class="material-icons">collections</i>Base
              </span>
              <i class="material-icons drop-icon">arrow_drop_down</i>
            </a>
            <div class="collapsible-body">
              <ul>
                <li>
                  <router-link to="/breadcrumbs">Breadcrumbs</router-link>
                </li>
                <li>
                  <router-link to="/collapses">Collapses</router-link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </li>

      <li class="waves-effect waves-default">
        <router-link to="/charts">
          <i class="material-icons">show_chart</i>Charts
        </router-link>
      </li>

      <li class="waves-effect waves-default">
        <router-link to="/forms">
          <i class="material-icons">apps</i>Forms
        </router-link>
      </li>
    </ul>

    <ul>
      <li>
        <div class="subheader">EXTRA</div>
      </li>
      <li class="waves-effect waves-default">
        <router-link to="/pages">
          <i class="material-icons">star</i>Pages
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["menuIsOpen"],

  data() {
    return {};
  },

  mounted() {
    var elems = document.querySelectorAll(".collapsible");
    var instances = M.Collapsible.init(elems, {
      inDuration: 0,
      outDuration: 0,
    });
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

  &__logo {
    display: block;
    text-align: center;
    height: 63.99px;
    width: 100%;
    background: rgba(0, 0, 21, 0.2);
    img {
      height: 100%;
    }
  }
  ul {
    li {
      padding: 13px 16px;
      width: 100%;
      a {
        display: flex;
        color: hsla(0, 0%, 100%, 0.8);
        align-items: center;
        &:hover {
          color: hsla(0, 0%, 100%, 1);
        }
        i {
          margin-right: 10px;
        }
      }
    }
    li.has-submenu {
      padding-top: 0;
      padding-bottom: 0;
    }
    .subheader {
      color: hsla(0, 0%, 100%, 0.6);
      font-size: 80%;
    }
  }
  .collapsible {
    margin: 0;
    border: 0;
    box-shadow: none;
    .active {
      .drop-icon {
        transform: rotate(180deg);
      }
    }
    & > li {
      padding: 0;
    }
    .collapsible-header {
      display: flex;
      justify-content: space-between;
      span {
        display: flex;
        align-items: center;
      }
    }
    .collapsible-header,
    .collapsible-body {
      background: none;
      border: 0;
      padding: 0;
      padding: 13px 0px;
    }
    .collapsible-body {
      li {
        padding-left: 40px;
      }
    }
  }
}
</style>

