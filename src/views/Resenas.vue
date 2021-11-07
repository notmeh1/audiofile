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
          <v-col v-for="resena in $store.state.resenas.data" :key="resena.id">
            <CardResenas :value="resena" />
          </v-col>
        </v-col>
      </v-row>
      <v-row class="justify-center">
        <v-pagination v-model="page" :length="6" color="#4A2AA7"></v-pagination>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import FiltrosResenas from "../components/resenas/FiltrosResenas.vue";
import CardResenas from "../components/resenas/CardResenas.vue";
import Store from "../store";
export default {
  components: { FiltrosResenas, CardResenas },
  beforeRouteEnter(to, from, next) {
    Store.dispatch("resenas/traerTodasLasResenas");
    next();
  },
};
</script>

<style lang="scss">
.resenas {
  background-color: white;
  border-radius: 50px;
}
</style>
