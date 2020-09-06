<template>
  <div class="about">
    <div class="row">
      <div class="col s12">
        <div class="card">
          <div class="card-header">User table</div>
          <table class="usertable highlight">
            <thead>
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="user in users" :key="user.id"
              @click='getUserInfoPage(user.id)'
              >
                <td>{{user.name}}</td>
                <td>{{user.username}}</td>
                <td>{{user.email}}</td>
              </tr>              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios/dist/axios.min";

export default {
  data() {
    return {
      users: null,
    };
  },
  methods: {
    getUserInfoPage(id){
      this.$router.push('users/'+id)
    }
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => (this.users = response.data));
  },
};
</script>


<style lang="scss" scoped>
.usertable {
  th {
    font-weight: 600;
    font-size: 1.2rem;
  }
  td:first-child {
    font-weight: 600;
  }
  tr {
    &:hover {
      cursor: pointer;
    }
  }
}
</style>