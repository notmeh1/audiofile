<template>
  <div>
    <v-container>
      <v-row>
        <v-col v-if="foros">
          <v-card
            v-for="foro in foroList"
            :key="foro.id"
            :to="{ path: `/resenas/${foro.id}` }"
            class="pointer rounded-md mb-5"
            color="cardBackground"
            flat
          >
            <v-row align="center">
              <v-col cols="1" md="2" align="center">
                <v-img
                  class="rounded-md mx-3"
                  :src="foro.songImg"
                  width="64px"
                  height="64px"
                  contain
                />
              </v-col>
              <v-col cols="5" md="4">
                <v-row>
                  <v-card-title class="px-0 pb-0">{{
                    foro.songName
                  }}</v-card-title>
                </v-row>
                <v-row>
                  <p class="my-0 text-body-2">{{ foro.songArtistOne }}</p>
                </v-row>
                <v-row>
                  <v-rating
                    class="pb-4"
                    v-model="foro.valoracion"
                    color="secondary"
                    empty-icon="mdi-star-outline"
                    full-icon="mdi-star"
                    half-icon="mdi-star-halffull"
                    hover
                    length="5"
                    size="16"
                    readonly
                    dense
                  ></v-rating>
                  <p class="ml-2 mt-1 text-subtitle-2">
                    ({{ foro.valoracion }})
                  </p>
                </v-row>
              </v-col>
              <v-col cols="5"> </v-col>
              <v-col class="py-0 px-0" cols="1" align="center">
                <div class="mt-4 mr-3">
                  <v-icon>mdi-thumb-up</v-icon>
                  <p>{{ foro.like }}</p>
                </div>
                <div class="mr-3">
                  <v-icon>mdi-thumb-down</v-icon>
                  <p>{{foro.dislike}}</p>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
//import {db} from "../../plugins/firebase";
export default {
  data: () => ({
    userList: [],
    list: {},
  }),
  computed: {
    ...mapGetters({
      foroList: 'foros/filterByName',
    }),
    ...mapState({
      foros: (state) => state.foros.foroList
    })
  },
  props: ["value"],
  mounted() {
    //this.foroList.forEach((foro) => {
    //  db.collection('usuarios').doc(foro.uid).onSnapshot((doc) => {
    //    const data = { id: doc.id, ...doc.data() };
    //    console.log(data, this.pairs)
    //    this.userList.push(data)
    //  })
    //})
  },
};
</script>

<style lang="scss">
.pointer {
  cursor: pointer;
}
</style>
