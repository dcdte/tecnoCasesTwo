import styled from "styled-components";
import img1 from '../../../assets/max_resolution_desktop.png'
import img2 from '../../../assets/Desktop.png'
import img3 from '../../../assets/Tablet.png'
import img4 from '../../../assets/Mobile.png'

export const HeroContainer = styled.div`
  background: #fff;
  display: flex;
  justify-content: space-between;
  height: 90vh;   
  position: relative;
  z-index: 1;
  
  /* Add :before styles*/

  @media screen and(max-width: 768px) {
    height: 851px;
  }
`

export const HeroBg = styled.div`
  background-image: url(${img1});
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  width: 100%;

  @media screen and (max-width: 1440px) {
    background-image: url(${img2});
  }  

  @media screen and (max-width: 820px) {
    background-image: url(${img3});
    height: 100%;
  }

  @media screen and (max-width: 415px) {
    background-image: url(${img4});
    width: 100%;
    //height: 100vh;
  }
`

export const HeroContent = styled.div`
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 820px) {
    text-align: center;
    flex-direction: column;
  }
`

export const HeroContentText = styled.div` 
  z-index: 3;
  max-width: 1200px;
  position: relative;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  

  @media screen and (max-width: 820px) {
    margin-top: 100px;
  }
`

export const HeroH1 = styled.h1` 
  color: #8233E8;
  font-size: 68px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 48px;
  }

  @media screen and (max-width: 480px) {
    font-size: 40px;
  }
`

export const HeroP = styled.p` 
  margin-top: 24px;
  color: #8233E8;
  font-size: 34px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`

export const HeroContentImage = styled.div`
  z-index: 3;
  max-width: 90vh;
  display: flex;
  align-items: center;

  img {   
    width: 100%;

    @media screen and (max-width: 1366px) {
      padding-top: 75px;
    }

    @media screen and (max-width: 1024px) {
      padding-top: 136px;
    }
  }
`
