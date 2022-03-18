<template>
  <Navbar></Navbar>
  <router-link v-if="authenticated" to="/login" v-on:click="logout()" replace
    >Logout</router-link>
  <router-view @authenticated="setAuthenticated" />
</template>
<script>
import Navbar from "./components/Navbar";
export default {
  components: { Navbar },
  name: "App",
  data() {
    return {
      authenticated: false,
      mockAccount: {
        username: "nraboy",
        password: "password",
      },
    };
  },
  mounted() {
    if (!this.authenticated) {
      this.$router.replace({ name: "Login" });
    }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 600px;
  margin: 0 auto;
  color: #2c3e50;
}
</style>
