import React from "react";
import { HeroContainer, HeroBg, HeroContent, HeroH1, HeroP, HeroContentImage, HeroContentText } from "./HeroElements";

const HeroSection = () => {

  return (
    <HeroContainer id="Home">
      <HeroBg/>
      <HeroContent> 
        <HeroContentText>
          <HeroH1>¡Crédito a reportados!</HeroH1>
          <HeroP>
            ¡Sí, de esta manera!
          </HeroP>
        </HeroContentText>
        <HeroContentImage>
          <img src={require("../../../assets/man.png")} alt="" />  
        </HeroContentImage>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
