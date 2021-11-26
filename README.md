# Audiofile

## ¿Qué es Audiofile?
Audiofile es una plataforma social donde se pueden crear foros de música con la ayuda del API de spotify.

## ¿Qué funciones hay en Audiofile?
- Creación de reseñas de canciones.
- Edición de reseñas propias.
- Valorar reseñas de otros usuarios.
- Comentar reseñas de otros usuarios.
- (Admin) Administrar reseñas de los usuarios (CRUD).
- (Admin) Administrar roles de usuarios.

### Instalar aplicación
```
yarn install
```

### Configurar aplicación
En el archivo ```spotifyAuth.js``` ubicado en ```/src/store/modules```
Cambiar el valor de ```redirect_uri``` por el puerto que se desee utilizar como callback del login de Spotify, por defecto es: ```https://localhost:8080/```.
Una vez hecho esto agregar el mismo puerto utilizado en el ```dashboard de la aplicación de Spotify```.

## Preview de la aplicación en funcionamiento.
https://audiofile-61a00.web.app/
### Wireframe y diseño final de la aplicación

 [Link del Wireframe](https://www.notion.so/Grupo-5-Audiofile-60865634bca441b6a4163afdc53edb1b#6e7f0bc3246644678562ef27e95a3737) <br/>
 [Link del Diseño Final](https://www.notion.so/Grupo-5-Audiofile-60865634bca441b6a4163afdc53edb1b#3246887022014226a3924c58066dc0cf)
 
## Aplicaciones utilizadas:
- Vue
- Vue Router
- Vuex
- Vuetify
- Spotify API
- Sass
