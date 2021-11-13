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
        <h2 class="login__title py-10">Registrate</h2>
        <v-form ref="registerForm" @submit.prevent="registrarse" class="my-10">
          <v-text-field
            v-model="form.name"
            :rules="[required]"
            label="Ingresa tu nombre"
            solo
            color="white"
          ></v-text-field>
          <v-text-field
            v-model="form.email"
            :rules="[required]"
            label="Ingresa tu correo"
            solo
            color="white"
          ></v-text-field>

          <v-text-field
            v-model="form.password"
            :rules="[required]"
            label="Ingresa tu contraseña"
            solo
            color="white"
          ></v-text-field>

          <v-btn color="normal" type="submit"> Registrarse </v-btn>
          <p class="login__register">
            Ya estas registrado?
            <v-btn to="/iniciar-sesion" text plain color="white"
              >Iniciar Sesión</v-btn
            >
          </p>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Firebase from "firebase";
import Router from "../../router";
export default {
  data: () => ({
    form: {
      name: "",
      email: "",
      password: "",
    },
  }),
  methods: {
    required(value) {
      return !!value || "Este campo es obligatorio";
    },
    registrarse() {
      Firebase.auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then((data) => {
          data.user.updateProfile().then(() => {
            Router.push({ name: "Home" });
          });
        });
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
    color: #4a2aa7;
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
