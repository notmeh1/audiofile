import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { sessionModule } from "./modules/session";
import { resenasModule } from "./modules/resenas";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    session: sessionModule,
    resenas: resenasModule,
  },
});
