.
<template>
  <v-container>
    <v-row>
      <v-col class="playlist">
        <h2 class="playlist__title py-10">Playlist más recomendadas</h2>
      </v-col>
    </v-row>
    <v-row>
      <carousel
        :perPageCustom="[
          [768, 2],
          [1024, 3],
        ]"
      >
        <slide>
          <v-col>
            <v-card class="mx-auto pt-2" max-width="344" color="#F9F6F6" flat>
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="200px"
                class="ma-2"
              ></v-img>

              <v-card-title> Lorem ipsum </v-card-title>

              <v-card-subtitle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </v-card-subtitle>

              <v-expand-transition>
                <div>
                  <v-divider></v-divider>

                  <v-card-text>
                    I'm a thing. But, like most politicians, he promised more
                    than he could deliver. You won't have time for sleeping,
                    soldier, not with all the bed making you'll be doing. Then
                    we'll go with that data file! Hey, you add a one and two
                    zeros to that or we walk! You're going to do his laundry?
                    I've got to find a way to escape.
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>
        </slide>
        <slide>
          <v-col>
            <v-card class="mx-auto pt-2" max-width="344" color="#F9F6F6" flat>
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="200px"
                class="ma-2"
              ></v-img>

              <v-card-title> Lorem ipsum </v-card-title>

              <v-card-subtitle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </v-card-subtitle>

              <v-expand-transition>
                <div>
                  <v-divider></v-divider>

                  <v-card-text>
                    I'm a thing. But, like most politicians, he promised more
                    than he could deliver. You won't have time for sleeping,
                    soldier, not with all the bed making you'll be doing. Then
                    we'll go with that data file! Hey, you add a one and two
                    zeros to that or we walk! You're going to do his laundry?
                    I've got to find a way to escape.
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>
        </slide>
        <slide>
          <v-col>
            <v-card class="mx-auto pt-2" max-width="344" color="#F9F6F6" flat>
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="200px"
                class="ma-2"
              ></v-img>

              <v-card-title> Lorem ipsum </v-card-title>

              <v-card-subtitle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </v-card-subtitle>

              <v-expand-transition>
                <div>
                  <v-divider></v-divider>

                  <v-card-text>
                    I'm a thing. But, like most politicians, he promised more
                    than he could deliver. You won't have time for sleeping,
                    soldier, not with all the bed making you'll be doing. Then
                    we'll go with that data file! Hey, you add a one and two
                    zeros to that or we walk! You're going to do his laundry?
                    I've got to find a way to escape.
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>
        </slide>
      </carousel>
    </v-row>
  </v-container>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  components: {
    Carousel,
    Slide,
  },
};
</script>

<style lang="scss">
.playlist {
  &__title {
    color: #4a2aa7;
    font-size: 40px;
    text-align: center;
    line-height: 40px;
  }
}
</style>
