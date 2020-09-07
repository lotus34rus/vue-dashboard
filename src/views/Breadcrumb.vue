<template>
  <div class="row">
    <div class="s12">
      <div class="card">
        <div class="card-header">
          <h5> Breadcrumbs</h5>
        </div>
        <p>Breadcrumbs are a good way to display your current location. This is usually used when you have multiple layers of content.</p>
        <div class="col s12 dm_breadcrumb">
          <router-link to="/">Home</router-link>/
          <span>{{$route.name || 'Page'}}</span>
        </div>

        <div class="col s12 dm_breadcrumb">
          <router-link class="router-link-active" to="/colors">To colors</router-link>/
          <a class="router-link-active" href = "https://google.com">To Google</a>/
          <span>{{$route.name || 'Page'}}</span>
        </div>
      </div>
    </div>
  </div>
</template>