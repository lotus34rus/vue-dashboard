<template>
    <div>
        <div class="row">
            <h3>{{user.name}}</h3>
        </div>
    </div>
</template>


<script>
import axios from 'axios'
export default {
    data() {
        return {
            user: null
        }
    },

    mounted() {
        axios
            .get("https://jsonplaceholder.typicode.com/users/"+this.$route.params.id)
            .then((response) => (this.user = response.data));
    },
}
</script>

