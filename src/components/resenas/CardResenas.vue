.
<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-card class="mx-auto card" color="#F9F6F6" flat>
            <v-list-item three-line>
              <v-list-item-avatar
                tile
                size="80"
                height="100"
                color="grey"
              ></v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="text-h5 mb-1 card__title">
                  {{ value.cancion }}
                </v-list-item-title>
                <v-list-item-subtitle class="card__text">{{
                  value.resena
                }}</v-list-item-subtitle>
                <v-card-actions>
                  <v-btn color="#4A2AA7"> Ver reseña </v-btn>
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
export default {
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
