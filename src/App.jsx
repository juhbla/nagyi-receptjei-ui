import { BrowserRouter, Routes, Route } from "react-router-dom";

import pages, { APPLICATION_NAME } from "./config/pages";

import Navbar from "./components/common/Navbar";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Admin } from "./pages/Admin";

import "./App.css";

const App = () => {
  const { HOME_PAGE, REGISTER_PAGE, LOGIN_PAGE, ADMIN_PAGE } = pages;

  return (
    <BrowserRouter>
      <Navbar
        title={APPLICATION_NAME}
        homeRoute={HOME_PAGE.path}
        routes={[
          { name: REGISTER_PAGE.name, path: REGISTER_PAGE.path },
          { name: LOGIN_PAGE.name, path: LOGIN_PAGE.path },
          { name: ADMIN_PAGE.name, path: ADMIN_PAGE.path },
        ]}
      />
      <main className="container">
        <Routes>
          <Route
            exact
            path={HOME_PAGE.path}
            element={<Home pageName={HOME_PAGE.name} />}
          />
          <Route
            exact
            path={REGISTER_PAGE.path}
            element={<Register pageName={REGISTER_PAGE.name} />}
          />
          <Route
            exact
            path={ADMIN_PAGE.path}
            element={<Admin pageName={ADMIN_PAGE.name} />}
          />
          <Route
            exact
            path={LOGIN_PAGE.path}
            element={<Login pageName={LOGIN_PAGE.name} />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
