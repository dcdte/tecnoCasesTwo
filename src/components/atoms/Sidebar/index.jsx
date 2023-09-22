import React from "react";
import {
  SiderbarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  function openZoho(e) {
    e.preventDefault();
    window.location.href = 'https://zoho.tecnosuper.com.co/';
  }

  return (
    <SiderbarContainer isOpen={isOpen} onClick={toggle}>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink id="one" to="InfoSection" onClick={toggle}>
            Beneficios
          </SidebarLink>
          <SidebarLink to="Map" onClick={toggle}>
            Tiendas
          </SidebarLink>
          <SidebarLink to="Bye" onClick={toggle}>
            Conócenos
          </SidebarLink>
          <SidebarLink id="two" to="Form" onClick={toggle}>
            Contactanos
          </SidebarLink>
          <SidebarLink id="two" onClick={openZoho} to="">
            Usuarios
          </SidebarLink>
        </SidebarMenu>
        <Icon>
          <CloseIcon onClick={toggle} />
        </Icon>
      </SidebarWrapper>
    </SiderbarContainer>
  );
};

export default Sidebar;
