import React from "react";
import { IoFilter } from "react-icons/io5";
import "../../styles/css/Button.css";
import { ImSearch } from "react-icons/im";

const Button = ({ handler, children, text, type, isCollapse=false }) => {
  /* 
  TODO falta darle tamaño dependiendo de padre 
  TODO falta darle el manejador de onClick
  TODO mejorar el código para el renderizado
  */
  let Icons = () => {
    switch(type) {
      case "search":
        return <ImSearch className="iconSearch" />;
      case "filter-dark", "filter-light":
        return <IoFilter className="iconFilter" />
    }
  };

  return (
    <button className={`btn ${text ? "btn--text": "btn--notext"} ${isCollapse && "btn--collapse"} ${type=="filter-light" && "btn--light"}`} onClick={handler}>
      {Icons()}
      <p>{text}</p>
    </button>
  );
};

export default Button;
