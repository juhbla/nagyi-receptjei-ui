import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "../../images/logo.png";
const Navbar = ({ title, homeRoute, routes }) => {
  const [isOpen, setIsOpen] = useState(true);

  const getNavbarTogglerClass = () => "navbar-toggler";

  const toggle = () => setIsOpen(!isOpen);

  const getNavbarCollapseClass = () =>
    "navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse";

  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-dark bg-danger border-bottom box-shadow mb-2">
        <div className="container">
          <Link className="navbar-brand" to={homeRoute}>
            <img
              src={logoImage}
              alt="Logo"
              style={{ width: "70px", height: "70px", marginRight: "10px" }}
            />
            {title}
          </Link>
          <button
            className={
              isOpen
                ? getNavbarTogglerClass()
                : `${getNavbarTogglerClass()} collapsed`
            }
            type="button"
            onClick={toggle}
            data-toggle="collapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className={
              isOpen
                ? getNavbarCollapseClass()
                : `${getNavbarCollapseClass()} show`
            }
          >
            <div className="navbar-nav flex-grow">
              {routes.map(({ name, path }) => (
                <Link key={name} className="nav-item nav-link" to={path}>
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
