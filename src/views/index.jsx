import React, { useState } from "react";
import Sidebar from "../components/atoms/Sidebar";
import Navbar from "../components/atoms/Navbar";
import HeroSection from "../components/atoms/HeroSection";
import InfoSection from "../components/atoms/InfoSection";
import Map from "../components/atoms/Map";
import Bye from "../components/atoms/ByeSection";
import Formulario from "../components/atoms/FormSection";
import Footer from "../components/atoms/Footer";

//Home

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  //función para traer información de las tiendas del zoho
  /*   async function getStores() {
    let shops = await axios.get(
      "https://stormy-chamber-42652.herokuapp.com/tienda"
    );
    return shops.data;
  }

  async function saveData() {
    Departament.stores = await getStores();
  } */

  //saveData();
  (function (d, s, t, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = t;
    js.src =
      "https://app.plazbot.com/Widget/plazbot-archivos/plazbot-chat/Plazbot.frame.js?version=3.3.0.0&var1=" +
      id;
    js.defer = true;
    fjs.parentNode.insertBefore(js, fjs);
  })(document, "script", "id-chat-plazbot", "7da22a7ffb41841bd5d81db7f45f989a");
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <div title="InfoSection" subtitle={"dummyText"} id="InfoSection">
        <InfoSection />
      </div>
      <div title="Map" subtitle={"dummytext"} id="Map">
        <Map />
      </div>
      <div title="Bye" subtitle={"dummytext"} id="Bye">
        <Bye />
      </div>
      <div title="Form" subtitle={"dummyText"} id="Form">
        <Formulario />
      </div>
      <Footer />
      <div id="api-chat-bot"></div>
    </>
  );
};

export default Main;
