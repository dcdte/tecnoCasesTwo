import React from "react";
import { IoFilter } from "react-icons/io5";
import "../../styles/css/Button.css";
import { ImSearch } from "react-icons/im";
import { IoCloseSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { showPartialFilters } from "../../store/slices/main/selectors";

const Button = ({
  handler,
  text,
  type,
  light,
  isCollapse = false,
}) => {
  /* 
  TODO falta darle tamaño dependiendo de padre 
  TODO Ea avemaría hermano
  TODO mejorar el código para el renderizado
  */

  const partialFilters = useSelector(showPartialFilters);

  let Icons = () => {
    switch (type) {
      case "search":
        return <ImSearch className="iconSearch" />;
      case "close":
        return <IoCloseSharp className="iconFilter--noText" />;
      case "filter-light":
        return <IoFilter className="iconFilter--noText" />;
      case "filter-dark":
        return <IoFilter className="iconFilter--text" />;
    }
  };

  return (
    <button
      className={`btn ${text ? "btn--text" : "btn--notext"} ${
        isCollapse && "btn--collapse"
      } ${light == "light" && "btn--light"} ${light == "dark" && "btn--dark"}`}
      onClick={() => handler(partialFilters)}
    >
      {Icons()}
      <p>{text}</p>
    </button>
  );
};

export default Button;
