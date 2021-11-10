.
<template>
  <div>
    <v-btn
      class="hidden-xs-only mr-7"
      :width="$vuetify.breakpoint.smOnly ? 'auto' : '190px'"
      height="65%"
      depressed
      icon
      @click="handleLogout"
    >
      <v-icon v-if="$vuetify.breakpoint.smOnly" color="secondary"
        >mdi-account-circle</v-icon
      >
      <span
        v-if="$vuetify.breakpoint.mdAndUp"
        class="font-weight-regular"
        color="secondary"
        >Cerrar Sesión</span
      ></v-btn
    >
  </div>
</template>

<script>
export default {
  methods: {
    async handleLogout() {
      await this.$store.dispatch("session/signOut");
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style></style>
