<template>
  <v-container class="rounded-simple white pt-0" fluid>
    <v-row>
      <v-col lg="4" xl="6" align=right>
        <v-card class="mx-3 mt-5" flat>
          <p class="mt-10 text-h2 secondary--text text-center font-weight-black">Lorem ipsum dolor sit amet, consectetur</p>
          <p class="text-h5 secondary--text text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat
          suscipit porta odio justo, egestas. Auctor porttitor sed augue
          elementum interdum.</p>
          <Search/>
        </v-card>
      </v-col>
      <v-col class="homeBg rounded-r-simple pb-0" lg="8" xl="6" align=left>
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
<style lang="scss">
.hero {
  display: flex;
  flex-direction: column;
  &__bg-left {
    background-color: #f0f6ff;
    border-radius: 0 0 50px 50px;
  }
  &__bg-right {
    display: none;
  }
  &__title {
    font-size: 50px;
    line-height: 60px;
    text-align: center;
    color: #4a2aa7;
    font-weight: 900;
  }
  &__text {
    line-height: 30px;
  }
}

@media (min-width: 1264px) {
  .hero {
    flex-direction: row;
    &__bg-left {
      border-radius: 0 0 0 50px;
      padding-top: 10% !important;
    }
    &__bg-right {
      background-color: #f4b40e;
      border-radius: 0 0 50px 0;
      display: inline-block;
    }
    &__img {
      width: 120%;
      margin-bottom: -6px;
    }
  }
  .col-md-8 {
    padding: 0 !important;
    overflow: hidden;
  }
}
</style>
