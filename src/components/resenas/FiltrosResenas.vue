.
<template>
  <div>
    <v-container>
      <v-row class="filtros">
        <v-col class="filtros__inputs">
          <p class="filtros__title">Filtrar:</p>
          <v-text-field
            label="Nombre canción"
            outlined
            append-icon="mdi-playlist-music"
            color="#4A2AA7"
          ></v-text-field>
          <v-text-field
            label="Album"
            outlined
            append-icon="mdi-music-box-outline"
            color="#4A2AA7"
          ></v-text-field>
          <v-text-field
            label="Genero"
            outlined
            append-icon="mdi-music-box-multiple-outline"
            color="#4A2AA7"
          ></v-text-field>
        </v-col>
        <v-col class="text-center">
          <v-btn class="filtros__btn mb-10" color="#4A2AA7"
            ><v-icon>mdi-plus-circle-outline</v-icon> Agregar Reseña</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.filtros {
  background-color: #f6faff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  &__title {
    text-align: center;
    color: #4a2aa7;
    font-weight: 900;
  }
  // &__inputs {
  //   display: flex;
  //   flex-direction: row;
  // }
}
.v-btn__content {
  color: white;
}
</style>
