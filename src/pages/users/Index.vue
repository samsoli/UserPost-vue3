<template>
  
      <div
        v-if="loading"
        class="spinner-grow spinner-grow-sm mt-5"
        role="status"
      >
        <span class="visually-hidden">Loading...</span>
      </div>

      <div v-else class="col-md-4" v-for="user in users" :key="user.id">
        <UserCardView :user="user" />
      </div>
   
    <!-- <router-view></router-view> -->
 
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import UserCardView from "@/components/Cardview.vue";

export default {
  components: {
    UserCardView,
  },
  setup() {
    const users = ref([]);
    const loading = ref(true);

    function getUsers() {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
          // handle success
          console.log(response.data);
          users.value = response.data;
          loading.value = false;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    getUsers();
    return { users, loading };
  },
};
</script>

<style></style>
