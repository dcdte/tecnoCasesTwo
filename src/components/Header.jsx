import React from "react";
import "./../styles/css/Header.css";
import vector from "./../assets/tecnosuper.svg";

function Header({ withZone = true }) {
  return (
    <header>
      <a href="">
        <img className="header__logo" src={vector} alt="" />
      </a>
      {withZone && (
        <div className="header__container">{/* aquí va la searchbar */}</div>
      )}
    </header>
  );
}

export default Header;
