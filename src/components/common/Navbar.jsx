import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ title, homeRoute, routes }) => {
  const [isOpen, setIsOpen] = useState(true);

  const getNavbarTogglerClass = () => "navbar-toggler";

  const toggle = () => setIsOpen(!isOpen);

  const getNavbarCollapseClass = () =>
    "navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse";

  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-dark bg-dark border-bottom box-shadow mb-3">
        <div className="container">
          <Link className="navbar-brand" to={homeRoute}>
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
