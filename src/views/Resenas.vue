.
<template>
  <div>
    <v-container class="resenas" fluid>
      <v-row>
        <v-col>
          <FiltrosResenas />
          <v-row>
            <v-col>
              <CardResenas />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import FiltrosResenas from "../components/resenas/FiltrosResenas.vue";
import CardResenas from "../components/resenas/CardResenas.vue";

export default {
  components: { FiltrosResenas, CardResenas },
};
</script>

<style lang="scss">
.resenas {
  background-color: white;
  border-radius: 50px;
}
</style>
