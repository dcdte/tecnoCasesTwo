import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  background-color: #8233e8;
  width: 100%;
  height: 176px;

  @media screen and (max-width: 1024px) {
    height: 102px;
  }

  @media screen and (max-width: 420px) {
  }
`;

export const IconContainer = styled.div`
  display: flex;
  color: #fff;
  text-align: center;
  justify-content: space-around;
  font-size: 45px;
  margin: 60px 10px 0px 10px;
  width: 100%;

  a {
    display: flex;
    color: #fff;
    text-align: center;
    text-decoration: none;
  }

  p {
    margin: 5px;
    font-size: 30px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 40px;
    margin: 25px 10px 0px 10px;
    width: 100%;

    p {
      margin: 5px;
      font-size: 25px;
    }
  }

  @media screen and (max-width: 420px) {
    font-size: 30px;
    margin: 35px 10px 0px 10px;
    width: 100%;

    p {
      font-size: 15px;
    }
  }
`;