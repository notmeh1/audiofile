<template>
  <v-container>
    <v-row class="hero mx-1">
      <v-col class="hero__bg">
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
      <v-col>
        <img src="" alt="" />
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
  &__bg {
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
</style>
