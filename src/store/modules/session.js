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
      const current = Firebase.auth().currentUser
      console.log(current)
      Firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log(user)
          const userData = {
            displayName : user.displayName,
            email : user.email,
            photoURL : user.photoURL,
            rol: "user",
          }
          context.commit("SET_USER", userData)
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
