import Vue from "vue";
import Vuex from "vuex";
import { spotifyModule } from "./modules/spotify";
import { spotifyAuthModule } from "./modules/spotifyAuth";
import { forosModule } from "./modules/foros";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    spotify: spotifyModule,
    foros: forosModule,
    spotifyAuth: spotifyAuthModule,
  },
});
