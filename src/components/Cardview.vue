<template>
  <div class="card mt-5">
    <img
      src="../assets/images/profile.png"
      class="card-img-top w-25 p-3"
      alt="..."
    />
    <div class="card-header">
      <router-link :to="{ name: 'userId', params: { id: user.id } }">{{
        user.name
      }}</router-link>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">User name : {{ user.username }}</li>
      <li class="list-group-item">Email : {{ user.email }}</li>
      <li class="list-group-item">Phone : {{ user.phone }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    user: Object,
  },
};
</script>

<style></style>
