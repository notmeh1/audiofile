<template>
  <div>
    <v-container class="home">
      <v-row justify="center">
        <Hero class="mb-5" />
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col>
          <CarruselResenas />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <CarruselPlaylist />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Hero from "../components/home/Hero.vue";
import CarruselResenas from "../components/home/CarruselResenas.vue";
import CarruselPlaylist from "../components/home/CarruselPlaylist.vue";
export default {
  name: "Home",
  components: { Hero, CarruselResenas, CarruselPlaylist },
};
</script>
<style lang="scss">
* {
  font-family: "Roboto", sans-serif;
}
.home {
  background-color: #e7edff;
}
</style>
