import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "../../images/logo.png";
const Navbar = ({ title, homeRoute, routes, additionalText }) => {
  const [isOpen, setIsOpen] = useState(true);

  const getNavbarTogglerClass = () => "navbar-toggler";

  const toggle = () => setIsOpen(!isOpen);

  const getNavbarCollapseClass = () =>
    "navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse";

  const displayAdditionalText = () => {
    return <a className="nav-item nav-link">{additionalText}</a>;
  };

  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-dark bg-danger border-bottom box-shadow">
        <div className="container-fluid">
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
              {displayAdditionalText()}
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
