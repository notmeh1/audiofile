<template>
  <div>
    <v-container class="home">
      <v-row justify="center">
        <v-col align="center">
          <h1>Home view</h1>
        </v-col>
        <Hero class="mb-5" />
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col>
          <CarruselResenas />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Hero from "../components/home/Hero.vue";
import CarruselResenas from "../components/home/CarruselResenas.vue";
export default {
  name: "Home",
  components: { Hero, CarruselResenas },
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
