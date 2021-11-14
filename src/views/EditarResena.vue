<template>
  <div>
    <v-container fluid>
      <v-row class="agregarResenas justify-center">
        <v-col cols="12" md="8">
          <h2 class="agregarResenas__title my-5">
            Busca una canción y agrega una reseña
          </h2>
          <v-form
            class="my-5"
            ref="formEditarResena"
            @submit.prevent="editarResena()"
          >
            <v-text-field
              @input="$store.dispatch('spotify/fetchSongResult', searchInput)"
              :value="formResena.songId"
              outlined
              append-icon="mdi-playlist-music"
              label="Nombre canción"
              color="#4a2aa7"
              v-model="searchInput"
              :rules="[required]"
            >
            </v-text-field>

            <v-card
              @click="selectSong(song)"
              class="pointer d-flex my-1"
              v-for="song in songResult"
              :key="song.id"
              absolute
            >
              <v-img
                class="mr-auto my-1"
                :src="song.album.images[0].url"
                max-width="10%"
                width="64px"
                height="64px"
                contain
              />
              <v-card-title
                >{{ song.name }} - {{ song.artists[0].name }}</v-card-title
              >
            </v-card>
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
              ><v-icon>mdi-pencil</v-icon>Editar Reseña</v-btn
            >
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Firebase from "firebase";
import store from "../store/index";
import { mapState } from "vuex";

export default {
  beforeRouteEnter(to, from, next) {
    Firebase.firestore()
      .collection("foros")
      .doc(to.params.id)
      .get()
      .then((document) => {
        next((vm) => {
          vm.formResena = { id: document.id, ...document.data() };
        });
      });
  },
  data: () => ({
    searchInput: null,
    formResena: {
      songId: "",
      resena: "",
      valoracion: null,
      comentarios: {},
    },
  }),
  computed: {
    ...mapState({
      songResult: (state) => state.spotify.songResult,
    }),
    ...mapState({
      foroList: (state) => state.foroList,
    }),
    getId() {
      return this.$route.params.id;
    },
    getData() {
      if (this.$store.state.foros.foroList) {
        return this.$store.state.foros.foroList.find(
          (foro) => foro.id === this.getId
        );
      } else {
        return false;
      }
    },
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
    selectSong(song) {
      console.log(song);
      store.dispatch("spotify/filterSongId", song.id);
      const form = this.formResena;
      form.songId = song.id;
      form.songName = song.name;
      form.songImg = song.album.images[0].url;
      form.songArtistOne = song.artists[0].name;
      form.album = song.album.name;
      console.log(this.formResena);
    },
    editarResena() {
      if (this.$refs.formEditarResena.validate()) {
        Firebase.firestore()
          .collection("foros")
          .doc(this.getId)
          .update(this.formResena)
          .then(() => {
            this.$store.dispatch("resenas/traerTodasLasResenas");
          });
        this.$router.push("/resenas");
      }
    },
  },
};
</script>

<style></style>
