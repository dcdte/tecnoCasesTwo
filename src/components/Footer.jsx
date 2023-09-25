import React from "react";
import "./../styles/css/Footer.css";
import tecno from "./../assets/tecnosuper.svg";
import nidum from "./../assets/blue-noback.png";

function Footer({location=false}) {
  return (
    <footer className={`footer ${location && "footer--zones"}`}>
      <div className="footer__container">
        <a className="footer__link" href="https://www.nidumhaus.com">
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
