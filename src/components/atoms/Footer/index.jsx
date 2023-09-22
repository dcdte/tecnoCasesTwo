import React from "react";
import { MdOutlineFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FooterContainer, IconContainer } from "./FooterElements";

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
