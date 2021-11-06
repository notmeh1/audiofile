.
<template>
  <div>
    <v-autocomplete
      class="mx-4 my-2"
      flat
      hide-no-data
      hide-details
      label="Busca tu canción favorita"
      solo-inverted
      append-icon="mdi-magnify"
    ></v-autocomplete>
  </div>
</template>

<script>
export default {};
</script>

<style>
.v-input__icon {
  background-color: #581eff;
  padding: 25px;
}
.v-text-field.v-text-field--enclosed:not(.v-text-field--rounded)
  > .v-input__control
  > .v-input__slot {
  padding: 0 0 0 12px !important;
}

.v-icon.v-icon {
  color: white !important;
}
</style>
