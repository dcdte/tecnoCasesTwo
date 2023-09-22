import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { Link } from "react-scroll";

export const Background = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1091px;

  @media screen and (max-width: 1024px) {
    height: 1113px;
  }

  @media screen and (max-width: 420px) {
    height: 857px;
  }
`;

export const ModalWrapper = styled.div`
  width: 1302px;
  height: 190px;
  background: transparent;
  display: flex;
  z-index: 10;
  border-radius: 20px;
  justify-content: center;
  text-align: center;

  @media screen and (max-width: 1024px) {
    width: 588px;
    height: 1052px;
    flex-direction: column;
  }

  @media screen and (max-width: 420px) {
    overflow-y: scroll;
    width: 350px;
    height: 627px;
    overflow-y: scroll;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #141414;
  background: #fff;
  border-radius: 5px;
  padding: 15px;
  margin: 0px 10px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 420px) {
    width: 350px;
    height: 178px;
  }

  h1 {
    font-size: 22px;
    color: #8233e8;
  }

  p {
    margin-top: 30px;
    font-size: 14px;
    margin-top: 15px;
  }

  a {
    color: #e13f4c;
    text-decoration: none;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
`;

export const ModalImg = styled.img`
  width: 153px;
  height: 153px;
  border-radius: 10px;
  background: #000;
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  display: flex;
  text-align: center;
  justify-content: center;
  right: 610px;
  width: 64px;
  height: 64px;
  padding: 0;
  z-index: 10;
  background-color: #fff;
  border-radius: 40px;
  color: #8233e8;
  display: none;

  @media screen and (max-width: 1024px) {
    right: 260px;
  }

  @media screen and (max-width: 420px) {
    width: 40px;
    height: 40px;
    margin-left: 160px;
  }
`;

export const ContentButton = styled.a`
  background-color: #8233e8;
  color: #fff;
  padding: 3px;
  border-radius: 10px;
  cursor: pointer; 
`;

export const Button = styled.button`
  background-color: #8233e8;
  color: #fff;
  padding: 3px;
  border-style: none;
  margin: 10px;
  font-weight: bold;
  padding: 2px 10px;
  cursor: pointer;

  a {
    text-decoration: none; 
    color: #fff; 
  }
`;
