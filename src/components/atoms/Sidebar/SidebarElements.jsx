import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
/* import { Link as LinkR } from "react-router-dom"; */
import { FaTimes } from "react-icons/fa";

export const SiderbarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  background-color: rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  `;


export const SidebarMenu = styled.ul`
  width: 50%;
  margin: 0 100px;
  justify-content: center;
  background: #fff;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 60px);
  text-align: center;
  border-radius: 8px;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(5, 60px);
  }
`;

export const CloseIcon = styled(FaTimes)`
  position: relative;
  color: #8233E8;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  `;


export const Icon = styled.div`
  margin-top: 10px;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
  background-color: #fff;
  border-radius: 50px;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SidebarLink = styled(LinkS)`
  margin: 4px 8px 4px 8px;
  background-color:#8233E8;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  border-radius: 4px;
  font-weight: bold;
`;
