import React from "react";
import "./../styles/css/Footer.css";
import tecno from "./../assets/tecnosuper.svg";
import nidum from "./../assets/nidum.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <a className="footer__link" href="https://www.nidumdevs.com">
          <img src={nidum} alt="" />
        </a>
        <a className="footer__link" href="https://www.tecnosuper.com.co">
          <img src={tecno} alt="" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
