import Firebase from "firebase";

export const forosModule = {
  namespaced: true,
  state: {
    foroList: null,
    creatorData: null,
    songInput: null,
  },
  getters: {
    filterByPopular(state) {
      return state.foroList.filter((song) => song.like >= 20)
    }
  },
  mutations: {
    GET_FORO_LIST(state, list) {
      state.foroList = list;
    },
    GET_CREATOR_DATA(state, data) {
      state.creatorData = data
    }
  },
  actions: {
     getForoList({commit}) {
      let list = [];
      Firebase.firestore().collection("foros").onSnapshot((doc) => {
        doc.forEach(foro => {
          list.push({id: foro.id, ...foro.data()})
          commit("GET_FORO_LIST", list);
        }, list = [])
      })
    },
    getCreatorData({commit}, uid) {
      Firebase.firestore().collection("usuarios")
      .doc(uid)
      .onSnapshot((doc) => {
        const data = { id: doc.id, ...doc.data() };
        commit("GET_CREATOR_DATA", data)
      });
    }
  },
};
