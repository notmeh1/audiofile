.
<template>
  <v-container>
    <v-row class="login px-2">
      <v-col class="login__bg" cols="12" md="5">
        <img
          class="login__img"
          src="../../assets/img/hero-login-img.png"
          alt="Login img"
        />
      </v-col>
      <v-col class="login__form px-12" cols="12" md="7">
        <h2 class="login__title py-10">Inicia tu sesión</h2>
        <v-form
          ref="userForm"
          @submit.prevent="handleFormSubmit"
          lazy-validation
          class="my-10"
        >
          <v-text-field
            v-model="form.email"
            :rules="[required]"
            label="Ingresa tu correo"
            solo
            type="email"
            name="email"
            color="white"
          ></v-text-field>

          <v-text-field
            v-model="form.password"
            :rules="[required]"
            label="Ingresa tu contraseña"
            solo
            type="password"
            name="password"
            color="white"
          ></v-text-field>

          <v-btn color="normal" class="mr-4" type="submit">
            Iniciar sesión
          </v-btn>

          <v-btn color="#F4B40E" class="mr-4">
            Iniciar sesión con Spotify
          </v-btn>
          <p class="login__register my-5">
            ¿Aún no te registras?
            <v-btn to="/registrarse" text plain color="white"
              >Registrarse</v-btn
            >
          </p>
        </v-form>
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
  },
};
</script>

<style lang="scss">
.login {
  display: flex;
  flex-direction: column;
  &__img {
    display: none;
  }
  &__title {
    color: white;
    text-align: center;
    font-size: 30px;
  }
  &__form {
    background-color: #4a2aa7;
    border-radius: 0 0 50px 50px;
  }
  &__register {
    color: white;
  }
}
@media (min-width: 1264px) {
  .login {
    flex-direction: row;
    &__bg {
      background-color: #f0f6ff;
      border-radius: 0 0 0 50px;
      padding: 0 !important;
    }
    &__img {
      display: inline-block;
      width: 170%;
      margin-left: -200px;
      margin-bottom: -6px;
    }
    &__title {
      font-size: 40px;
    }
    &__form {
      border-radius: 0 0 50px 0;
    }
  }
}
</style>
