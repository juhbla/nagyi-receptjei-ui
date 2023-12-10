export const APPLICATION_NAME = "Nagyi receptjei";

const pages = {
  HOME_PAGE: {
    name: "Receptek",
    path: "/",
  },
  RECIPE_PAGE: {
    name: "Recept",
    path: "/recipe/:id",
  },
  REGISTRATION_PAGE: {
    name: "Regisztráció",
    path: "/registration",
  },
  LOGIN_PAGE: {
    name: "Bejelenkezés",
    path: "/login",
  },
  LOGOUT_PAGE: {
    name: "Kijelentkezés",
    path: "/logout",
  },
};

export default pages;
