<template>
  <v-container>
    <v-row v-if="isAdmin" class="mt-5">
      <v-btn
        :to="{ name: 'Userlist' }"
        color="primary"
        class="rounded-lg mx-2 px-5 text-body-1 mb-1"
        height="45px"
        depressed
        >Listado de usuarios</v-btn
      >
      <v-btn
        color="primary"
        :to="{ name: 'Forolist' }"
        class="rounded-lg mx-2 px-5 text-body-1 mb-1"
        height="45px"
        depressed
        >Listado de reseñas</v-btn
      >
    </v-row>
    <v-row class="my-10">
      <v-col>
        <PerfilConfig />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PerfilConfig from "../components/perfil/Profile.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    PerfilConfig,
  },
  computed: {
    ...mapGetters({
      isAdmin: "session/isAdmin",
      isUser: "session/isAdmin",
    }),
  },
};
</script>

<style lang="scss" scoped>
.pointer {
  cursor: pointer;
}
</style>
