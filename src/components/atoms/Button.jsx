import React from "react";
import { RiFilter3Line } from "react-icons/ri";
import '../../styles/css/Button.css'

const Button = (handler, children) => {

  /* 
  TODO falta renderizar sus hijos
  TODO falta darle tamaño dependiendo de padre 
  TODO falta darle el manejador de onClick

  */

  return (
    <button >
      <RiFilter3Line className="iconFilter" />
      <p>Aplicar Filtros</p>
    </button>
  );
};

export default Button;
