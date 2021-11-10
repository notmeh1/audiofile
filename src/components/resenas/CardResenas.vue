.
<template>
  <div>
    <v-container>
      <v-row>
        <v-col v-for="foro in foroList" :key="foro.id">
          <v-card class="mx-auto card" color="#F9F6F6" flat>
            <v-list-item three-line>
            <v-img
              class="rounded-simple"
              :src="foro.songImg"
              max-width="64px"
              max-height="64px"
              contain
            />
              <v-list-item-content>
                <v-list-item-title class="text-h5 mb-1 card__title">
                  {{ foro.songName }}
                </v-list-item-title>
                <v-list-item-subtitle class="card__text">{{
                  foro.songArtistOne
                }}</v-list-item-subtitle>
                <v-card-actions>
                  <v-btn :to="{ path: `/resenas/${foro.id}` }" color="#4A2AA7">
                    Ver reseña
                  </v-btn>
                </v-card-actions>
              </v-list-item-content>
            </v-list-item>
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
  &__title {
    color: #4a2aa7;
    font-weight: 900 !important;
  }
  &__text {
    color: #4a2aa7;
  }
}
</style>
