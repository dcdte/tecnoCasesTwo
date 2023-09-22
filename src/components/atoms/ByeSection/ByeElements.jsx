import styled from "styled-components";
import EquipmentImg from "../../../assets/Equipment.png";

export const ContainerBye = styled.div`
  width: 100%;
  height: 791px;
  background-image: linear-gradient(
      rgba(130, 51, 232, 0.8),
      rgba(130, 51, 232, 0.8)
    ),
    url(${EquipmentImg});
  background-size: cover  ;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  h1 {
    font-size: 82px;
    padding: 30px;
    color: #fff;
  }

  p {
    padding: 0px 30px 30px 30px;
    font-size: 27px;
    color: #fff;
  }

  @media screen and (max-width: 1024px) {
    height: 458px;

    h1 {
      font-size: 48px;
      padding: 45px;
    }

    p {
      padding: 0px 50px 30px 50px;
      font-size: 16px;
      color: #fff;
    }
  }

  @media screen and (max-width: 420px) {
    height: 333px;

    h1 {
      font-size: 40px;
      padding: 30px;
      color: #fff;
    }

    p {
      padding: 0px 30px 30px 30px;
      font-size: 14px;
      color: #fff;
    }
  }
`;
