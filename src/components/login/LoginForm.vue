.
<template>
  <v-container>
    <v-row class="login px-2">
      <v-col>
        <img src="" alt="" />
      </v-col>
      <v-col class="login__form">
        <h2 class="login__title py-10">Inicia tu sesión</h2>
        <v-form ref="loginForm" v-model="valid" lazy-validation class="my-10">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Ingresa tu correo"
            required
            solo
            color="white"
          ></v-text-field>

          <v-text-field
            v-model="password"
            :rules="password"
            label="Ingresa tu contraseña"
            required
            solo
            color="white"
          ></v-text-field>

          <v-btn
            :disabled="!valid"
            color="normal"
            class="mr-4"
            @click="validate"
          >
            Iniciar sesión
          </v-btn>

          <v-btn color="#F4B40E" class="mr-4 mt-4" @click="reset">
            Iniciar sesión con Spotify
          </v-btn>
          <p class="login__register my-5">
            ¿Aún no te registras?
            <v-btn to="/registro" text plain color="white">Registrarse</v-btn>
          </p>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss">
.login {
  display: flex;
  flex-direction: column;
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
.theme--light.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state)
  > .v-input__control
  > .v-input__slot
  fieldset {
  color: white !important;
}
</style>
