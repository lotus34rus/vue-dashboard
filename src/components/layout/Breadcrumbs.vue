<template>
  <div class="col s12 dm_breadcrumb">
    <router-link to="/">Home</router-link>/
    <span>{{$route.name || 'Page'}}</span>
  </div>
</template>


<style lang="scss" scoped>
.dm_breadcrumb {
  width: 100%;
  border-top: 1px solid rgba(0, 0, 21, 0.2);
  padding-left: 17px;
  color: rgba(0, 0, 21, 0.5);
  line-height: 40px;
  a {
    color: rgba(0, 0, 21, 0.5);
    padding-right: 10px;
    &:hover {
      text-decoration: underline;
    }
  }
  span {
    padding-left: 10px;
  }
  .router-link-active {
    color: #321fdb;
  }
}
</style>