<template>
  <div id="login">
    <h1>Login</h1>
    <input
      type="text"
      name="username"
      v-model="input.username"
      placeholder="Username"
      @mousedown="hideNameError()"
    />
    <p v-if="input.nameRequired == true" class="error-message">
      UserName is Required
    </p>
    <input
      type="password"
      name="password"
      v-model="input.password"
      placeholder="Password"
      @mousedown="hidePasswordError()"
    />
    <p v-if="input.passwordRequired == true" class="error-message">
      Password is Required
    </p>
    <button type="button" v-on:click="login()">Login</button>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      input: {
        username: "",
        password: "",
        nameRequired: false,
        passwordRequired: false,
      },
    };
  },
  methods: {
    hideNameError() {
      this.input.nameRequired = false;
    },
    hidePasswordError() {
      this.input.passwordRequired = false;
    },
    login() {
      if (this.input.username != "" && this.input.password != "") {
        // if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
        this.$emit("authenticated", true);
        this.$router.replace({ name: "Home" });
        // } else {
        //     console.log("The username and / or password is incorrect");
        // }
      } else if (this.input.username == "" && this.input.password != "") {
        this.input.nameRequired = true;
      } else if (this.input.username != "" && this.input.password == "") {
        this.input.passwordRequired = true;
      } else {
        this.input.nameRequired = true;
        this.input.passwordRequired = true;
      }
    },
  },
};
</script>

<style scoped lang="css" src="@/assets/Login.css"></style>
