<template>
  <div class="mt-5 ">
    <router-link :to="{ name: 'createPost' }" class="btn btn-dark"
      >Create Post</router-link
    >
  </div>

  <div v-if="loading" class="spinner-grow spinner-grow-sm mt-5" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>

  <div v-else class="col-md-3 mt-1" v-for="post in posts" :key="post.id">
    <div class="card mt-5">
      <div class="card-header">
        <router-link :to="{ name: 'postId', params: { id: post.id } }">
          {{ post.title }}
        </router-link>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Body : {{ post.body }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
// import { useRoute } from "vue-router";

export default {
  setup() {
    const posts = ref([]);
    const loading = ref(true);
    // const route = useRoute();

    function getPosts() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(function (response) {
          // handle success
          console.log(response.data);
          posts.value = response.data;
          loading.value = false;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    getPosts();
    return { posts, loading };
  },
};
</script>

<style></style>
