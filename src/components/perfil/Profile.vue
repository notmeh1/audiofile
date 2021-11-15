<template>
  <v-card v-if="userData" class="rounded-simple" flat>
    <v-row>
      <v-col class="pt-0" cols="6" align="center">
        <v-card-title
          class="text-h4 justify-center secondary--text font-weight-bold"
          >Perfil de usuario</v-card-title
        >
        <v-img
          class="rounded-circle mt-2 mr-2"
          :src="userData.photoURL"
          width="256px"
          height="256px"
          contain
        />
        <v-row class="mt-5" justify="center">
          <v-chip
            v-if="userData.rol === 'user'"
            class="font-weight-bold"
            color="primary"
            >Usuario</v-chip
          >
          <v-chip
            v-if="userData.rol === 'admin'"
            class="font-weight-bold white--text"
            color="red"
            >Admin</v-chip
          >
          <v-chip v-if="userData.rol === 'mod'" color="font-weight-bold yellow"
            >Moderador</v-chip
          >
        </v-row>
        <v-btn
          v-if="!spotifyUserData"
          @click="loginSpotify()"
          color="spotifyColor"
          height="45px"
          class="mt-10 px-7 rounded-lg white--text"
        >
          <v-icon class="mr-2">mdi-spotify</v-icon>
          <span class="text-body-2 font-weight-bold">Conectar con Spotify</span>
        </v-btn>
        <v-card v-if="spotifyUserData" class="my-5 mx-10" color="primary" flat>
          <v-row align="center">
            <v-col cols="2" justify="center">
              <v-img
                class="rounded-lg ml-3"
                :src="spotifyUserData.images[0].url"
                width="48px"
                height="48px"
              />
            </v-col>
            <v-col cols="4">
              <p class="white--text text-left my-0 text-caption">
                Conectado a:
              </p>
              <p class="white--text text-left font-weight-bold mb-0">
                {{ spotifyUserData.display_name }}
              </p>
            </v-col>
            <v-col align="end">
              <v-btn class="mr-3" icon>
                <v-icon color="white" x-large>mdi-spotify</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col class="py-0" cols="6">
        <v-card
          class="ml-5 px-10 rounded-r-simple"
          color="secondary"
          height="100%"
          flat
        >
          <v-row class="mt-0">
            <v-btn
              @click="disableForm = !disableForm"
              class="ml-auto mr-10 mt-3"
              color="primary"
              depressed
              height="45px"
              ><span class="text-body-2">Editar</span
              ><v-icon class="ml-2">mdi-pencil</v-icon></v-btn
            >
          </v-row>
          <p class="white--text">Nombre</p>
          <v-row>
            <v-col cols="11">
              <v-text-field
                :disabled="disableForm"
                v-model="userData.displayName"
                solo
              />
            </v-col>
          </v-row>
          <p class="white--text">Correo electronico</p>
          <v-row>
            <v-col cols="11">
              <v-text-field
                :disabled="disableForm"
                v-model="userData.email"
                solo
              />
            </v-col>
          </v-row>
          <!-- 
          <p class="white--text">Contraseña</p>
          <v-row>
            <v-col cols="11">
              <v-text-field :disabled="disableForm" solo />
            </v-col>
          </v-row>
          --->
          <p class="white--text">Foto de perfil ( URL )</p>
          <v-row>
            <v-col cols="11">
              <v-text-field
                :disabled="disableForm"
                v-model="userData.photoURL"
                solo
              />
            </v-col>
          </v-row>

          <v-btn
            @click="saveProfileChanges()"
            class="mb-3 px-5"
            color="primary"
            height="45px"
            ><span class="text-body-1 font-weight-bold"
              >Guardar cambios</span
            ></v-btn
          >
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import Firebase from "firebase";
import { mapState } from "vuex";
export default {
  data: () => ({
    disableForm: true,
  }),
  computed: {
    ...mapState({
      userData: (state) => state.session.user,
      spotifyUserData: (state) => state.spotifyAuth.spotifyUserData,
    }),
  },
  methods: {
    loginSpotify() {
      this.$store.dispatch("spotifyAuth/authSpotify");
    },
    saveProfileChanges() {
      const user = Firebase.auth().currentUser;
      user
        .updateProfile({
          displayName: this.userData.name,
          photoURL: this.userData.photoURL,
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
      this.disableForm = true;
    },
  },
  mounted() {
    console.log(this.userData);
    this.$store.dispatch("spotifyAuth/fetchProfileInformation");
  },
};
</script>
