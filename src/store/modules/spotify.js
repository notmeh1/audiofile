//import Axios from "axios";

export const spotifyModule = {
  namespaced: true,
  state: {
    songIdList: null,
    currentSongData: null,
    songResult: [],
    songList: [],
  },
  getters: {},
  mutations: {
    STORE_SONG_LIST(state, songList) {
      state.songList = songList;
    },
    STORE_SONG_RESULT(state, resultList) {
      state.songResult = resultList;
    },
    STORE_CURRENT_SONG(state, currentData) {
      state.currentSongData = currentData;
    },
    FILTER_SONG_ID(state, songId) {
      let filter = state.songResult.filter((song) => song.id === songId);
      state.songResult = filter;
    },
    CLEAN_SEARCH(state) {
      state.songResult = [];
    },
  },
  actions: {
    fetchSongResult({ commit }, searchInput) {
      const ACCESS_TOKEN = localStorage.getItem("accessToken");
      const fetchOptions = {
        method: "GET",
        headers: new Headers({
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        }),
      };
      fetch(
        `https://api.spotify.com/v1/search?q=track:"${encodeURIComponent(
          searchInput
        )}"&type=track&limit=7`,
        fetchOptions
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          const resultList = json.tracks.items;
          commit("STORE_SONG_RESULT", resultList);
          return resultList;
        });
    },
    filterSongId({ commit }, songId) {
      console.log(songId);
      commit("FILTER_SONG_ID", songId);
    },
    cleanSearch({ commit }) {
      commit("CLEAN_SEARCH");
    },
  },
};
