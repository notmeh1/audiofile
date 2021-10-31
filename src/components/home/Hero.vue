<template>
  <v-container>
    <v-row class="hero mx-1">
      <v-col class="hero__bg-left" md="4">
        <h1 class="hero__title pa-4">
          Lorem ipsum dolor sit amet, consectetur
        </h1>
        <p class="hero__text px-4 py-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat
          suscipit porta odio justo, egestas. Auctor porttitor sed augue
          elementum interdum.
        </p>
        <Search class="pb-8" />
      </v-col>
      <v-col class="hero__bg-right" md="8">
        <img
          class="hero__img"
          src="../../assets/img/hero-img.png"
          alt="hero img"
        />
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
  &__title {
    font-size: 50px;
    line-height: 60px;
    text-align: center;
    color: #4a2aa7;
    font-weight: 900;
  }
  &__text {
    text-align: center;
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
