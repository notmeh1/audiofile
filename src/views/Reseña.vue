<template>
  <v-container class="rounded-simple px-5 white" fluid>
    <v-row justify="end">
      <v-btn
        :to="{ name: 'Reseñas' }"
        class="rounded-lg mx-3 px-8 my-5"
        color="secondary"
        height="50px"
        depressed
        exact
        ><v-icon class="pr-">mdi-location-exit</v-icon
        ><span class="font-weight-regular text-body-2">Volver</span></v-btn
      >
    </v-row>
    <v-row>
      <v-col lg="3">
        <v-card
          class="secondary--text rounded-simple px-3 mb-5"
          color="cardBackground"
          flat
        >
          <v-row class="py-4" justify="center">
            <v-img
              class=""
              src="../assets/profileimg.png"
              max-width="200px"
              max-height="200px"
              contain
            />
          </v-row>
          <h2 class="mx-3 py-3 font-weight-black">Lorem Ipsum</h2>
          <div class="mb-10">
            <p class="px-3 my-2">
              <v-icon class="mr-2" color="secondary">mdi-playlist-music</v-icon
              >Lorem Ipsum
            </p>
            <p class="px-3 my-2">
              <v-icon class="mr-2" color="secondary"
                >mdi-text-box-multiple-outline</v-icon
              >Lorem Ipsum
            </p>
            <p class="px-3 my-2">
              <v-icon class="mr-2" color="secondary"
                >mdi-music-box-multiple-outline</v-icon
              >Lorem Ipsum
            </p>
          </div>
          <v-card-actions class="justify-center">
            <v-btn color="secondary" fab large absolute depressed
              ><v-icon large>mdi-play</v-icon></v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col class="pt-0" lg="9">
        <v-card
          class="secondary--text rounded-simple px-3"
          color="cardBackground"
          flat
        >
          <h2 class="mx-4 pt-2 font-weight-black">Reseña</h2>
          <v-card-text class="secondary--text font-light"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            donec integer diam nulla non adipiscing vitae sit ultrices. Gravida
            molestie bibendum ullamcorper amet. Vel vel nulla libero magna enim
            convallis placerat. Gravida parturient gravida venenatis, egestas id
            euismod faucibus elementum dictum. Massa eget sed id dui quam
            commodo amet, sit. Pellentesque id mauris sit nam rhoncus accumsan
            egestas nunc. Commodo auctor tristique et nascetur vitae interdum
            nunc consectetur. Ipsum pulvinar hendrerit vitae viverra sed dapibus
            odio ipsum, quis. Vitae auctor et orci non enim massa. Diam ultrices
            tincidunt adipiscing lobortis vestibulum mauris. Donec nisl,
            adipiscing eleifend nisi neque mollis id amet dui. Tellus mauris,
            tristique quis iaculis est tortor porta volutpat volutpat. Quam eget
            pellentesque vulputate eget. In cursus elit orci justo, quisque
            bibendum sit sed. Pellentesque mattis faucibus scelerisque
            ullamcorper et, in nulla elementum. Diam quam volutpat ut sed
            fringilla ut. Viverra turpis tristique purus nunc nunc. Pellentesque
            sit risus nibh in convallis.</v-card-text
          >
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col lg="3" v-if="!$vuetify.breakpoint.mdAndDown"></v-col>
      <v-col lg="9" md="12">
        <v-card
          class="secondary--text rounded-simple"
          color="cardBackground"
          flat
        >
          <h2 class="mx-5 pt-2 font-weight-black">Comentarios</h2>
          <div class="d-flex my-3 pb-3">
            <v-img
              class="rounded-circle mx-auto"
              src="../assets/profileimg.png"
              max-width="6%"
              width="48px"
              height="48px"
              contain
            />

            <v-textarea
              class="rounded-simple mx-4"
              width="87%"
              label="Escribir reseña"
              auto-grow
              solo
            >
            </v-textarea>
          </div>
          <div class="d-flex my-3 pb-3">
            <v-img
              class="rounded-circle mx-auto border"
              src="../assets/profileimg.png"
              max-width="6%"
              width="48px"
              height="48px"
              contain
            />
            <v-card class="rounded-simple mx-auto" width="87%" flat>
              <v-card-text class="secondary--text"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                donec integer diam nulla non adipiscing vitae sit ultrices.
                Gravida molestie bibendum ullamcorper amet. Vel vel nulla libero
                magna enim convallis placerat. Gravida parturient gravida
                venenatis, egestas id euismod faucibus elementum
                dictum.</v-card-text
              >
            </v-card>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>
