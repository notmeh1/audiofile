import Firebase from "firebase";

export const resenasModule = {
  namespaced: true,
  state: {
    data: [],
  },
  mutations: {
    SET_RESENAS_DATA(state, nuevaResena) {
      state.data = nuevaResena;
    },
  },
  actions: {
    traerTodasLasResenas(context) {
      Firebase.firestore()
        .collection("foros")
        .get()
        .then((documents) => {
          const resenas = [];
          documents.forEach((document) => {
            resenas.push({ id: document.id, ...document.data() });
          });
          context.commit("SET_RESENAS_DATA", resenas);
        });
    },
  },
};
