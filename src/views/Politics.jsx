import React, { useState } from "react";
import Navbar from "../components/atoms/Navbar";
import "../styles/css/politics.css";

export const Politics = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <div className="container">
        <div className="container__politics">
          <h1>Política de Tratamiento de Datos Personales </h1>
          <h3>1. Objetivo:</h3>
          <p>
            La presente política tiene como objetivo garantizar el derecho
            constitucional de todas las personas a conocer, actualizar,
            rectificar y suprimir la información que se haya recogido sobre
            ellas, en cumplimiento de la ley 1581 de 2012 y demás normas
            aplicables.
          </p>
          <h3>2. Alcance:</h3>
          <p>
            Esta política se aplica a todas las personas, en especial a los
            administradores del manejo de datos personales, así como a los
            encargados del tratamiento de datos personales.
          </p>
          <h3>3. Tratamiento y Finalidad:</h3>
          <p>
            Se establece el deber de acreditar la puesta a disposición de las
            políticas de tratamiento de información, así como el contenido
            mínimo del aviso de privacidad.
          </p>
          <h3>4. Deberes:</h3>
          <p>
            La entidad se compromete a garantizar la seguridad, transparencia y
            libertad en el tratamiento de los datos personales, bajo el
            consentimiento previo, expreso e informado del titular de la
            información.
          </p>
          <h3>5. Derechos de los Titulares:</h3>
          <p>
            Los titulares de los datos personales tienen derecho a conocer,
            actualizar, rectificar y suprimir su información, así como a
            solicitar prueba de la autorización otorgada a la entidad para el
            tratamiento de sus datos.
          </p>
          <h3>6. Autorización de Chacam Trading SAS:</h3>
          <p>
            En cumplimiento de la ley 1581 de 2012, Chacam Trading SAS solicita
            la autorización para el tratamiento de datos personales,
            comprometiéndose a cumplir con los deberes y garantizar los derechos
            de los titulares de la información.
          </p>
          <span>
            Este modelo de política de tratamiento de datos personales se basa
            en las disposiciones de la ley 1581 de 2012 y tiene como finalidad
            garantizar el adecuado tratamiento y protección de los datos
            personales en cumplimiento de la normativa colombiana, incluyendo a
            Chacam Trading SAS
          </span>
        </div>
      </div>
    </>
  );
};
