<template>
  <div>
    <v-container fluid>
      <v-row class="agregarResenas justify-center">
        <v-col cols="12" md="8">
          <h2 class="agregarResenas__title my-5">Editar Reseña</h2>
          <v-form
            class="my-5"
            ref="formEditResena"
            @submit.prevent="actualizarResena"
          >
            <v-text-field
              outlined
              append-icon="mdi-playlist-music"
              label="Nombre canción"
              color="#4a2aa7"
              v-model="foro.cancion"
              :rules="[required]"
            ></v-text-field>
            <v-textarea
              outlined
              append-icon="mdi-file-document-edit-outline"
              name="input-7-4"
              value="Reseña"
              label="Reseña"
              color="#4a2aa7"
              v-model="foro.resena"
              :rules="[required]"
            ></v-textarea>
            <v-btn class="agregarResenas__btn" color="#4a2aa7" type="submit"
              ><v-icon>mdi-pencil</v-icon>Editar</v-btn
            >
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Firebase from "firebase";
export default {
  beforeRouteEnter(to, from, next) {
    Firebase.firestore()
      .collection("foros")
      .doc(to.params.id)
      .get()
      .then((document) => {
        next((vm) => {
          vm.foro = { id: document.id, ...document.data() };
        });
      });
  },
  data: () => ({
    foro: null,
  }),
  methods: {
    actualizarResena() {
      if (this.$refs.formEditResena.validate()) {
        this.loading = true;
        Firebase.firestore()
          .collection("foros")
          .doc(this.foro.id)
          .update(this.foro)
          .then(() => {
            this.loading = false;
            this.$router.push("/iniciar-sesion");
          });
      }
    },
  },
};
</script>

<style></style>
