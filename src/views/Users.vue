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
              <tr v-for="user in usersPage" :key="user.id" @click="getUserInfoPage(user.id)">
                <td>{{user.name}}</td>
                <td>{{user.username}}</td>
                <td>{{user.email}}</td>
              </tr>
            </tbody>
          </table>

          <ul class="pagination">
         
            <li
              v-for="page in pageCount"
              :key="page"
              :class="{active: page===currentPage}"
              @click="goToPage(page)"
            >
              <a href="#!">{{page}}</a>
            </li>

            <li class="waves-effect" @click="goToPage(currentPage+1)">
              <a href="#!">
                <i class="material-icons">chevron_right</i>
              </a>
            </li>
          </ul>
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
      usersPage: null,
      currentPage: 1,
      perPage: 5,
      pageCount: 0,
    };
  },
  methods: {
    getUserInfoPage(id) {
      this.$router.push("users/" + id);
    },

    goToPage(page) {
      if (page >= 1 && page <= this.pageCount) {
        this.usersPage = this.users.slice(
          this.perPage * (this.currentPage - 1),
          this.perPage * (this.currentPage - 1) + this.perPage
        );
        this.currentPage = page;
      }
    },
  },
  mounted() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      this.users = response.data;
      this.pageCount = Math.ceil(this.users.length / this.perPage);
      this.usersPage = this.users.slice(0, this.perPage);
    });
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