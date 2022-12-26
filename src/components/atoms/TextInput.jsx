import React from "react";
import "../../styles/css/TextInput.css";

const TextInput = ({value, setValue, placeHolder}) => {

  /* 
    TODO Se necesita alojar dentro de un container para asignarle su tamaño
    TODO Se necesita hacer las funciones de busqueda que ejecutará este componente
    TODO se necesita traer el placeHolder desde su
    * * Los estilos están en la carpeta de sass llamado TextInput.css
    ! * el value se asigna y se queda completamente en el input
  */ 

  return (
    <input
      //value={value}-
      type="text"
      placeholder='Marca o Referencia'
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default TextInput;
