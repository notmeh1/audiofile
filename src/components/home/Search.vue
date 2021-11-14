.
<template>
  <v-row>
    <v-col v-if="$vuetify.breakpoint.mdAndUp"></v-col>
    <v-col lg="12" xl="6">
    <v-autocomplete
      class="mx-5 my-2 rounded-lg shrink"
      background-color="cardBackground"
      flat
      hide-no-data
      hide-details
      label="Busca tu canción favorita"
      solo
      filled
      append-icon="mdi-magnify"
    ></v-autocomplete>
    </v-col>
    <v-col v-if="$vuetify.breakpoint.mdAndUp"></v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style scoped>
.v-text-field.v-text-field--enclosed:not(.v-text-field--rounded)
  > .v-input__control
  > .v-input__slot {
  padding: 0 0 0 12px !important;
}
</style>
