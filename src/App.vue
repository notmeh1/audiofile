<template>
  <v-app>
    <Navbar/>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/navbar.vue"
export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    Navbar,
  }
};
</script>

<style lang="scss">
@import "./sass/main.scss";
</style>
