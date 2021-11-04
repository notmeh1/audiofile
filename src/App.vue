<template>
  <v-app>
    <div class="tertiary">
      <Navbar />
      <v-main>
        <v-container fluid>
          <router-view />
        </v-container>
      </v-main>
      <Footer />
    </div>
  </v-app>
</template>

<script>
import Navbar from "./components/navbar.vue";
import Footer from "./components/footer.vue";

export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    Navbar,
    Footer,
  },
  mounted() {
    this.$store.dispatch("spotify/fetchId")
    this.$store.dispatch("foros/getForoList")
  },
};
</script>

<style lang="scss">
@import "./sass/main.scss";
</style>
