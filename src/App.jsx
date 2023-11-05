import { BrowserRouter, Routes, Route } from "react-router-dom";

import pages, { APPLICATION_NAME } from "./config/pages";

import { Home } from "./pages/Home";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Admin } from "./pages/Admin";

import "./App.css";

function App() {
  const { HOME_PAGE, REGISTER_PAGE, LOGIN_PAGE, ADMIN_PAGE } = pages;

  return (
    <BrowserRouter>
      <main className="container">
        <h1>{APPLICATION_NAME}</h1>
        <Routes>
          <Route exact path={HOME_PAGE.path} element={<Home />} />
          <Route exact path={REGISTER_PAGE.path} element={<Register />} />
          <Route exact path={ADMIN_PAGE.path} element={<Admin />} />
          <Route exact path={LOGIN_PAGE.path} element={<Login />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
