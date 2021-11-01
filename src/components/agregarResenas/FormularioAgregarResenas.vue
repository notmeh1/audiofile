.
<template>
  <div>
    <v-container>
      <v-row class="agregarResenas">
        <v-col>
          <h2 class="agregarResenas__title my-5">
            Busca una canción y agrega una reseña
          </h2>
          <v-form class="my-5">
            <v-text-field
              outlined
              append-icon="mdi-playlist-music"
              label="Nombre canción"
              color="#4a2aa7"
            ></v-text-field>
            <v-textarea
              outlined
              append-icon="mdi-file-document-edit-outline"
              name="input-7-4"
              value="Reseña"
              color="#4a2aa7"
            ></v-textarea>
            <v-btn class="agregarResenas__btn" color="#4a2aa7"
              ><v-icon>mdi-pencil</v-icon>Reseñar</v-btn
            >
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.agregarResenas {
  background-color: #f6faff;
  border-radius: 20px;
  &__title {
    color: #4a2aa7;
    text-align: center;
    font-size: 30px;
  }
  &__btn {
    color: white;
  }
}
</style>
