import styled from "styled-components";

export const FormContainer = styled.div`
  button[type="submit"] {
    background: #8233e8;
    font-weight: 600;
    border: none;
    cursor: pointer;
    width: 90%;
    padding: 10px;
    border-radius: 5px;
    color: #fff;
    font-size: 16px;
    transition: 0.3s ease all;
  }

  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  h1 {
    font-size: 82px;
    color: #8233e8;
    margin-bottom: 40px;
  }

  @media screen and (max-width: 1024px) {
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    h1 {
      font-size: 48px;
      color: #8233e8;
      margin-bottom: 20px;
    }
  }

  @media screen and (max-width: 420px) {
    height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    h1 {
      font-size: 40px;
      color: #8233e8;
      margin-bottom: 40px;
    }

    button[type="submit"] {
      margin: 10px 10px;
      background: #8233e8;
      border: none;
      cursor: pointer;
      width: 90%;
      padding: 15px;
      border-radius: 5px;
      color: #fff;
      font-size: 16px;
      transition: 0.3s ease all;
    }
  }
`;

export const CampsLayout = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 420px) {
    flex-direction: column;
  }
`;

export const ContainerField = styled.div`
  width: 100%;
  input,
  textarea {
    border-radius: 5px;
    border: 2px solid #a380d1;
    font-size: 18px;
    padding: 10px;
    margin-bottom: 20px;
    color: #1f1f1f;
    width: 90%;
  }

  div {
    margin-top: -10px;
  }

  textarea {
    width: 90%;
    height: 100px;
    margin: 20px 0px;
  }

  input:focus {
    outline: none;
    border: 2px solid #8233e8;
  }

  .error {
    color: #e92b2d;
    font-weight: 600;
    font-size: 12px;
  }

  @media screen and (max-width: 1024px) {
    input,
    textarea {
      width: 95%;
      border-radius: 5px;
      border: 2px solid #a380d1;
      font-size: 18px;
      padding: 10px;
      margin-bottom: 15px;
      color: #1f1f1f;
    }

    textarea {
      width: 95%;
      height: 100px;
      margin: 10px 0px;
    }

    input:focus {
      outline: none;
      border: 2px solid #8233e8;
    }

    .error {
      color: #e92b2d;
      font-weight: 600;
      font-size: 12px;
    }
  }

  @media screen and (max-width: 420px) {
    input,
    textarea {
      font-family: "Open Sans", sans-serif;
      width: 95%;
      border-radius: 5px;
      border: 2px solid #a380d1;
      font-size: 18px;
      padding: 10px;
      margin-bottom: 5px;
      color: #1f1f1f;
    }

    textarea {
      width: 95%;
      height: 100px;
    }

    input:focus {
      outline: none;
      border: 2px solid #8233e8;
    }

    .error {
      color: #e92b2d;
      font-weight: 600;
      font-size: 12px;
    }

    .exito {
      text-align: center;
      font-size: 14px;
      padding-top: 20px; 
      color: #02a802;
    }
  }
`;
