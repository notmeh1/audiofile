.
<template>
  <div>
    <v-container>
      <v-card class="my-5" flat>
        <v-row class="d-flex">
          <p class="mt-4 secondary--text font-weight-bold">Filtrar:</p>
          <v-text-field
            class="mx-2 rounded-simple"
            placeholder="Canción"
            outlined
            prepend-inner-icon="mdi-playlist-music"
            color="secondary"
            solo
            flat
          ></v-text-field>
          <v-text-field
            class="mx-2 rounded-simple"
            placeholder="Album"
            outlined
            prepend-inner-icon="mdi-album"
            color="secondary"
            solo
            flat
          ></v-text-field>
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
