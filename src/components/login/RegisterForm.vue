<template>
  <v-container class="rounded-simple px-5 pb-0 white" fluid>
    <v-row align="end">
      <v-col v-if="!$vuetify.breakpoint.smAndDown" class="pa-0" lg="6" md="6" sm="12" align="right">
        <v-img
          width="800px"
          height="700px"
          class="img"
          src="../../assets/img/hero-login-img.png"
          alt="Login img"
          absolute
        />
      </v-col>
      <v-col lg="6" md="6" sm="12" align="left">
        <v-card
          class="ma-0 py-5 px-10 rounded-simple"
          color="secondary"
          width="800px"
          height="700px"
        >
          <h2 class="white--text text-h3 font-weight-bold mt-10 pt-10 pl-5">
            Registrate
          </h2>
          <v-form
            ref="registerForm"
            @submit.prevent="registrarse"
            lazy-validation
            class="my-10 pl-5"
          >
            <p class="mb-2 font-weight-regular white--text">
              Ingresa tu Nombre
            </p>
            <v-text-field
              v-model="form.name"
              :rules="[required]"
              solo
              type="email"
              name="email"
              color="white"
            ></v-text-field>
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
              type="submit"
              color="normal"
              height="45px"
              class="mr-4 px-10 rounded-lg"
            >
              <span class="text-subtitle-2 textColor--text font-weight-bold"
                >Crear cuenta</span
              >
            </v-btn>
            <p class="my-5 white--text">
              ¿Ya tienes cuenta?
              <v-btn :to="{ name: 'Iniciar Sesión' }" text plain color="white"
                ><span class="text-body-1">Inicia sesion</span></v-btn
              >
            </p>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Firebase from "firebase";
import {db} from "../../plugins/firebase";
//import Router from "../../router";
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
          return db.collection('usuarios').doc(data.user.uid).set({
            name: this.form.name,
            rol: 'user',
            email: this.form.email,
          })
          //Router.push({ name: "Iniciar Sesión" });
        })
        
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
.img {
  z-index: 1;
}
</style>
