  import styled from "styled-components";

export const SectionMap = styled.div`
  display: flex;
  width: 100%;
  z-index: 2;
  height: 1091px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    height: 1113px;
  }

  @media screen and (max-width: 420px) {
    height: 857px;  
  }
`;

export const MapInfo = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  width: 100%;

  @media screen and (max-width: 1024px) {
    padding: 36px 40px 0px 40px;
  }

  @media screen and (max-width: 420px) {

  } 
`;

export const MapH1 = styled.h1`
  color: #e13f4c;
  font-size: 82px;

  @media screen and (max-width: 1024px) {
    font-size: 48px;
  }
  @media screen and (max-width: 420px) {
    font-size: 36px;
  }
`;

export const MapP = styled.p`
  padding-top: 20px;
  font-size: 34px;

  span {
    color: #8233e8;
    font-weight: bold; 
  }

  h4 {
    color: #8233e8;
    font-weight: bold; 
  }

  @media screen and (max-width: 1024px) {
    font-size: 20px;
  }

  @media screen and (max-width: 420px) {
    font-size: 14px;
  }
`;

export const ContainerMaps = styled.div`
  width: 100%;
  justify-content: center;


  @media screen and (max-width: 1024px) {
  } 
`;

export const ContainerMap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 45px;
  //position: absolute;
  //padding-right: 900px;
  transform: scale(0.8);
  
  @media screen and (max-width: 1024px) {
    margin-top: 40px;
    width: 100%;
    padding: 0;
    transform: scale(0.6);
  }

  @media screen and (max-width: 768px) {
    transform: scale(0.75)
  }
  
  @media screen and (max-width: 420px) {
    transform: scale(0.9);
    margin-top: 40px;
  }

  svg {
    stroke: black;
    stroke-width: 10px;
    filter: drop-shadow(-11px 11px 5px rgb(0 0 0 / 0.4));
    stroke-linejoin: round;
    position: absolute;

  }
`;

export const ColombiaMap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-left: 0px;
  //position: absolute;
  //padding-right: 900px;
  transform: scale(0.8);
  
  @media screen and (max-width: 1024px) {
    width: 100%;
    padding: 0;
    transform: scale(0.6);
  }

  @media screen and (max-width: 768px) {
    transform: scale(0.75)
  }
  
  @media screen and (max-width: 420px) {
    transform: scale(0.9);
    margin: 0; 
  }

  svg {
    display: flex;
    stroke: #fff;
    stroke-width: 1px;
    position: absolute;

    path {
      fill: #7c7b7b;
      outline: none;

      &[id="co-ama"] {
        fill: #8233e8;

        &:hover {
          fill: #e13f4c;
          cursor: pointer;
        }
      }

      &[id="co-ant"] {
        fill: #8233e8;

        &:hover {
          fill: #e13f4c;
          cursor: pointer;
        }
      }

      &[id="co-ces"] {
          fill: #8233e8;

          &:hover {
            fill: #e13f4c;
            cursor: pointer;
          }
        }

        &[id="co-nsa"] {
          fill: #8233e8;

          &:hover {
            fill: #e13f4c;
            cursor: pointer;
          }
        }

        &[id="co-san"] {
          fill: #8233e8;

          &:hover {
            fill: #e13f4c;
            cursor: pointer;
          }
        }

        &[id="co-boy"] {
          fill: #8233e8;

          &:hover {
            fill: #e13f4c;
            cursor: pointer;
          }
        }

        &[id="co-cun"] {
          fill: #8233e8;

          &:hover {
            fill: #e13f4c;
            cursor: pointer;
          }
        }

        &[id="co-dc"] {
          fill: #8233e8;

          &:hover {
            fill: #e13f4c;
            cursor: pointer;
          }
        }

        &[id="co-vac"] {
          fill: #8233e8;

          &:hover {
            fill: #e13f4c;
            cursor: pointer;
          }
        }

        &[id="co-cau"] {
          fill: #8233e8;

          &:hover {
            fill: #e13f4c;
            cursor: pointer;
          }
        }

        &[id="co-met"] {
          fill: #8233e8;

          &:hover {
            fill: #e13f4c;
            cursor: pointer;
          }
        }

        &[id="co-guv"] {
          fill: #8233e8;

          &:hover {
            fill: #e13f4c;
            cursor: pointer; 
          }
        }
      }
    }
`;
