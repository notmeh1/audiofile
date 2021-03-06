import Vue from "vue";
import VueRouter from "vue-router";
import Store from "../store";

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
    path: "/registrarse",
    name: "Registrarse",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Register.vue"),
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
    meta: {
      requiredLogin: true,
    },
  },
  {
    path: "/resenas/:id",
    name: "Reseña",
    component: () =>
      import(/* webpackChunkName: "reseña" */ "../views/Reseña.vue"),
  },
  {
    path: "/perfil",
    name: "Perfil",
    component: () =>
      import(/* webpackChunkName: "perfil" */ "../views/Perfil.vue"),
    meta: {
      requiredLogin: true,
    },
  },
  {
    path: "/perfil/userlist",
    name: "Userlist",
    component: () =>
    import(/* webpackChunkName: "userlist" */ "../views/admin/userList.vue"),
  },
  {
    path: "/perfil/forolist",
    name: "Forolist",
    component: () =>
    import(/* webpackChunkName: "forolist" */ "../views/admin/foroList.vue"),
  },
  {
    path: "/editarResena/:id",
    name: "Editar Reseña",
    component: () =>
      import(/* webpackChunkName: "reseña" */ "../views/EditarResena.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const currentUser = Store.state.session.user; // {user} | null
  const requiredLogin = to.meta.requiredLogin; // undefined | true

  if (requiredLogin) {
    if (currentUser) {
      next();
    } else {
      next({ name: "Iniciar Sesión" });
    }
  } else {
    next();
  }
});

export default router;
