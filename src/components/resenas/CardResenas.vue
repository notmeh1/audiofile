.
<template>
  <div>
    <v-container>
      <v-row>
        <v-col v-for="foro in foroList" :key="foro.id" cols="3">
          <v-card
            :to="{ path: `/resenas/${foro.id}` }"
            class="pointer mx-auto card d-flex"
            color="#F9F6F6"
            flat
          >
            <v-row align="center">
              <v-col class="px-0" cols="4" align="center">
                <v-img
                  class="rounded-lg ml-3"
                  :src="foro.songImg"
                  max-width="64px"
                  max-height="64px"
                  contain
                />
              </v-col>
              <v-col class="px-0">
                <v-card-title
                  class="
                    font-weight-bold
                    text-body-1
                    mb-1
                    pb-0
                    card__title
                    secondary--text
                  "
                >
                  {{ foro.songName }}
                </v-card-title>
                <v-rating
                  class="ml-2"
                  v-model="foro.valoracion"
                  color="secondary"
                  empty-icon="mdi-star-outline"
                  full-icon="mdi-star"
                  half-icon="mdi-star-halffull"
                  hover
                  length="5"
                  size="12"
                  readonly
                ></v-rating>
                <v-card-subtitle class="card__text pt-0">{{
                  foro.songArtistOne
                }}</v-card-subtitle>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      foroList: (state) => state.foros.foroList,
    }),
  },
  props: ["value"],
};
</script>

<style lang="scss">
.v-sheet.v-card {
  border-radius: 20px !important;
}
.v-application .rounded-0 {
  border-radius: 15px !important;
}
.theme--light.v-btn {
  color: white;
}
.card {
  margin-bottom: 10px;
  &__text {
    color: #4a2aa7;
  }
}
.pointer {
  cursor: pointer;
}
</style>
