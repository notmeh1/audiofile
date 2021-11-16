<template>
  <v-btn :to="{ name: 'Perfil' }" class="mr-7" color="cardBackground" fab small>
    <v-avatar size="40">
      <img class="rounded-circle" :src="userImg" alt="">
    </v-avatar>
    <!-- <v-icon color="black">mdi-account</v-icon>-->
  </v-btn>
</template>

<script>
import {mapState} from "vuex";
export default {
  computed: {
    ...mapState({
      userImg: (state) => state.session.user.imgURL
    })
  }
}
</script>
