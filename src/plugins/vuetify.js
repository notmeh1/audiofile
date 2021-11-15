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
        cardBackground: "#e6f1ff",
        textColor: "#2c1967",
        homeBg: "#f4b40e",
        spotifyColor: "#1db954",
      },
    },
  },
});
