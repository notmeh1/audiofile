<template>
  <v-container class="rounded-simple px-5 white" fluid>
    <v-row justify="end">
      <v-btn
        :to="{ name: 'Reseñas' }"
        class="rounded-lg mx-3 px-8 my-5"
        color="secondary"
        height="50px"
        depressed
        exact
        ><v-icon class="pr-2">mdi-location-exit</v-icon
        ><span class="font-weight-regular text-body-2">Volver</span></v-btn
      >
      <v-btn
        class="rounded-lg mx-3 px-8 my-5"
        color="secondary"
        height="50px"
        depressed
        exact
        @click="borrarResena()"
        v-if="isAdmin"
        ><v-icon>mdi-trash-can-outline</v-icon>Eliminar</v-btn
      >
      <v-btn
        class="rounded-lg mx-3 px-8 my-5"
        color="secondary"
        height="50px"
        depressed
        exact
        @click="editarResena()"
        v-if="isAdmin"
        ><v-icon>mdi-pencil-outline</v-icon>Editar</v-btn
      >
    </v-row>
    <v-row>
      <v-col lg="3">
        <v-card
          v-if="getData"
          class="secondary--text rounded-simple px-3 mb-5"
          color="cardBackground"
          flat
        >
          <v-row class="py-4" justify="center">
            <v-img
              class=""
              :src="getData.songImg"
              max-width="200px"
              max-height="200px"
              contain
            />
          </v-row>
          <h2 class="mx-3 py-3 font-weight-black">{{ getData.songName }}</h2>
          <div class="mb-10">
            <p class="px-3 my-2">
              <v-icon class="mr-2" color="secondary">mdi-account-music</v-icon
              >{{ getData.songArtistOne }}
            </p>
            <p class="px-3 my-2">
              <v-icon class="mr-2" color="secondary">mdi-album</v-icon
              >{{ getData.album }}
            </p>
          </div>
          <v-card-actions class="justify-center">
            <v-card-text class="px-0 pt-0 pb-10">
              <v-slider
                @change="volume()"
                min="0"
                max="1"
                step="0.1"
                v-model="previewVolume"
              >
                <v-icon color="secondary" slot="prepend"
                  >mdi-volume-high</v-icon
                >
              </v-slider>
            </v-card-text>
            <v-btn
              class="mt-15"
              @click.prevent="isPlaying ? pause() : play()"
              color="secondary"
              fab
              large
              absolute
              depressed
              ><v-icon v-if="!isPlaying" large>mdi-play</v-icon
              ><v-icon v-if="isPlaying" large>mdi-pause</v-icon></v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col class="pt-0" lg="9">
        <v-card
          class="secondary--text rounded-simple px-3"
          color="cardBackground"
          height="95%"
          flat
        >
          <v-row class="mx-1 mt-1" align="center">
            <v-img
              class="rounded-circle mt-2 mr-2"
              src="../assets/profileimg.png"
              max-width="6%"
              width="48px"
              height="48px"
              contain
            />
            <div>
              <p class="mb-3 mt-1">Nombre de usuario</p>
              <v-row class="ml-1">
                <v-rating
                  class="mt-0"
                  v-model="getData.valoracion"
                  color="secondary"
                  empty-icon="mdi-star-outline"
                  full-icon="mdi-star"
                  half-icon="mdi-star-halffull"
                  hover
                  length="5"
                  size="16"
                  readonly
                  dense
                ></v-rating>
                <p class="ml-2 mt-1 mb-1 text-subtitle-2">
                  ({{ getData.valoracion }})
                </p>
              </v-row>
            </div>
          </v-row>
          <v-col>
            <v-card-text class="mx-3 text--text font-light">{{
              getData.resena
            }}</v-card-text>
          </v-col>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col lg="3" v-if="!$vuetify.breakpoint.mdAndDown"></v-col>
      <v-col lg="9" md="12">
        <v-card
          class="secondary--text rounded-simple"
          color="cardBackground"
          flat
        >
          <h2 class="mx-5 pt-2 font-weight-black">Comentarios</h2>
          <div class="d-flex my-3 pb-3">
            <v-img
              class="rounded-circle mx-auto"
              src="../assets/profileimg.png"
              max-width="6%"
              width="48px"
              height="48px"
              contain
            />

            <v-textarea
              v-model="userData.comentario"
              class="rounded-lg mx-4"
              width="87%"
              label="Escribir reseña"
              auto-grow
              solo
            >
            </v-textarea>
            <v-btn color="secondary" @click="saveComment()">Enviar</v-btn>
          </div>
          <template v-if="getData">
            <div
              v-for="item in getData.comentarios"
              :key="item.comentario"
              class="d-flex my-3 pb-3"
            >
              <div class="ml-3">
                <v-img
                  class="rounded-lg mx-auto border"
                  src="../assets/profileimg.png"
                  width="48px"
                  height="48px"
                  contain
                />
                <p class="text-caption mx-auto">Nombre de usuario</p>
              </div>
              <v-card class="rounded-simple mx-auto" width="87%" flat>
                <v-card-text class="secondary--text"
                  >{{ item
                  }}<!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                donec integer diam nulla non adipiscing vitae sit ultrices.
                Gravida molestie bibendum ullamcorper amet. Vel vel nulla libero
                magna enim convallis placerat. Gravida parturient gravida
                venenatis, egestas id euismod faucibus elementum
                dictum. --></v-card-text
                >
              </v-card>
            </div>
          </template>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Firebase from "firebase";
import { mapGetters } from "vuex";
export default {
  data: () => ({
    userData: {
      userId: "",
      comentario: "",
    },
    isPlaying: false,
    previewUrl: null,
    isMuted: false,
    previewVolume: 0.5,
  }),
  computed: {
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
    ...mapGetters({
      isAdmin: "session/isAdmin",
      isUser: "session/isAdmin",
    }),
  },
  methods: {
    saveComment() {
      const jaja = this.userData;
      Firebase.firestore().collection("foros").doc(this.getId).set(
        {
          comentarios: { jaja },
        },
        { merge: true }
      );
    },
    play() {
      this.isPlaying = true;
      this.previewUrl.volume = this.previewVolume
      this.previewUrl.play();
      this.previewUrl.onended = () => {
        this.isPlaying = false
      }
    },
    volume() {
      this.previewUrl.volume = this.previewVolume;
    },
    pause() {
      this.isPlaying = false;
      this.previewUrl.pause();
    },
    borrarResena() {
      Firebase.firestore()
        .collection("foros")
        .doc(this.getId)
        .delete()
        .then(() => {
          this.$store.dispatch("resenas/traerTodasLasResenas");
        });
      this.$router.push("/resenas");
    },
    editarResena() {
      this.$router.push(`/editarResena/${this.getId}`);
    },
  },
  mounted() {
    this.previewUrl = new Audio(this.getData.previewUrl);
    console.log(this.previewUrl);
  },
};
</script>
