<template>
  <v-container class="rounded-simple white pt-0" fluid>
    <v-row>
      <v-col lg="4" xl="6" sm="12" align="right">
        <v-card class="mx-3 mt-5" flat>
          <p
            class="mt-10 text-h2 secondary--text text-center font-weight-black"
          >
            Descubre las mejores reseñas de tus canciones favoritas
          </p>
          <p class="text-h5 secondary--text text-center">
            Audiofile es una gran comunidad donde podrás encontrar, comentar,
            apoyar e incluso crear tus propias reseñas!
          </p>
          <Search />
        </v-card>
      </v-col>
      <v-col
        v-if="$vuetify.breakpoint.mdAndUp"
        class="homeBg rounded-r-simple pb-0"
        lg="8"
        xl="6"
        sm="12"
        align="left"
      >
        <v-card class="rounded-r-simple" color="homeBg" width="1200px" flat>
          <v-img
            class=""
            src="../../assets/img/hero-img.png"
            width="100%"
            height="700px"
          />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Search from "./Search.vue";
export default {
  components: {
    Search,
  },
};
</script>
<style lang="scss"></style>
