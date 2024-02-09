import React from "react";
import { MdOutlineFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FooterContainer, IconContainer, LinkTerms } from "./FooterElements";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <IconContainer>
          <a href="https://es-la.facebook.com/pages/category/Mobile-Phone-Shop/Tecnosuperco-111939800431233/">
            <MdOutlineFacebook />
            <p>TecnoSuper</p>
          </a>
        </IconContainer>
        <a href="https://www.tecnosuper.com.co/politics" target="_blank">
          Politica y tratamiento de datos
        </a>
        <IconContainer>
          <a href="https://www.instagram.com/tecnosuper.co/">
            <FaInstagram />
            <p>@tecnosuper.co</p>
          </a>
        </IconContainer>
      </FooterContainer>
    </>
  );
};

export default Footer;
