import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  options: {
    customProperties: true,
  },
  theme: {
    themes: {
      light: {
        primary: "#581EFF",
        secondary: "#3A2085",
        tertiary: "#E7EDFF",
        cardBackground: "#F6FAFF",
      },
    },
  },
});
