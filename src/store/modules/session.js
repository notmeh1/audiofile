import Firebase from "firebase";
import { db } from "../../plugins/firebase";
import store from "../../store/index";
import Router from "../../router";

export const sessionModule = {
  namespaced: true,
  state: {
    user: null,
    userList: null,
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
    GET_USER_LIST(state, list) {
      state.userList = list
    }
  },

  actions: {
    subscribeToAuthStateChange(context) {
      Firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          db.collection("usuarios")
            .doc(user.uid)
            .onSnapshot((doc) => {
              const data = { id: doc.id, ...doc.data() };
              context.commit("SET_USER", data);
            });
        } else {
          context.commit("SET_USER", null);
        }
      });
    },
    getUserList({commit}) {
      let list = [];
      db.collection("usuarios").onSnapshot((doc) => {
        doc.forEach((user) => {
          list.push({id: user.id, ...user.data()})
          commit("GET_USER_LIST", list);
        }, list = [])
      })
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
      store.commit("spotifyAuth/CLEAN_SPOTIFY_USER_DATA");
      commit("CLEAN_USER");
    },
  },
};
