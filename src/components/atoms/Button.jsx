import React from "react";
import { RiFilter3Line } from "react-icons/ri";
import "../../styles/css/Button.css";
import { MdOutlineSearch } from "react-icons/md";

const Button = ({ handler, children, text }) => {
  /* 
  TODO falta darle tamaño dependiendo de padre 
  TODO falta darle el manejador de onClick
  TODO mejorar el código para el renderizado
  */
  let Icons = (text) => {
    if (text) {
      return <RiFilter3Line className="iconFilter" />;
    } else {
      return <MdOutlineSearch className="iconSearch" />;
    }
  };

  return (
    <button>
      {Icons(text)}
      <p>{text}</p>
    </button>
  );
};

export default Button;
