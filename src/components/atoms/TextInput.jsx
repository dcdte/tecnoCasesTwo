import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../store/slices/main";
import { showFilters } from "../../store/slices/main/selectors";
import "../../styles/css/TextInput.css";

const TextInput = ({ value, setValue, placeholder }) => {
  /* 
    TODO Se necesita alojar dentro de un container para asignarle su tamaño
    TODO Se necesita hacer las funciones de busqueda que ejecutará este componente
    TODO se necesita traer el placeHolder desde su
    * * Los estilos están en la carpeta de sass llamado TextInput.css
    ! * el value se asigna y se queda completamente en el input

  */

  const dispatch = useDispatch();
  const filters = useSelector(showFilters);

  const submit = (e, filters) => {
    if (e.keyCode == 13) {
      console.log(e.target.value);
      const partial = {...filters};
      partial.searchValue = e.target.value.trim();
      dispatch(setFilters(partial));
      setValue("");
    } 
  };

  return (
    <input
      //value={value}-
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={(e) => submit(e, filters)}
    />
  );
};

export default TextInput;
