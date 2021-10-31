<template>
  <v-container>
    <v-row justify="center">
      <v-col align="center">
        <h1>Home view</h1>
      </v-col>
      <Hero />
    </v-row>
  </v-container>
</template>

<script>
import Hero from "../components/home/Hero.vue";
export default {
  name: "Home",
  components: { Hero },
};
</script>
<style lang="scss">
* {
  font-family: "Roboto", sans-serif;
}
</style>
