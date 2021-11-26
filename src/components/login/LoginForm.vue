<template>
  <v-container class="rounded-simple px-5 pb-0 white" fluid>
    <v-row align=end>
      <v-col v-if="!$vuetify.breakpoint.smAndDown" class="pa-0" lg="6" md="6" align=right>
        <v-img
          width="800px"
          height="700px"
          class="img"
          src="../../assets/img/hero-login-img.png"
          alt="Login img"
          absolute
        />
      </v-col>
      <v-col class="pl-0" lg="6" md="6" sm="12" align=left>
        <v-card class="ma-0 py-5 px-10 rounded-simple" color="secondary" width="800px" height="700px">
          <h2 class="white--text text-h3 font-weight-bold mt-10 pt-10 pl-5">
            Inicia tu sesión
          </h2>
          <v-form
            ref="userForm"
            @submit.prevent="handleFormSubmit"
            lazy-validation
            class="my-10 pl-5"
          >
            <p class="mb-2 font-weight-regular white--text">
              Ingresa tu correo
            </p>
            <v-text-field
              v-model="form.email"
              :rules="[required]"
              solo
              type="email"
              name="email"
              color="white"
            ></v-text-field>
            <p class="mb-2 font-weight-regular white--text">
              Ingresa tu contraseña
            </p>
            <v-text-field
              v-model="form.password"
              :rules="[required]"
              solo
              type="password"
              name="password"
              color="white"
            ></v-text-field>

            <v-btn
              @click="handleFormSubmit()"
              color="normal"
              height="45px"
              class="mr-4 px-10 rounded-lg"
            >
              <span class="text-subtitle-2 textColor--text font-weight-bold"
                >Iniciar sesión</span
              >
            </v-btn>
            <p class="my-5 white--text">
              ¿Aún no te registras?
              <v-btn :to="{ name: 'Registrarse' }" text plain color="white"
                ><span class="text-body-1">Registrate aquí</span></v-btn
              >
            </p>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    form: {
      email: "",
      password: "",
    },
  }),
  methods: {
    async handleFormSubmit() {
      if (this.$refs.userForm.validate()) {
        try {
          await this.$store.dispatch("session/signIn", this.form);
        } catch (e) {
          this.color = "error";
        }
      }
    },
    required(value) {
      return !!value || "Este campo es obligatorio";
    },
    loginSpotify() {
      this.$store.dispatch("spotifyAuth/authSpotify");
    },
  },
};
</script>

<style lang="scss">
.img {
  z-index: 1;
}
</style>
