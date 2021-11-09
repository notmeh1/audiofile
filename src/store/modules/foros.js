import Firebase from "firebase";

export const forosModule = {
  namespaced: true,
  state: {
    foroList: null,
    songInput: null,
  },
  getters: {
    //searchBySongName(state) {
    //    return state.foroList.filter((song) => song.cancion.toLowerCase().includes(state.songInput))
    //}
  },
  mutations: {
    GET_FORO_LIST(state, list) {
      state.foroList = list;
    },
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
  },
};
