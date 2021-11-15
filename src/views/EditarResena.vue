<template>
  <div>
    <v-container class="white rounded-simple" fluid>
      <v-row class="justify-center">
        <v-col cols="12" md="8">
          <h2 class="text-h4 secondary--text text-center font-weight-bold my-5">
            Editar Reseña
          </h2>
          <v-form
            class="my-5"
            ref="formEditarResena"
            @submit.prevent="editarResena()"
          >
            <v-card
              class="rounded-md mb-5"
              color="cardBackground"
              flat
              disabled
            >
              <v-row align="center">
                <v-col cols="2" align="center">
                  <v-img
                    class="rounded-md mx-2"
                    :src="getData.songImg"
                    width="64px"
                    height="64px"
                    contain
                  />
                </v-col>
                <v-col cols="10">
                  <v-row>
                    <v-card-title class="px-0 py-0">
                      {{ getData.songName }}
                    </v-card-title>
                  </v-row>
                  <v-row>
                    <p class="my-0 text-body-2">{{ getData.songArtistOne }}</p>
                  </v-row>
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
                >Guardar cambios</span
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
