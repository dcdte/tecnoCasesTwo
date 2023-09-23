import React from "react";
import {
  MdOutlineCreditCardOff,
  MdOutlineReceiptLong,
  MdOutlineRequestPage,
  MdOutlineAod,
} from "react-icons/md";
import {
  InfoContainer,
  InfoContentOne,
  InfoContentTwo,
  InfoContentCredit,
  CreditH1,
  CreditP,
  InfoContentMan,
  InfoContentThree,
  ThreeH1,
  ThreeP,
  InfoContentFour,
  InfoContentWomen,
  InfoContentPlanes,
  PlanesH1,
  PlanesP,
  InfoContentFive,
  InfoContentEquipment,
  EquipmentH1,
  EquipmentP,
  CardIconContainer,
  ReceiptIconContainer,
  RequestIconContainer,
  AodIconContainer,
} from "./InfoElements";

const InfoSection = () => {
  return (
    <InfoContainer>
      <InfoContentOne>
        Estos beneficios son especialmente para ti:
      </InfoContentOne>
      <InfoContentTwo>
        <InfoContentCredit>
          <CardIconContainer>
            <MdOutlineCreditCardOff />
          </CardIconContainer>
          <CreditH1>¿Reportado? Te damos crédito</CreditH1>
          <CreditP>
            Somos amigos, te damos el crédito sin problema y sin codeudores,
            solo necesitamos tu CC. ¡y es todo!
          </CreditP>
        </InfoContentCredit>
        <InfoContentMan />
      </InfoContentTwo>
      <InfoContentThree>
        <ReceiptIconContainer>
          <MdOutlineReceiptLong />
        </ReceiptIconContainer>
        <ThreeH1>30% de cuota inicial</ThreeH1>
        <ThreeP>
          Tu bolsillo te va agradecer no estar vacío, además de tener un nuevo
          acompañante
        </ThreeP>
      </InfoContentThree>
      <InfoContentFour>
        <InfoContentWomen />
        <InfoContentPlanes>
          <RequestIconContainer>
            <MdOutlineRequestPage />
          </RequestIconContainer>
          <PlanesH1>Variedad de pago, variedad de productos</PlanesH1>
          <PlanesP>
            No solo nos quedamos con una opción, nos encanta ofrecer variedad,
            esto es variedad
          </PlanesP>
        </InfoContentPlanes>
      </InfoContentFour>
      <InfoContentFive>
        <InfoContentEquipment>
          <AodIconContainer>
            <MdOutlineAod />
          </AodIconContainer>
          <EquipmentH1>100% original e importado</EquipmentH1>
          <EquipmentP>
            Eres un 100, somos un 100. No eres menos, aquí eres más
          </EquipmentP>
        </InfoContentEquipment>
      </InfoContentFive>
    </InfoContainer>
  );
};

export default InfoSection;
