export const spotifyAuthModule = {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    authSpotify() {
      const client_id = "a97c91eefb5b468ebc720b375cd75603";
      const redirect_uri = "http://localhost:8080/";

      var state = generateRandomString(16);

      localStorage.setItem("spotify_auth_state", state);

      function generateRandomString(length) {
        var text = "";
        var possible =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < length; i++) {
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
      }

      const scope = "user-read-private user-read-email";

      let url = "https://accounts.spotify.com/authorize";
      url += "?response_type=token";
      url += "&client_id=" + encodeURIComponent(client_id);
      url += "&scope=" + encodeURIComponent(scope);
      url += "&redirect_uri=" + encodeURIComponent(redirect_uri);
      url += "&state=" + encodeURIComponent(state);
      window.location.href = url;
    },
    handleRedirect() {
      let accessToken = getAccessToken();
      //const redirect_uri = "http://localhost:8080/"
      console.log(accessToken);
      localStorage.setItem("accessToken", accessToken);
      //window.history.pushState("", "", redirect_uri); // remove param from url
      function getAccessToken() {
        let accessToken = null;
        const queryString = window.location.hash;
        if (queryString.length > 0) {
          const url = window.location.href;
          const hash = url.substring(url.indexOf("#") + 1);
          let result = hash.split("&");
          result = result[0].split("=");
          accessToken = result[1];
          return accessToken;
        }
        return accessToken;
      }
      fetchProfileInformation()
      function fetchProfileInformation() {
          const API_ENDPOINT = 'https://api.spotify.com/v1/me';
          let ACCESS_TOKEN = localStorage.getItem('accessToken')
          console.log(ACCESS_TOKEN)
  
          const fetchOptions = {
              method: 'GET',
              headers: new Headers({
                  'Authorization': `Bearer ${ACCESS_TOKEN}`
              })
          };
  
          fetch(API_ENDPOINT, fetchOptions).then(function (response) {
              return response.json();
          }).then(function (json) {
              console.log(json);
          }).catch(function (error) {
              console.log(error);
          });
      }
    },
  },
};
