import React from "react";
import "./../styles/css/Header.css";
import vector from "./../assets/tecnosuper.svg";
import TextInput from "./atoms/TextInput";

function Header({ withZone = true }) {
  return (
    <header>
      <a href="">
        <img className="header__logo" src={vector} alt="" />
      </a>
      {withZone && (
        <div className="header__container">
          <TextInput />
        </div>
      )}
    </header>
  );
}

export default Header;
