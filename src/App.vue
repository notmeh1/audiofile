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
//import Player from "./components/resenas/Player.vue";

export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    Navbar,
    Footer,
    //Player,
  },
  methods: {
    
    },
  mounted() {
    this.$store.dispatch("session/subscribeToAuthStateChange");
    this.$store.dispatch("spotifyAuth/fetchProfileInformation");
    this.$store.dispatch("foros/getForoList");
    if (window.location.hash.length > 0) {
      this.$store.dispatch("spotifyAuth/handleRedirect")
    }
  },
};
</script>

<style lang="scss">
@import "./sass/main.scss";
</style>
