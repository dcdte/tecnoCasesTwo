import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: #fff;
  height: 80px;
  /* margin-top: -80px;  */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: red;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;

  img {
    width: 100px;
    margin-left: -20px;
  }
`;

export const MobileIcons = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 50%;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  margin-right: 20px;
  cursor: pointer;
  color: #8233e8;
  border-bottom: 1px solid #8233e8;
  transition: 0.2s;
  font-weight: bold;

  &:active {
    border-bottom: 3px solid #8233e8;
  }

  &:hover {
    background-color: #8233e8;
    color: #fff;
    border-radius: 10px;
  }
`;

export const NavLinks2 = styled(LinkS)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  margin-right: 20px;
  cursor: pointer;
  color: #fff;
  border-bottom: 1px solid #8233e8;
  transition: 0.2s;
  font-weight: bold;
  background: #8233e8;
  border-radius: 10px;

  &:active {
    border-bottom: 3px solid #8233e8;
  }

  &:hover {
    background-color: #8233e8;
    color: #fff;
    scale: 1.1;
  }
`;
