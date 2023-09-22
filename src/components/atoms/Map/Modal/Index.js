import React, { useRef, useEffect, useCallback } from "react";
import { Button } from "./ModalElements";
import { useSpring, animated } from "react-spring";
import Departament from "../../../../utils/Departament";
import {
  Background,
  ModalWrapper,
  ModalImg,
  ModalContent,
  CloseModalButton,
  ContentContainer,
  ContentButton,
} from "./ModalElements";

export const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        console.log("I pressed");
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  let Shops = [];
  function Products() {
    for (let i = 0; i < Departament.stores.length; i++) {
      if (Departament.stores[i]["Nombre_Comercial"].includes("TecnoSuper")) {
        if (
          Departament.stores[i]["Municipio.Departamento"] === Departament.name
        ) {
          Shops.push(Departament.stores[i]);
        }
      }
    }
  }

  function openChat(e) {
    e.preventDefault();
  }

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              {Products()}
              {Shops.map((e) => (
                <ModalContent key={e.ID}>
                  <ModalImg src={e.img} alt="camera" />
                  <ContentContainer>
                    <h1>{e.Nombre_Comercial}</h1>
                    <p>{e.Direccion}</p>
                    <ContentButton href={e.Walink.url}>
                      <Button>WhatsApp</Button>
                    </ContentButton>
                  </ContentContainer>
                </ModalContent>
              ))}
              ;
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
