<template>
  <div class="card mb-3">
    <img
      src="../assets/images/web-development.jpg"
      class="img-fluid h-50 d-inline-block "
      alt="..."
    />
    <div class="card-body">
      <h2 class="card-title">About Us</h2>
      <p class="card-text">
        kids are born digital nowadays! With an early exposure to hi-tech
        gadgets and internet, it is but natural that kids attune themselves
        comfortably to the digital mode of learning. But on the other hand, this
        has also created a new line of duty for parents — equipping kids with
        relevant future ready skills that may give them an edge in this fast
        changing competitive world.
      </p>
      <p class="card-text">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
        <router-link class="btn btn-dark float-end" :to="{ name: 'users' }"
          >Users</router-link>
          <router-link class="btn btn-light me-3 float-end" :to="{ name: 'posts' }"
          >Posts</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
