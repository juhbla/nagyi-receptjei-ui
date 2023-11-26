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
  REGISTER_PAGE: {
    name: "Regisztráció",
    path: "/register",
  },
  LOGIN_PAGE: {
    name: "Bejelenkezés",
    path: "/login",
  },
};

export default pages;
