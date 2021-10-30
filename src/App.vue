<template>
  <v-app>
    <Navbar/>
    <v-main>
      <v-container fluid>
      <router-view />
      </v-container>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Navbar from "./components/navbar.vue"
import Footer from "./components/footer.vue"

export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    Navbar,
    Footer,
  }
};
</script>

<style lang="scss">
@import "./sass/main.scss";
</style>
