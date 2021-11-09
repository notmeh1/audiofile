.
<template>
  <div>
    <v-container fluid>
      <v-row class="agregarResenas justify-center">
        <v-col cols="12" md="8">
          <h2 class="agregarResenas__title my-5">
            Busca una canción y agrega una reseña
          </h2>
          <v-form class="my-5" ref="formResena" @submit.prevent="crearResena">
            <v-text-field
              @input="searchByName()"
              :value="formResena.songId"
              outlined
              append-icon="mdi-playlist-music"
              label="Nombre canción"
              color="#4a2aa7"
              v-model="searchInput"
              :rules="[required]"
            >
            </v-text-field>

              <v-card @click="selectSong(song.id)" class="pointer d-flex my-1" v-for="song in songResult" :key="song.id" absolute>
              
              <v-img
              class="mr-auto my-1"
              :src="song.album.images[0].url"
              max-width="10%"
              width="64px"
              height="64px"
              contain
            />
                <v-card-title>{{song.name}} - {{song.artists[0].name}}</v-card-title>
              </v-card>
            
            <v-textarea
              outlined
              append-icon="mdi-file-document-edit-outline"
              name="input-7-4"
              value="Reseña"
              label="Reseña"
              color="#4a2aa7"
              v-model="formResena.resena"
              :rules="[required]"
            ></v-textarea>
            <v-btn class="agregarResenas__btn" color="#4a2aa7" type="submit"
              ><v-icon>mdi-pencil</v-icon>Reseñar</v-btn
            >
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Firebase from "firebase";
import store from "../../store/index";
import {mapState} from "vuex";

export default {
  data: () => ({
    searchInput: null,
    formResena: {
      songId: "",
      resena: "",
    },
  }),
  computed: {
    ...mapState({
      songResult: (state) => state.spotify.songResult
    })
  },
  methods: {
    crearResena() {
      if (this.$refs.formResena.validate()) {
        Firebase.firestore()
          .collection("foros")
          .add(this.formResena)
          .then(() => {
            this.$router.push("/resenas");
          })
          .catch(() => {});
      }
    },
    required(value) {
      return !!value || "Este campo es obligatorio";
    },
    searchByName() {
      const ACCESS_TOKEN = localStorage.getItem("accessToken");
      const fetchOptions = {
        method: "GET",
        headers: new Headers({
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        }),
      };
      fetch(
        `https://api.spotify.com/v1/search?q=track:"${encodeURIComponent(
          this.searchInput
        )}"&type=track&limit=7`,
        fetchOptions
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          const resultList = json.tracks.items
          console.log(resultList)
          store.dispatch('spotify/storeSongResult', resultList)
          return resultList
        })
        //.catch(function (error) {
        //  console.log(error);
        //});
    },
    selectSong(songId) {
      this.formResena.songId = songId
      store.dispatch('spotify/filterSongId', songId)
    }
  },
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
.pointer {
  cursor: pointer
}
</style>
