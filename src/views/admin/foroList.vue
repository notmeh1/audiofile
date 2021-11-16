<template>
  <v-container class="white rounded-simple" fluid>
    <v-row justify="end">
      <v-btn
        :to="{ name: 'Perfil' }"
        class="rounded-lg mr-10 px-8 my-5"
        color="secondary"
        height="50px"
        depressed
        exact
        ><v-icon class="pr-2">mdi-location-exit</v-icon
        ><span class="font-weight-regular text-body-2">Volver</span></v-btn
      >
    </v-row>
    <v-row class="my-10" justify="center">
      <v-col cols="9">
        <v-card>
          <v-card-title class="justify-center"
            >Listado de reseñas
          </v-card-title>
          <v-spacer></v-spacer>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Codigo de documento</th>
                  <th class="text-left">Hecho por</th>
                  <th class="text-left">Canción</th>
                  <th class="text-left">Album</th>
                  <th class="text-left">Me gusta</th>
                  <th class="text-left">No me gusta</th>
                  <th class="text-left">Puntuación</th>
                  <th class="text-left">Accion</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="foro in foroList" :key="foro.id">
                  <td>{{ foro.id }}</td>
                  <td>Quien lo creo</td>
                  <td>{{ foro.songName }}</td>
                  <td>{{ foro.songArtistOne }}</td>
                  <td>{{ foro.like }}</td>
                  <td>{{ foro.dislike }}</td>
                  <td>{{ foro.valoracion }}</td>
                  <td>
                    <div class="d-flex">
                      <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            color="primary"
                            icon
                            :to="{ path: `/editarResena/${foro.id}` }"
                            v-bind="attrs"
                            v-on="on"
                            ><v-icon>mdi-pencil</v-icon></v-btn
                          >
                        </template>
                        <span>Editar reseña</span>
                      </v-tooltip>

                      <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            @click="borrarResena(foro.id)"
                            color="error"
                            icon
                            v-bind="attrs"
                            v-on="on"
                            ><v-icon>mdi-delete</v-icon></v-btn
                          >
                        </template>
                        <span>Borrar reseña</span>
                      </v-tooltip>
                    </div>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Firebase from "firebase";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      foroList: (state) => state.foros.foroList,
    }),
  },
  methods: {
    borrarResena(id) {
      Firebase.firestore().collection("foros").doc(id).delete();
    },
  },
};
</script>
