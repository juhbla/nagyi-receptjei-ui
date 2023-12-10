import { BrowserRouter, Routes, Route } from "react-router-dom";

import pages, { APPLICATION_NAME } from "./config/pages";

import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import RecipeProfile from "./pages/RecipeProfile";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Logout from "./pages/Logout";

import "./App.css";

const App = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const { HOME_PAGE, RECIPE_PAGE, REGISTRATION_PAGE, LOGIN_PAGE, LOGOUT_PAGE } =
    pages;

  return (
    <BrowserRouter>
      <Navbar
        title={APPLICATION_NAME}
        homeRoute={HOME_PAGE.path}
        routes={
          user
            ? [{ name: LOGOUT_PAGE.name, path: LOGOUT_PAGE.path }]
            : [{ name: LOGIN_PAGE.name, path: LOGIN_PAGE.path }]
        }
        additionalText={user ? `Bejelentkezve, mint: ${user.username}` : ""}
      />
      <main className="container-fluid">
        <Routes>
          <Route
            exact
            path={HOME_PAGE.path}
            element={<Home pageName={HOME_PAGE.name} />}
          />
          <Route
            exact
            path={RECIPE_PAGE.path}
            element={<RecipeProfile pageName={RECIPE_PAGE.name} />}
          />
          <Route
            exact
            path={REGISTRATION_PAGE.path}
            element={<Registration pageName={REGISTRATION_PAGE.name} />}
          />
          <Route
            exact
            path={LOGIN_PAGE.path}
            element={
              <Login
                pageName={LOGIN_PAGE.name}
                registrationPagePath={REGISTRATION_PAGE.path}
              />
            }
          />
          <Route exact path={LOGOUT_PAGE.path} element={<Logout />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
