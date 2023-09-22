import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcons,
  NavMenu,
  NavLinks,
  NavItem,
  NavLinks2
} from "./NavbarElements";

const Navbar = ({ toggle, Users }) => {

  function openZoho(e) {
    e.preventDefault();
    window.location.href = 'https://zoho.tecnosuper.com.co/';
  }
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo 
                to="H/"
                >
            <img src={require("../../../assets/Logo_2.png")} alt="" />
          </NavLogo>
          <MobileIcons onClick={toggle}>
            <FaBars />
          </MobileIcons>
          <NavMenu>
            <NavItem>
              <NavLinks
                activeClass="active"
                to="InfoSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Beneficios
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                activeClass="active"
                to="Map"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Tiendas
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                activeClass="active"
                to="Bye"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Conócenos
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                activeClass="active"
                to="Form"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contáctanos
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks2
                className={Users}
                onClick={openZoho}
                to = "InfoSection"
              >
                Usuarios
              </NavLinks2>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
