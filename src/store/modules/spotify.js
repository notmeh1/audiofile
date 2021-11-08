import Axios from "axios";

export const spotifyModule = {
  namespaced: true,
  state: {
    currentData: null,
  },
  getters: {},
  mutations: {
    UPDATE_CURRENT_DATA(state, dataResponse) {
      state.currentData = dataResponse;
    },
  },
  actions: {
    async fetchId({ commit }) {
      const clientId = "a97c91eefb5b468ebc720b375cd75603";
      const clientSecret = "f53fc38924f049509d3edcb9afd89595";

      const serialize = function (obj) {
        const str = [];
        for (const p in obj) {
          // eslint-disable-next-line no-prototype-builtins
          if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
          }
        }
        return str.join("&");
      };

      const tokenResponse = await Axios.post(
        "https://accounts.spotify.com/api/token",
        serialize({ grant_type: "client_credentials" }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization:
              "Basic " +
              new Buffer(`${clientId}:${clientSecret}`).toString("base64"),
          },
        }
      );
      console.log({ tokenResponse });
      const dataResponse = await Axios.get(
        // "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
        "https://api.spotify.com/v1/tracks/4GBJomKlZNRnODfpL299pw?si=4d1784fdc7aa44b7",
        {
          headers: {
            Authorization: `Bearer ${tokenResponse.data.access_token}`,
          },
        }
      );
      const data = dataResponse.data;
      commit("UPDATE_CURRENT_DATA", data);
      console.log(dataResponse);
    },
  },
};
