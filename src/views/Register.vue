<template>
  <div>
    <v-container class="home">
      <v-row justify="center">
        <v-col align="center">
          <h1>Register view</h1>
        </v-col>
      </v-row>
    </v-container>
    <RegisterForm />
  </div>
</template>

<script>
import RegisterForm from "../components/login/RegisterForm.vue";
export default {
  components: { RegisterForm },
};
</script>

<style></style>
