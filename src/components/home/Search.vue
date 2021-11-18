.
<template>
  <v-row v-if="foroList">
    <v-col v-if="$vuetify.breakpoint.mdAndUp"></v-col>
    <v-col lg="12" xl="6">
      <v-autocomplete
        v-model="searchInput"
        :items="foroList"
        class="mx-5 my-2 rounded-lg shrink"
        background-color="cardBackground"
        flat
        item-value="id"
        item-text="songName"
        hide-no-data
        hide-details
        placeholder="Busca tu canción favorita"
        solo
        filled
      >
        <template slot="append">
          <v-btn
            :to="
              searchInput
                ? { path: `/resenas/${searchInput}` }
                : { name: 'Reseñas' }
            "
            color="primary"
            depressed
            height="60px"
          >
            <v-icon large>mdi-magnify</v-icon>
          </v-btn>
        </template>
        <template v-slot:item="data">
          <v-img
            class="mr-5"
            :src="data.item.songImg"
            width="32"
            height="32"
            contain
          />
          <v-list-item-title v-text="data.item.songName">{{
            data.item.songName
          }}</v-list-item-title>
          <v-rating
            class="mt-0 ml-4"
            v-model="data.item.valoracion"
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
        </template>
        <template slot="selection" slot-scope="data">
          {{ data.item.songName }}
        </template>
      </v-autocomplete>
    </v-col>
    <v-col v-if="$vuetify.breakpoint.mdAndUp"></v-col>
  </v-row>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    searchInput: null,
  }),
  computed: {
    ...mapState({
      foroList: (state) => state.foros.foroList,
    }),
  },
  methods: {
    searchBySongName() {
      return this.foroList.filter((song) =>
        song.songName.toLowerCase().includes(this.searchInput)
      );
    },
  },
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>
