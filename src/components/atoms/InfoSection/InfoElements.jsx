import styled from "styled-components";
import grandfhater from "../../images/grandfhater.png";
import women1 from "../../images/women.png";
import women2 from "../../images/women2.png";
import EquipmentImage from "../../images/Equipment.png";

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 2650px;

  @media screen and (max-width: 1024px) {
    height: 1750px;
  }

  @media screen and (max-width: 420px) {
    height: 1665px;
  }
`;

export const InfoContentOne = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  font-weight: bold;
  background-color: #8233e8;
  color: #fff;
  font-size: 82px;
  z-index: 1;
  height: 450px;
  padding: 120px 60px 0px 60px;

  @media screen and (max-width: 1024px) {
    padding: 0;
    padding-top: 100px;
    height: 350px;
    font-size: 48px;
  }

  @media screen and (max-width: 420px) {
    padding: 0;
    padding-top: 45px;
  }
`;

export const InfoContentTwo = styled.div`
  display: flex;
  text-align: center;
  height: 550px;

  @media screen and (max-width: 1024px) {
    height: 350px;
  }

  @media screen and (max-width: 420px) {
    background-image: linear-gradient(
        rgba(225, 63, 76, 0.8),
        rgba(225, 63, 76, 0.8)
      ),
      url(${grandfhater});
    background-size: cover;
    background-position: center;
  }
`;

export const InfoContentCredit = styled.div`
  padding-top: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding-top: 15px;
  }

  @media screen and (max-width: 420px) {
  }
`;

export const CardIconContainer = styled.div`
  color: #e13f4c;
  font-size: 90px;

  @media screen and (max-width: 1024px) {
    font-size: 60px;
  }

  @media screen and (max-width: 420px) {
    font-size: 50px;
    color: #fff;
  }
`;

export const CreditH1 = styled.h1`
  font-weight: bold;
  color: #e13f4c;
  font-size: 82.96px;

  @media screen and (max-width: 1024px) {
    font-size: 48px;
  }

  @media screen and (max-width: 420px) {
    font-size: 40px;
    color: #fff;
  }
`;

export const CreditP = styled.p`
  color: #e13f4c;
  font-size: 27px;
  padding: 0px 60px;

  @media screen and (max-width: 1024px) {
    font-size: 16px;
    padding: 0px 30px;
  }

  @media screen and (max-width: 420px) {
    color: #fff;
    font-size: 14px;
  }
`;

export const InfoContentMan = styled.div`
  background-image: url(${grandfhater});
  background-size: cover;
  background-position: center;
  width: 100%;
  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 420px) {
    display: none;
  }
`;

export const InfoContentThree = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  background-image: linear-gradient(
      rgba(130, 51, 232, 0.8),
      rgba(130, 51, 232, 0.8)
    ),
    url(${women2});
  background-size: cover;
  background-position: center;
  color: white;
  height: 550px;
  padding: 0px 50px;

  @media screen and (max-width: 1024px) {
    height: 350px;
    padding: 30px 30px 0px 30px;
  }

  @media screen and (max-width: 420px) {
    padding: 30px 30px 0px 30px;
  }
`;

export const ReceiptIconContainer = styled.div`
  font-size: 90px;
  color: #fff;

  @media screen and (max-width: 1024px) {
    font-size: 50px;
  }
`;

export const ThreeH1 = styled.h1`
  font-size: 82.96px;

  @media screen and (max-width: 1024px) {
    font-size: 48px;
  }

  @media screen and (max-width: 420px) {
    font-size: 40px;
  }
`;

export const ThreeP = styled.p`
  font-size: 27px;
  padding: 20px 40px 0px 40px;

  @media screen and (max-width: 1024px) {
    font-size: 16px;
    padding: 30px 200px 0px 200px;
  }

  @media screen and (max-width: 420px) {
    padding: 0;
  }
`;

export const InfoContentFour = styled.div`
  display: flex;
  text-align: center;
  height: 550px;

  @media screen and (max-width: 1024px) {
    height: 350px;
  }

  @media screen and (max-width: 420px) {
    background-image: linear-gradient(
        rgba(225, 63, 76, 0.8),
        rgba(225, 63, 76, 0.8)
      ),
      url(${women1});
    background-size: cover;
    background-position: center;
  }
`;

export const InfoContentWomen = styled.div`
  background-image: url(${women1});
  background-size: cover;
  background-position: center;
  width: 100%;

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 420px) {
    display: none;
  }
`;

export const InfoContentPlanes = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding-top: 15px;
  }

  @media screen and (max-width: 420px) {
  }
`;

export const RequestIconContainer = styled.div`
  color: #e13f4c;
  font-size: 90px;

  @media screen and (max-width: 1024px) {
    font-size: 60px;
  }

  @media screen and (max-width: 420px) {
    color: #fff;
  }
`;

export const PlanesH1 = styled.h1`
  font-weight: bold;
  color: #e13f4c;
  font-size: 82.96px;

  @media screen and (max-width: 1024px) {
    font-size: 48px;
  }

  @media screen and (max-width: 420px) {
    font-size: 40px;
    color: #fff;
  }
`;

export const PlanesP = styled.p`
  color: #e13f4c;
  font-size: 27px;
  padding: 0px 60px;

  @media screen and (max-width: 1024px) {
    font-size: 16px;
    padding: 0px 30px;
  }

  @media screen and (max-width: 420px) {
    color: #fff;
    font-size: 14px;
  }
`;

export const InfoContentFive = styled.div`
  display: inline-block;
  text-align: center;
  justify-content: center;
  background-image: linear-gradient(
      rgba(130, 51, 232, 0.8),
      rgba(130, 51, 232, 0.8)
    ),
    url(${EquipmentImage});
  background-size: cover;
  background-position: center;
  color: white;
  height: 550px;

  @media screen and (max-width: 1024px) {
    height: 350px;
    padding: 40px 30px 0px 30px;
  }

  @media screen and (max-width: 420px) {
    padding: 0;
    padding-top: 20px;
  }
`;

export const InfoContentEquipment = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  color: white;
  padding: 100px 50px 0px 50px;

  @media screen and (max-width: 1024px) {
    padding: 0px;
  }

  @media screen and (max-width: 420px) {
    height: 333px;
  }
`;

export const AodIconContainer = styled.div`
  color: #fff;
  font-size: 90px;

  @media screen and (max-width: 1024px) {
    font-size: 60px;
  }

  @media screen and (max-width: 420px) {
    font-size: 50px;
  }
`;

export const EquipmentH1 = styled.h1`
  font-size: 82.96px;

  @media screen and (max-width: 1024px) {
    font-size: 48px;
  }

  @media screen and (max-width: 420px) {
    font-size: 40px;
  }
`;

export const EquipmentP = styled.p`
  padding: 20px 60px 0px 60px;
  font-size: 27px;

  @media screen and (max-width: 1024px) {
    font-size: 16px;
  }

  @media screen and (max-width: 420px) {
    font-size: 14px;
  }
`;
