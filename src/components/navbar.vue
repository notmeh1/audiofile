<template>
  <div>
    <!-- W.I.P. --->
    <v-navigation-drawer
      v-if="$vuetify.breakpoint.xsOnly"
      :style="`margin-top: ${$vuetify.application.top}px`"
      transition="slide-y-transition"
      stateless
      width="100%"
      height="auto"
      color="secondary"
      v-model="drawer"
      app
      clipped
      right
      temporary
      hide-overlay
    >
      <v-list class="justify-center" align="center">
        <v-btn
          :to="{ name: 'Home' }"
          class="font-weight-light mx-2"
          color="secondary"
          depressed
          exact
          >Inicio</v-btn
        >
        <v-btn class="font-weight-light mx-2" color="secondary" depressed exact
          >Reseñas</v-btn
        >
        <v-btn class="font-weight-light mx-2" color="secondary" depressed exact
          >Agregar Reseña</v-btn
        >
        <v-btn
          class="rounded-simple"
          width="190px"
          height="35px"
          color="white"
          light
          depressed
        >
          <span class="font-weight-regular" color="secondary"
            >Iniciar sesion</span
          ></v-btn
        >
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :class="[
        $vuetify.breakpoint.xsOnly ? 'mx-0 tile' : 'mx-3 mt-1 rounded-simple', // mt-1 for navbar
      ]"
      color="secondary"
      :height="$vuetify.breakpoint.xsOnly ? '50px' : '75px'"
      app
      clipped-right
      flat
      dark
    >
      <router-link
        style="text-decoration: none; color: inherit; height: 100%"
        :to="{ name: 'Home' }"
      >
        <v-card
          class="d-flex rounded-simple"
          :class="$vuetify.breakpoint.xsOnly ? 'mx-1 px-3' : 'px-7'"
          :width="$vuetify.breakpoint.lgAndUp ? '225px' : 'auto'"
          color="primary"
          height="100%"
          flat
          tile
        >
          <v-row align="center" justify="center">
            <v-icon :class="$vuetify.breakpoint.smAndDown ? 'mx-3' : ''" large
              >mdi-music-note</v-icon
            >
            <h2 v-if="$vuetify.breakpoint.mdAndUp">AudioFile</h2>
          </v-row>
        </v-card>
      </router-link>
      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          :to="{ name: 'Home' }"
          class="font-weight-light text-body-2 mx-2"
          color="secondary"
          depressed
          exact
          >Inicio</v-btn
        >
        <v-btn
          :to="{ name: 'Reseñas' }"
          class="font-weight-light text-body-2 mx-2"
          color="secondary"
          depressed
          exact
          >Reseñas</v-btn
        >
        <v-btn
          v-if="isUserLogged"
          :to="{ name: 'Agregar Reseñas' }"
          class="font-weight-light text-body-2 mx-2"
          color="secondary"
          depressed
          exact
          >Agregar Reseña</v-btn
        >
      </v-toolbar-items>

      <v-spacer></v-spacer>
      <SignIn v-if="!isUserLogged" />
      <SignOut v-if="isUserLogged" />
      <Account v-if="isUserLogged"/>
      <div class="hidden-sm-and-up">
        <v-btn icon class="rounded-simple mr-1" @click="drawer = !drawer">
          <v-icon>mdi-dots-horizontal</v-icon>
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
import SignIn from "./login/SignIn.vue";
import SignOut from "./login/SignOut.vue";
import Account from "./login/Account.vue"
import {mapState} from "vuex";
export default {
  data: () => ({
    drawer: false,
  }),
  components: {
    SignIn,
    SignOut,
    Account,
  },
  computed: {
    ...mapState({
      isUserLogged: (state) => state.session.user
    })
  },
};
</script>
