import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
  {
    path: "/iniciar-sesion",
    name: "Iniciar Sesión",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
  {
    path: "/resenas",
    name: "Reseñas",
    component: () =>
      import(/* webpackChunkName: "reseñas" */ "../views/Resenas.vue"),
  },
  {
    path: "/agregar-resenas",
    name: "Agregar Reseñas",
    component: () =>
      import(
        /* webpackChunkName: "agregar reseñas" */ "../views/AgregarResenas.vue"
      ),
  },
  {
    path: "/resenas/:codigo",
    name: "Reseña",
    component: () =>
      import(/* webpackChunkName: "reseña" */ "../views/Reseña.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
