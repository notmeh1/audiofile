import Firebase from "firebase";
import Router from "../../router";

export const sessionModule = {
  namespaced: true,
  state: {
    user: null,
  },

  getters: {
    isAdmin(state) {
      return state.user.rol === "admin";
    },
    isUser(state) {
      return state.user.rol === "user";
    },
  },

  mutations: {
    SET_USER(state, newUser) {
      state.user = newUser;
    },
    CLEAN_USER(state) {
      state.user = null;
      Router.push({ name: "Home" });
    },
  },

  actions: {
    subscribeToAuthStateChange(context) {
      Firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          Firebase.firestore()
            .collection("usuarios")
            .get()
            .then((documents) => {
              const newUser = {
                email: user.email,
                rol: "user",
                name: "",
              };
              documents.forEach((document) => {
                const data = document.data();
                if (data.email === user.email) {
                  newUser.rol = data.rol;
                  newUser.id = document.id;
                  newUser.name = data.name;
                }
              });
              context.commit("SET_USER", { ...newUser });
            });
        } else {
          context.commit("SET_USER", null);
        }
      });
    },
    async signIn(_context, credentials) {
      await Firebase.auth().signInWithEmailAndPassword(
        credentials.email,
        credentials.password
      );
      Router.push({ name: "Home" });
    },
    async signOut({ commit }) {
      await Firebase.auth().signOut();
      commit("CLEAN_USER");
    },
  },
};
