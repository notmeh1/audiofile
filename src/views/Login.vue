.
<template>
  <div>
    <v-container class="home">
      <v-row justify="center">
        <v-col align="center">
          <h1>Login view</h1>
        </v-col>
      </v-row>
    </v-container>
    <Login />
  </div>
</template>

<script>
import Login from "../components/login/LoginForm.vue";
export default {
  components: { Login },
};
</script>

<style></style>
