.
<template>
  <div>
    <v-btn
      class="hidden-xs-only rounded-simple mr-7"
      :width="$vuetify.breakpoint.smOnly ? 'auto' : '190px'"
      height="45px"
      color="white"
      light
      depressed
      :to="{ name: 'Iniciar Sesión' }"
    >
      <v-icon v-if="$vuetify.breakpoint.smOnly" color="secondary"
        >mdi-account-circle</v-icon
      >
      <span
        v-if="$vuetify.breakpoint.mdAndUp"
        class="font-weight-bold text-body-2 secondary--text"
        color="secondary"
        >Iniciar sesion</span
      ></v-btn
    >
  </div>
</template>

<script>
export default {};
</script>

<style></style>
