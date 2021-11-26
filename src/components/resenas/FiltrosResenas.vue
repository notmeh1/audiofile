.
<template>
  <div>
    <v-container>
      <v-card class="my-2" flat>
        <p class="text-h4 text-center mb-5 secondary--text font-weight-bold">Busca alguna reseña</p>
        <v-row class="d-flex">
          <v-text-field
          @input="$store.dispatch('foros/filterInput', songInput)"
            v-model="songInput"
            class="mx-2 mt-5 rounded-simple"
            placeholder="Busca por canción o album"
            outlined
            color="secondary"
            solo
            flat
          >
          <template slot="prepend-inner">
            <v-icon color="primary">mdi-playlist-music</v-icon>
          </template>
          </v-text-field>
          <!-- spotify api no da info sobre generos en musica-->
          <!--
          <v-text-field
            label="Genero"
            outlined
            append-icon="mdi-music-box-multiple-outline"
            color="#4A2AA7"
            class="mx-2 filtros__border"
          ></v-text-field>
          --->
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    songInput: null,
  }),
};
</script>

<style lang="scss">
</style>
