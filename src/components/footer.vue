<template>
  <v-footer
    :class="[
      $vuetify.breakpoint.xsOnly ? 'mx-0 tile' : 'mx-3 rounded-simple', // mb-1 for footer
    ]"
    color="secondary"
    justify="center"
    :height="$vuetify.breakpoint.xsOnly ? '100px' : '175px'"
    dark
  >
    <v-col>
      <v-row justify="center">
        <v-card
          class="d-flex rounded-simple mx-2 px-7"
          :width="$vuetify.breakpoint.smAndUp ? '200px' : 'auto'"
          color="primary"
          :height="$vuetify.breakpoint.xsOnly ? '55px' : '75px'"
          flat
          tile
        >
          <v-row align="center" justify="center">
            <v-icon large>mdi-music-note</v-icon>
            <h2>AudioFile</h2>
          </v-row>
        </v-card>
      </v-row>
      <v-row justify="center">
        <p class="my-2 font-weight-light">Todos los derechos reservados</p>
      </v-row>
    </v-col>
  </v-footer>
</template>

<script>
export default {};
</script>
