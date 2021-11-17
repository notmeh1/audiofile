<template>
  <div>
    <v-container class="white rounded-simple" fluid>
      <v-row class="justify-center">
        <v-col cols="12" md="8">
          <h2 class="text-h4 secondary--text text-center font-weight-bold my-5">
            Busca una canción y agrega una reseña
          </h2>
          <v-form class="my-5" ref="formResena" @submit.prevent="crearResena">
            <v-text-field
              v-if="!isSelected"
              @input="$store.dispatch('spotify/fetchSongResult', searchInput)"
              class="rounded-lg"
              :value="formResena.songId"
              outlined
              append-icon="mdi-playlist-music"
              placeholder="Canción"
              color="secondary"
              v-model="searchInput"
              :rules="[required]"
              solo
              flat
            >
            </v-text-field>

            <v-card
              v-for="song in songResult"
              @click="selectSong(song)"
              :key="song.id"
              class="pointer rounded-md mb-5"
              color="cardBackground"
              flat
            >
              <v-row align="center">
                <v-col cols="1" align="center">
                  <v-img
                    class="rounded-md mx-2"
                    :src="song.album.images[0].url"
                    width="48px"
                    height="48px"
                    contain
                  />
                </v-col>
                <v-col cols="2">
                  <v-row>
                    <v-card-title class="px-0 pb-0">
                      {{ song.name }}
                    </v-card-title>
                  </v-row>
                  <v-row>
                    <p class="my-0 text-body-2">{{ song.artists[0].name }}</p>
                  </v-row>
                </v-col>
                <v-col cols="8"> </v-col>
                <v-col cols="1">
                  <v-btn
                    @click.stop="cleanSearch()"
                    v-if="isSelected"
                    color="error"
                    icon
                    ><v-icon>mdi-close-circle</v-icon></v-btn
                  >
                </v-col>
              </v-row>
            </v-card>

            <v-textarea
              class="rounded-lg"
              outlined
              append-icon="mdi-file-document-edit-outline"
              name="input-7-4"
              value="Reseña"
              placeholder="Reseña"
              color="secondary"
              v-model="formResena.resena"
              :rules="[required]"
            ></v-textarea>
            <p class="mb-0">¿Qué valoracion le pondrás a esta canción?</p>
            <v-input :value="formResena.valoracion" :rules="[required]">
              <v-rating
                v-model="formResena.valoracion"
                color="primary"
                empty-icon="mdi-star-outline"
                full-icon="mdi-star"
                half-icon="mdi-star-halffull"
                hover
                length="5"
                size="24"
              ></v-rating>
            </v-input>
            <v-btn class="secondary px-5 mt-5" type="submit" height="45px"
              ><span class="text-body-2 font-weight-bold"
                >Agregar reseña</span
              ></v-btn
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
import { mapState } from "vuex";

export default {
  data: () => ({
    searchInput: null,
    isSelected: false,
    formResena: {
      songId: "",
      resena: "",
      valoracion: null,
      comentarios: [],
    },
  }),
  computed: {
    ...mapState({
      songResult: (state) => state.spotify.songResult,
      userData: (state) => state.session.user
    }),
  },
  methods: {
    crearResena() {
      if (this.$refs.formResena.validate()) {
        Firebase.firestore()
          .collection("foros")
          .add(this.formResena)
          .then(() => {
            this.$store.dispatch("spotify/cleanSearch");
            this.$router.push("/resenas");
          })
          .catch(() => {});
      }
    },
    required(value) {
      return !!value || "Este campo es obligatorio";
    },
    async selectSong(song) {
      console.log(song);
      this.isSelected = true;
      await store.dispatch("spotify/filterSongId", song.id);
      const form = this.formResena;
      form.like = 0;
      form.dislike = 0;
      form.uid = this.userData.id
      form.songId = song.id;
      form.songName = song.name;
      form.songImg = song.album.images[0].url;
      form.songArtistOne = song.artists[0].name;
      form.album = song.album.name;
      form.previewUrl = song.preview_url;
      console.log(this.formResena);
    },
    async cleanSearch() {
      this.searchInput = null;
      await store.dispatch("spotify/cleanSearch");
      this.isSelected = false;
    },
  },
  mounted() {
    store.dispatch("spotify/cleanSearch");
  },
};
</script>

<style lang="scss">
.pointer {
  cursor: pointer;
}
</style>
