import React, { useState } from "react";
import "./../styles/css/Header.css";
import vector from "./../assets/LogoCases2.svg";
import TextInput from "./atoms/TextInput";
import Button from "./atoms/Button";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../store/slices/main";
import { showFilters } from "../store/slices/main/selectors";

function Header({
  isToggle,
  setIsToggle,
  isSearchToggle,
  setIsSearchToggle,
  withZone = true,
  searchValue,
  setSearchValue,
  search,
}) {
  const toggleFilter = () => {
    setIsToggle((prev) => !prev);
  };
  const filters = useSelector(showFilters);

  const toggleSearch = () => {
    setIsSearchToggle((prev) => !prev);
  };

  return (
    <header className="header">
      <a href="#">
        <img className="header__logo" src={vector} alt="" />
      </a>
      {withZone && (
        <div className="header__container">
          <TextInput
            value={searchValue}
            setValue={setSearchValue}
            placeholder="Buscar por marca o referencia"
            field="searchValue"
            type="text"
          />
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

          <Button type="search" handler={() => search(searchValue, filters)} />
        </div>
      )}
    </header>
  );
}

export default Header;
