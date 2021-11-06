.
<template>
  <div>
    <v-container>
      <v-row class="agregarResenas justify-center">
        <v-col cols="12" md="8">
          <h2 class="agregarResenas__title my-5">
            Busca una canción y agrega una reseña
          </h2>
          <v-form class="my-5" ref="formResena" @submit.prevent="crearResena">
            <v-text-field
              outlined
              append-icon="mdi-playlist-music"
              label="Nombre canción"
              color="#4a2aa7"
              v-model="formResena.cancion"
              :rules="[required]"
            ></v-text-field>
            <v-textarea
              outlined
              append-icon="mdi-file-document-edit-outline"
              name="input-7-4"
              value="Reseña"
              label="Reseña"
              color="#4a2aa7"
              v-model="formResena.resena"
              :rules="[required]"
            ></v-textarea>
            <v-btn class="agregarResenas__btn" color="#4a2aa7" type="submit"
              ><v-icon>mdi-pencil</v-icon>Reseñar</v-btn
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
  data: () => ({
    formResena: {
      cancion: "",
      resena: "",
    },
  }),
  methods: {
    crearResena() {
      if (this.$refs.formResena.validate()) {
        Firebase.firestore()
          .collection("foros")
          .add(this.formResena)
          .then(() => {
            this.$router.push("/resenas");
          })
          .catch(() => {});
      }
    },
    required(value) {
      return !!value || "Este campo es obligatorio";
    },
  },
};
</script>

<style lang="scss">
.agregarResenas {
  background-color: #f6faff;
  border-radius: 20px;
  &__title {
    color: #4a2aa7;
    text-align: center;
    font-size: 30px;
  }
  &__btn {
    color: white;
  }
}
</style>
