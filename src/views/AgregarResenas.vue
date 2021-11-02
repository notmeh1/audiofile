.
<template>
  <div>
    <v-container class="home">
      <v-row justify="center">
        <v-col align="center">
          <h1>Agregar Reseñas view</h1>
        </v-col>
      </v-row>
    </v-container>
    <FormularioAgregarResenas />
  </div>
</template>

<script>
import FormularioAgregarResenas from "../components/agregarResenas/FormularioAgregarResenas.vue";
export default {
  components: { FormularioAgregarResenas },
};
</script>

<style></style>
