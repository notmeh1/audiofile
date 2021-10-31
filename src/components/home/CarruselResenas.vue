<template>
  <v-container>
    <v-row class="resenas">
      <h2 class="resenas__title py-10">Reseñas más populares</h2>
      <v-card class="mx-auto" max-width="344" color="#F9F6F6" flat>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="200px"
          class="ma-2"
        ></v-img>

        <v-card-title color="#4A2AA7"> Lorem ipsum </v-card-title>

        <v-card-subtitle color="#4A2AA7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </v-card-subtitle>

        <v-card-actions>
          <v-btn color="#4A2AA7" right rounded width="64" height="64"
            ><v-icon>mdi-play</v-icon></v-btn
          >

          <v-spacer></v-spacer>

          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
              I'm a thing. But, like most politicians, he promised more than he
              could deliver. You won't have time for sleeping, soldier, not with
              all the bed making you'll be doing. Then we'll go with that data
              file! Hey, you add a one and two zeros to that or we walk! You're
              going to do his laundry? I've got to find a way to escape.
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss">
.resenas {
  &__title {
    color: #4a2aa7;
    font-size: 40px;
    text-align: center;
    line-height: 40px;
  }
}
.v-image__image {
  border-radius: 20px;
}
.v-sheet.v-card {
  border-radius: 20px;
}
.v-btn--rounded {
  border-radius: 35px !important;
}
</style>
