<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <h2 class="secondary--text text-center font-weight-bold text-h3 py-10">Reseñas más populares</h2>
        <v-sheet
    class="mx-auto"
    max-width="700"
  >
    <v-slide-group
      multiple
      show-arrows
    >
      <v-slide-item
        v-for="n in 25"
        :key="n"
      >
      <v-card>
          <v-img src="../../assets/profileimg.png" width="128" height="128"/>
        
      </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
      </v-col>
    </v-row>
    <v-row class="resenas">
      
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    show: true,
    model: null,
  }),
};
</script>

<style lang="scss">

</style>
