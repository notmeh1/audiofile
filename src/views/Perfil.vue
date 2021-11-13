<template>
  <v-container>
    <v-row class="my-10">
      <v-col>
        <PerfilConfig/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PerfilConfig from "../components/perfil/Profile.vue"
export default {
    components: {
        PerfilConfig,
        
    },
}
</script>

<style lang="scss" scoped>
.pointer {
    cursor: pointer;
}
</style>