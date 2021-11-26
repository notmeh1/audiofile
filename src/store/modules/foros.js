import Firebase from "firebase";

export const forosModule = {
  namespaced: true,
  state: {
    foroList: null,
    creatorData: null,
    songInput: null,
    searchInput: "",
  },
  getters: {
    filterByPopular(state) {
      return state.foroList.filter((song) => song.like >= 20);
    },
    filterByName(state) {
      return state.foroList.filter((song) =>
        song.songName.toLowerCase().includes(state.searchInput.toLowerCase()) ||
        song.songArtistOne.toLowerCase().includes(state.searchInput.toLowerCase())
      );
    }
  },
  mutations: {
    GET_FORO_LIST(state, list) {
      state.foroList = list;
    },
    GET_CREATOR_DATA(state, data) {
      state.creatorData = data;
    },
    FITER_INPUT(state, searchInput) {
      state.searchInput = searchInput
    }
  },
  actions: {
    getForoList({ commit }) {
      let list = [];
      Firebase.firestore()
        .collection("foros")
        .onSnapshot((doc) => {
          doc.forEach((foro) => {
            list.push({ id: foro.id, ...foro.data() });
            commit("GET_FORO_LIST", list);
          }, (list = []));
        });
    },
    getCreatorData({ commit }, uid) {
      Firebase.firestore()
        .collection("usuarios")
        .doc(uid)
        .onSnapshot((doc) => {
          const data = { id: doc.id, ...doc.data() };
          commit("GET_CREATOR_DATA", data);
        });
    },
    filterInput({commit}, searchInput) {
      commit('FITER_INPUT', searchInput)
    }
  },
};
