.
<template>
  <div>
    <v-btn class="mr-7" color="error" depressed @click="handleLogout" fab small>
      <v-icon color="white">mdi-logout-variant</v-icon></v-btn
    >
  </div>
</template>

<script>
export default {
  methods: {
    async handleLogout() {
      await this.$store.dispatch("session/signOut");
    },
  },
};
</script>

<style></style>
