import React from "react";
import "./HeaderStyle.css";

export const Header = () => {
  return (
    <header className="header">
      <div>
        <h1 className="title">Nagyi kedvenc receptjei</h1>
        <p className="alt">Egy csipet szeretettel </p>
      </div>
    </header>
  );
};

export default Header;
