<template>
  <div>
    <div class="row">
      <div class="card col s8">
        <div class="card-header">
          <h3>{{user.name}}</h3>
        </div>

        <p>E-mail: {{user.email}}</p>
        <p>Username: {{user.username}}</p>
        <p>Phone: {{user.phone}}</p>
        <p>Website: {{user.website}}</p>

        <div class="card-footer">
          <a class="waves-effect waves-light btn" @click.prevent="$router.back();">Back</a>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
      user: null,
    };
  },

  mounted() {
    axios
      .get(
        "https://jsonplaceholder.typicode.com/users/" + this.$route.params.id
      )
      .then((response) => (this.user = response.data));
  },
};
</script>

