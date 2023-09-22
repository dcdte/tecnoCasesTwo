import React, { useState } from "react";
import { VectorMap } from "@south-paw/react-vector-maps";
import colombia from "./colombia.json";
import { Modal } from "./Modal/Index";
import Departament from "../../../utils/Departament";
import {
  ColombiaMap,
  SectionMap,
  MapInfo,
  MapH1,
  MapP,
  ContainerMap,
  ContainerMaps,
} from "./MapElements";

const Map = () => {
  const [showModal, setShowModal] = useState(false);

  //traemos los id's de los departamentos para hacer la respectiva comparación
  const openModal = ({ target }) => {
    const ids = [
      "co-ama",
      "co-ant",
      "co-ces",
      "co-nsa",
      "co-san",
      "co-boy",
      "co-cun",
      "co-dc",
      "co-vac",
      "co-cau",
      "co-met",
      "co-guv",
    ];

    Departament.name = target.attributes.name.value;
    const id = target.attributes.id.value;
    console.log(target.attributes.name.value);

    //si los id's no coinciden con el array id's entonces no tiene acciones
    ids.forEach((e) => {
      if (e === id) {
        setShowModal((prev) => !prev);
      }
    });
  };

  const [hovered, setHovered] = React.useState("");

  const layerProps = {
    onMouseEnter: ({ target }) => setHovered(target.attributes.name.value),
    onMouseLeave: ({ target }) => setHovered(""),
  };

  return (
    <>
      <SectionMap>
        <MapInfo>
          <h2>Departamento: {hovered && <code>{hovered}</code>}</h2>
          <MapH1>Estamos ubicados en estos lugares:</MapH1>
          <MapP>¡Clic a tu departamento, ahí nos verás!</MapP>
          <MapP>
            Queremos ver todo el mapa morado, para esto estamos buscando{" "}
            <span>socios estratégicos</span>, si te interesa ser socio de
            tecnosuper, <h4>¡CONTÁCTANOS!</h4>
          </MapP>
        </MapInfo>
        <ContainerMaps>
          <ContainerMap>
            <VectorMap {...colombia} />
          </ContainerMap>
          <ColombiaMap>
            <VectorMap {...colombia} layerProps={layerProps} />
          </ColombiaMap>
        </ContainerMaps>
        <Modal showModal={showModal} setShowModal={setShowModal}></Modal>
      </SectionMap>
    </>
  );
};

export default Map;
