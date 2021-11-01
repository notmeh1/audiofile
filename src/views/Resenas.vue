.
<template>
  <div>
    <v-container class="home">
      <v-row justify="center">
        <v-col align="center">
          <h1>Reseñas view</h1>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="resenas">
      <v-row>
        <v-col>
          <FiltrosResenas />
          <CardResenas />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import FiltrosResenas from "../components/resenas/FiltrosResenas.vue";
import CardResenas from "../components/resenas/CardResenas.vue";
export default {
  components: { FiltrosResenas, CardResenas },
};
</script>

<style lang="scss">
.resenas {
  background-color: white;
  border-radius: 50px;
}
</style>
