<template>
  <v-container class="rounded-simple px-5 white" fluid>
    <v-row justify="end">
      <div v-if="isLogged">
      <v-btn
        class="rounded-lg mx-3 px-8 my-5"
        color="error"
        height="50px"
        depressed
        exact
        @click="borrarResena()"
        v-if="isAdmin || isCreator"
        ><v-icon>mdi-trash-can-outline</v-icon>Eliminar</v-btn
      >
      <v-btn
        class="white--text rounded-lg mx-3 px-8 my-5"
        color="blue"
        height="50px"
        depressed
        exact
        @click="editarResena()"
        v-if="isAdmin || isCreator"
        ><v-icon>mdi-pencil-outline</v-icon>Editar</v-btn
      >
      </div>
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
    </v-row>
    <v-row>
      <v-col lg="3" sm="12">
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
          <v-row>
            <h2 class="ml-6 py-3 font-weight-black">{{ getData.songName }}</h2>
            <v-spacer></v-spacer>
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  @click="openSong()"
                  class="mr-5"
                  v-bind="attrs"
                  v-on="on"
                  icon
                  ><v-icon color="secondary">mdi-launch</v-icon></v-btn
                >
              </template>
              <span>Abrir canción en Spotify</span>
            </v-tooltip>
          </v-row>
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
          <v-card-actions v-if="getData.previewUrl" class="justify-center">
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
      <v-col class="pt-0" lg="9" sm="12">
        <v-card
          class="secondary--text rounded-simple px-3"
          color="cardBackground"
          height="95%"
          flat
        >
          <v-row v-if="creatorData" class="mx-1 mt-1" align="center">
            <v-avatar class="mt-2">
              <v-img :src="creatorData.imgURL" width="48px" height="48px" />
            </v-avatar>
            <div class="ml-2">
              <p class="mb-3 mt-1">{{ creatorData.name }}</p>
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
            <v-row v-if="isLogged" justify="end">
              <v-card class="rounded-simple d-flex py-2 mr-5 px-1 mt-1" flat>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      @click.prevent="addLike()"
                      icon
                      :color="disableLike ? 'blue' : ''"
                      v-bind="attrs"
                      v-on="on"
                      ><v-icon>mdi-thumb-up</v-icon></v-btn
                    >
                  </template>
                  <span>Me gusta</span>
                </v-tooltip>
                <p class="my-auto">{{ getData.like }}</p>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      @click.prevent="addDislike()"
                      icon
                      :color="disableDislike ? 'red' : ''"
                      v-bind="attrs"
                      v-on="on"
                      ><v-icon>mdi-thumb-down</v-icon></v-btn
                    >
                  </template>
                  <span>No me gusta</span>
                </v-tooltip>
                <p class="my-auto">{{ getData.dislike }}</p>
              </v-card>
            </v-row>
          </v-row>
          <v-col>
            <v-card-text class="mx-3 text--text text-body-1 font-light">{{
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
          <div v-if="isLogged" class="d-flex my-3 pb-3">
            <v-avatar v-if="userData" class="mx-2">
              <v-img :src="userData.imgURL" width="48px" height="48px" />
            </v-avatar>

            <v-textarea
              v-model="form.comentario"
              class="rounded-lg mx-4"
              width="87%"
              label="Escribir comentario"
              auto-grow
              solo
            >
              <template slot="append">
                <v-btn
                  @click="saveComment()"
                  class="mt-auto mr-2"
                  color="secondary"
                  fab
                  depressed
                >
                  <v-icon>mdi-send</v-icon>
                </v-btn>
              </template>
            </v-textarea>
          </div>
          <template>
            <div
              v-for="item in getData.comentarios"
              :key="item.id"
              class="d-flex my-3 pb-3"
            >
              <div class="ml-3">
                <div>
                  <v-avatar>
                    <v-img
                      class="mx-auto border"
                      :src="item.userImg"
                      width="48px"
                      height="48px"
                    />
                  </v-avatar>
                  <p class="text-caption mx-auto">{{ item.userName }}</p>
                </div>
              </div>
              <v-card class="rounded-simple mx-auto" width="87%" flat>
                <v-card-text class="secondary--text">{{
                  item.comentario
                }}</v-card-text>
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
import { db } from "../plugins/firebase";
import { mapGetters, mapState } from "vuex";
export default {
  data: () => ({
    form: {
      userName: null,
      userImg: null,
      comentario: "",
    },
    disableLike: false,
    disableDislike: false,
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
    isCreator() {
      return this.userData.id === this.getData.uid;
    },
    ...mapState({
      userData: (state) => state.session.user,
      creatorData: (state) => state.foros.creatorData,
    }),
    ...mapGetters({
      isAdmin: "session/isAdmin",
      isUser: "session/isAdmin",
      isLogged: "session/isLogged"
    }),
  },
  methods: {
    openSong() {
      window.open(`spotify:track:${this.getData.songId}`, "_blank");
    },
    saveComment() {
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      function generateString(length) {
        let result = " ";
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
          result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
          );
        }

        return result;
      }
      this.getData.comentarios.push({
        id: generateString(10),
        userId: this.userData.id,
        userName: this.userData.name,
        userImg: this.userData.imgURL,
        comentario: this.form.comentario,
      });
      const comentarios = this.getData.comentarios;
      Firebase.firestore()
        .collection("foros")
        .doc(this.getId)
        .set({ comentarios }, { merge: true });
      this.form.comentario = null;
    },
    play() {
      this.isPlaying = true;
      this.previewUrl.volume = this.previewVolume;
      this.previewUrl.play();
      this.previewUrl.onended = () => {
        this.isPlaying = false;
      };
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
    addLike() {
      if (this.disableDislike) {
        this.getData.dislike -= 1;
        this.disableDislike = false;
        this.getData.like += 1;
        this.disableLike = true;
        db.collection("foros").doc(this.getData.id).set(
          {
            like: this.getData.like,
            dislike: this.getData.dislike,
          },
          { merge: true }
        );
      } else {
        if (this.disableLike) {
          this.getData.like -= 1;
          this.disableLike = false;
          db.collection("foros").doc(this.getData.id).set(
            {
              like: this.getData.like,
            },
            { merge: true }
          );
        } else {
          this.getData.like += 1;
          this.disableLike = true;
          db.collection("foros").doc(this.getData.id).set(
            {
              like: this.getData.like,
            },
            { merge: true }
          );
        }
      }
    },
    addDislike() {
      if (this.disableLike) {
        this.getData.like -= 1;
        this.disableLike = false;
        this.getData.dislike += 1;
        this.disableDislike = true;
        db.collection("foros").doc(this.getData.id).set(
          {
            dislike: this.getData.dislike,
            like: this.getData.like,
          },
          { merge: true }
        );
      } else {
        if (this.disableDislike) {
          this.getData.dislike -= 1;
          this.disableDislike = false;
          db.collection("foros").doc(this.getData.id).set(
            {
              dislike: this.getData.dislike,
            },
            { merge: true }
          );
        } else {
          this.getData.dislike += 1;
          this.disableDislike = true;
          db.collection("foros").doc(this.getData.id).set(
            {
              dislike: this.getData.dislike,
            },
            { merge: true }
          );
        }
      }
    },
  },
  mounted() {
    this.previewUrl = new Audio(this.getData.previewUrl);
    this.$store.dispatch("foros/getCreatorData", this.getData.uid);
  },
};
</script>
