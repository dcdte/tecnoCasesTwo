import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormContainer, ContainerField, CampsLayout } from "./FormElements";
import emailjs from "emailjs-com";

const Formulario = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

  function enviarEmail(e) {
    //console.log(e.target)
    e.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let mensaje = document.getElementById("mensaje").value;
    const numero = 573116853300
    var win = window.open(`https://wa.me/${numero}?text=Hola%20Mi%20Nombre%20es%20${nombre}%20${apellido}%20${mensaje}`)
    //console.log(nombre);
    /* emailjs
      .sendForm(
        "service_qiif7wt",
        "template_xqv1b1h",
        e.target,
        "AjwuhwVnyaZSFZYbf"
      )
      .then((res) => {
        alert("Se ha enviado correctamente.");
        console.log(res);
      }); */
  }

  return (
    <>
      <Formik
        initialValues={{
          nombre: "",
          apellido: "",
          telefono: "",
          correo: "",
          mensaje: "",
        }}
        validate={(valores) => {
          const errores = {};

          //validación del nombre
          if (!valores.nombre) {
            errores.nombre = "Por favor ingresa un nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            errores.nombre = "El nombre solo puede contener letras y espacios";
          }

          //validación del nombre
          if (!valores.apellido) {
            errores.apellido = "Por favor ingresa un apellido";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellido)) {
            errores.apellido =
              "El apellido solo puede contener letras y espacios";
          }

          //validación del telefono
          if (!valores.telefono) {
            errores.telefono = "Por favor ingresa un teléfono";
          } else if (!/^\d{10}$/.test(valores.telefono)) {
            errores.telefono = "Ingrese un número de télefono válido";
          }

          if (!valores.correo) {
            errores.correo = "Por favor ingresa un correo";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.correo
            )
          ) {
            errores.correo = "Ingresa un correo válido";
          }

          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          console.log("Formulario Enviado");
          cambiarFormularioEnviado(true);
          setTimeout(() => cambiarFormularioEnviado(false), 5000);
        }}
      >
        {({ errors }) => (
          <FormContainer>
            <h1>¡Contáctanos!</h1>
            <Form className="formulario" onSubmit={enviarEmail}>
              <CampsLayout>
                <ContainerField>
                  <Field
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder="Gustavo"
                  />

                  <ErrorMessage
                    name="nombre"
                    component={() => (
                      <div className="error">{errors.nombre}</div>
                    )}
                  />
                </ContainerField>

                <ContainerField>
                  <Field
                    type="text"
                    id="apellido"
                    name="apellido"
                    placeholder="López"
                  />
                  <ErrorMessage
                    name="apellido"
                    component={() => (
                      <div className="error">{errors.apellido}</div>
                    )}
                  />
                </ContainerField>
              </CampsLayout>

              <ContainerField>
                <Field
                  name="mensaje"
                  as="textarea"
                  placeholder="¡Hola, me interesa comprar!"
                  id="mensaje"
                />
              </ContainerField>

              <button type="submit">Enviar</button>
              {formularioEnviado && (
                <p className="exito">Formulario enviado con Éxito!</p>
              )}
            </Form>
          </FormContainer>
        )}
      </Formik>
    </>
  );
};

export default Formulario;
