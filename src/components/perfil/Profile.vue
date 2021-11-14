<template>
  <v-card v-if="userData" class="rounded-simple" flat>
    <v-row>
      <v-col class="pt-0" cols="6" align="center">
        <v-card-title class="justify-center">Perfil de usuario</v-card-title>
        <v-img
          class="rounded-circle mt-2 mr-2"
          src="../../assets/profileimg.png"
          width="256px"
          height="256px"
          contain
        />
        <v-row class="mt-5" justify="center">
          <v-chip color="primary">Usuario</v-chip>
        </v-row>
        <v-btn class="mt-10" color="success"
          ><v-icon>mdi-spotify</v-icon> Conectar con spotify</v-btn
        >
        <v-card class="mt-5 mx-10" color="primary" flat>
          <v-row align="center">
            <v-col cols="2">
              <v-img
                class="rounded-lg ml-3"
                src="../../assets/profileimg.png"
                width="48px"
                height="48px"
                contain
              />
            </v-col>
            <v-col cols="4">
                <p class="white--text text-left my-0 text-caption">Conectado a: </p>
              <p class="white--text font-weight-bold mb-0">Nombre de usuario</p>
            </v-col>
            <v-col align="end">
              <v-icon class="mr-3" color="white" x-large>mdi-spotify</v-icon>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col class="py-0" cols="6">
        <v-card class="ml-5 px-10 rounded-r-simple" color="secondary" height="100%" flat>
        <v-row class="mt-0">
          <v-btn @click="disableForm = !disableForm" class="ml-auto mr-10 mt-3" color="primary" depressed height="45px"
            ><span class="text-body-2">Editar</span><v-icon class="ml-2">mdi-pencil</v-icon></v-btn
          >
        </v-row>
          <p class="white--text">Nombre</p>
        <v-row>
          <v-col cols="11">
            <v-text-field :disabled="disableForm" v-model="userData.nombre" solo />
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
        <p class="white--text">Contraseña</p>
        <v-row>
          <v-col cols="11">
            <v-text-field :disabled="disableForm" solo />
          </v-col>
        </v-row>
        <p class="white--text">Foto de perfil ( URL )</p>
        <v-row>
          <v-col cols="11">
            <v-text-field :disabled="disableForm" solo />
          </v-col>
        </v-row>
        <v-btn class="mb-3 px-5" color="primary" height="45px"><span class="text-body-1 font-weight-bold">Guardar cambios</span></v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    disableForm: true,
  }),
  computed: {
    ...mapState({
      userData: (state) => state.session.user,
    }),
  },
  mounted() {
    console.log(this.userData);
  },
};
</script>
