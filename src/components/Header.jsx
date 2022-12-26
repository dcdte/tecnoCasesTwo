import React from "react";
import "./../styles/css/Header.css";
import vector from "./../assets/tecnosuper.svg";
import TextInput from "./atoms/TextInput";
import Button from "./atoms/Button";


function Header({ withZone = true }) {


  const toggleFilter = () => {}

  const toggleSearch = () => {}

  const search = () => {}

  return (
    <header>
      <a href="#">
        <img className="header__logo" src={vector} alt="" />
      </a>
      {withZone && (
        <div className="header__container">
          <TextInput />
          <Button type="filter-light" isCollapse={true} handler={toggleFilter}/>
          <Button type="search" isCollapse={true} handler={toggleSearch}/>
          <Button type="search" handler={search}/>
        </div>
      )}
    </header>
  );
}

export default Header;
