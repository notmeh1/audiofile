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
            >Listado de usuarios
          </v-card-title>
          <v-spacer></v-spacer>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Nombre</th>
                  <th class="text-left">Correo</th>
                  <th class="text-left">Rol</th>
                  <th class="text-left">Cambiar rol</th>
                  <th class="text-left">Accion</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in userList" :key="user.id">
                  <td>{{ user.name }}</td>
                  <td>{{ user.email }}</td>
                  <td>{{ user.rol }}</td>

                  <td>
                    <v-row>
                      <v-col cols="4">
                        <v-select v-model="form.rol" :items="items" dense>
                        </v-select>
                      </v-col>
                    </v-row>
                  </td>
                  <td>
                    <v-btn @click="editarRol(user.id)" color="green" icon
                      ><v-icon>mdi-content-save</v-icon></v-btn
                    >
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
import { db } from "../../plugins/firebase";
import { mapState } from "vuex";
export default {
  data: () => ({
    items: ["user", "admin", "mod"],
    form: {
      rol: null,
    },
  }),
  computed: {
    ...mapState({
      userList: (state) => state.session.userList,
    }),
  },
  methods: {
    editarRol(id) {
      db.collection("usuarios").doc(id).set(
        {
          rol: this.form.rol,
        },
        { merge: true }
      );
      this.disableForm = true;
    },
  },
  mounted() {
    this.$store.dispatch("session/getUserList");
  },
};
</script>
