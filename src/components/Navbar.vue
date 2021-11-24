<template>
  <nav class="main-nav">
      <router-link :to="{name:'Home'}">Posts</router-link>
      <router-link :to="{name:'AddPost'}">Add Post</router-link>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped lang="css" src="@/assets/navbar.css"></style>