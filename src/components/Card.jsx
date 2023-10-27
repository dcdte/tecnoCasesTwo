import React, { useState } from "react";
import "../styles/css/Card.css";
import "../styles/css/CardPay.css";

import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { IoCloseCircleOutline } from "react-icons/io5";
import currencyFormat from "../utils/currencyFormat";
import Case from "../assets/case.png";
function Card({ data }) {
  const [zoom, setZoom] = useState(false);

  const colors = [
    "pink",
    "darkblue",
    "gray",
    "blue",
    "red",
    "darkgray",
    "cian",
    "purple",
  ];

  let renderZoom = () => {
    if (zoom === true) {
      return (
        <motion.div
          className="img__visible"
          initial={{ x: -330 }}
          animate={{ x: 0 }}
          exit={{ x: -330 }}
        >
          <img
            src={`https://creatorapp.zohopublic.com/file/vt.cel/tecnosuper/SuperCaseReporte/${data.id}/previewTecnoCase/image-download/SXb8BYBmSkxhtOb0543AUQ2hBwdbdG3hCHf6nQmvkAAYGQx4sXC3tDpAbpZ1OenrdSfxsHxCF54aObOhm3pdpETErG0CpTteH33D?filepath=/${data.preview}`}
            alt=""
          />
          <button className="button__close">
            <IoCloseCircleOutline
              className="closeIcon"
              onClick={() => setZoom(false)}
            />
          </button>
        </motion.div>
      );
    } else {
      <></>;
    }
  };

  return (
    <article className="card">
      <div className="card__visual">
        {/*         <h4 className="card__brand">{data.brand.brand}</h4>
         */}{" "}
        <h3 className="card__title">{data.reference}</h3>
        <div className="card__img" onClick={() => setZoom(true)}>
          <motion.img
            src={`https://creatorapp.zohopublic.com/file/vt.cel/tecnosuper/SuperCaseReporte/${data.id}/previewTecnoCase/image-download/SXb8BYBmSkxhtOb0543AUQ2hBwdbdG3hCHf6nQmvkAAYGQx4sXC3tDpAbpZ1OenrdSfxsHxCF54aObOhm3pdpETErG0CpTteH33D?filepath=/${data.preview}`}
            alt=""
            whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
          />
        </div>
      </div>
      <div className="card__info">
        <div className="card__row">
          {colors.map((color) => (
            <button className={`card__color card__color--${color}`}></button>
          ))}
        </div>
        <div className="card__row">
          <div className="pay">
            <span className="pay__title">Modelos: </span>
            <div className="pay__container">
              {data.model.split(",").map((item) => (
                <div className="pay__value">{item}</div>
              ))}
            </div>
          </div>

          <div className="card__row">
            <div className="pay">
              <span className="pay__title">Precio:</span>
              <div className="pay__value">{currencyFormat(data.price)}</div>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>{renderZoom()}</AnimatePresence>
    </article>
  );
}

export default Card;
