import React from "react";
import Button from "../components/atoms/Button";
import ButtonDropDown from "../components/atoms/ButtonDropDown";
import Header from "../components/Header";
import "./../styles/css/Home.css";

function Home() {

  /*
    TODO falta componente para alojar button y dropDown (Sidebar)
  */
  return (
    <div>
      <Header />
      <Button text="Aplicar filtros" />
      <ButtonDropDown />
    </div>
  );
}

export default Home;
