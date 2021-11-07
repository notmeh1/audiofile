.
<template>
  <div>
    <v-container fluid>
      <v-row class="agregarResenas justify-center">
        <v-col cols="12" md="8">
          <h2 class="agregarResenas__title my-5">
            Busca una canción y agrega una reseña
          </h2>
          <v-form class="my-5">
            <v-text-field
            v-model="searchInput"
            @input="searchByName()"
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
import Axios from "axios";
export default {
  data: () => ({
    searchInput: null,
  }),
  methods: {
    searchByName() {
      Axios.get(`https://api.spotify.com/v1/search?query=${encodeURIComponent(
        this.searchInput
      )}&type=album,playlist,artist`).then(result => {
        console.log(result)
      })
    
    }
  }
};
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
