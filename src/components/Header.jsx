import React from "react";
import "./../styles/css/Header.css";
import vector from "./../assets/tecnosuper.svg";
import TextInput from "./atoms/TextInput";
import Button from "./atoms/Button";

function Header({
  isToggle,
  setIsToggle,
  isSearchToggle,
  setIsSearchToggle,
  withZone = true,
}) {
  const toggleFilter = () => {
    setIsToggle((prev) => !prev);
  };

  const toggleSearch = () => {
    setIsSearchToggle((prev) => !prev);
  };

  const search = () => {};

  return (
    <header>
      <a href="#">
        <img className="header__logo" src={vector} alt="" />
      </a>
      {withZone && (
        <div className="header__container">
          <TextInput placeholder="Marca o Referencia" />
          {!isToggle && !isSearchToggle && (
            <>
              <Button
                type="filter-light"
                light="light"
                isCollapse={true}
                handler={toggleFilter}
              />
              <Button type="search" isCollapse={true} handler={toggleSearch} />
            </>
          )}
          {isToggle && (
            <Button
              type="close"
              light="light"
              isCollapse={true}
              handler={toggleFilter}
            />
          )}
          {isSearchToggle && (
            <Button
              type="close"
              light="light"
              isCollapse={true}
              handler={toggleSearch}
            />
          )}

          <Button type="search" handler={search} />
        </div>
      )}
    </header>
  );
}

export default Header;
