import React from "react";
import { HeroContainer, HeroBg, HeroContent, HeroH1, HeroP, HeroContentImage, HeroContentText } from "./HeroElements";
import man from "../../../assets/man.png"

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
          <img src={man} alt="" />  
        </HeroContentImage>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
