<template>
  <v-container v-if="foroList" class="white rounded-simple" fluid>
    <v-row>
      <v-col>
        <h2 class="secondary--text text-center font-weight-bold text-h3 py-10">
          Reseñas más populares
        </h2>
        <v-sheet class="mx-auto" :max-width="$vuetify.breakpoint.smAndDown ? '100%' : '75%'">
          <v-slide-group multiple show-arrows>
            <v-slide-item v-for="foro in filteredList" :key="foro.id">
              <v-col cols="auto">
                <v-card
                  :to="{ path: `/resenas/${foro.id}` }"
                  class="pointer white--text rounded-lg mx-5 my-10"
                  color="primary"
                  width="200px"
                >
                  <v-row>
                    <v-img
                      class="mt-5"
                      :src="foro.songImg"
                      width="128"
                      height="128"
                      contain
                    />
                  </v-row>
                  <v-row>
                    <span class="text-body-1 font-weight-bold ml-6 mt-5">{{
                      foro.songName
                    }}</span>
                  </v-row>
                  <v-row>
                    <span class="text-body-2 ml-6">{{
                      foro.songArtistOne
                    }}</span>
                  </v-row>
                  <v-row>
                    <v-col cols="7">
                      <v-rating
                        class="mt-0 ml-4"
                        v-model="foro.valoracion"
                        color="white"
                        empty-icon="mdi-star-outline"
                        full-icon="mdi-star"
                        half-icon="mdi-star-halffull"
                        hover
                        length="5"
                        size="16"
                        readonly
                        dense
                      ></v-rating>
                    </v-col>
                    <v-col cols="5" align="center">
                      <v-icon color="white">mdi-thumb-up</v-icon>
                      <span class="ml-2">{{ foro.like }}</span>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row class="resenas"> </v-row>
  </v-container>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  data: () => ({
    show: true,
    model: null,
  }),
  computed: {
    ...mapState({
      foroList: (state) => state.foros.foroList,
    }),
    ...mapGetters({
      filteredList: "foros/filterByPopular"
    })
  },
};
</script>

<style lang="scss">
.pointer {
  cursor: pointer;
}
</style>
