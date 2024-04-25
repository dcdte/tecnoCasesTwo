import React, { useEffect, useState } from "react";
import "../styles/css/Card.css";
import "../styles/css/CardPay.css";

import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { IoCloseCircleOutline } from "react-icons/io5";
import currencyFormat from "../utils/currencyFormat";
import { getImageZoho } from "../utils/imageZohoUtil";
function Card({ data }) {
  const [zoom, setZoom] = useState(false);
  const [color, setColor] = useState(null);

  const colors = [
    "pink",
    "darkblue",
    "gray",
    "blue",
    "red",
    "darkgray",
    "cian",
    "purple",
    "black",
  ];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    setColor(colors[randomIndex]);
  }, []);

  const img = getImageZoho(data);
  let renderZoom = () => {
    if (zoom === true) {
      return (
        <motion.div
          className={`img__visible img__visible--${color}`}
          initial={{ x: -330 }}
          animate={{ x: 0 }}
          exit={{ x: -330 }}
        >
          <img src={img} alt="" />
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
        <div
          className={`card__img card__img--${color}`}
          onClick={() => setZoom(true)}
        >
          <motion.img
            src={img}
            alt=""
            whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
          />
        </div>
      </div>
      <div className="card__info">
        <div className="card__column">
          {colors.map((color) => (
            <button
              key={color}
              className={`card__color card__color--${color}`}
              onClick={() => setColor(color)}
            ></button>
          ))}
        </div>
        <div className="card__row">
          <span className="card__titleTwo">Modelos</span>
          <div className="card__container">
            {data.model.split(",").map((item) => (
              <div className="card__value" key={item}>
                {item}
              </div>
            ))}
          </div>
          <div className="card__row">
            <div className="card__valueTwo">{currencyFormat(data.price)}</div>
          </div>
        </div>
      </div>
      <AnimatePresence>{renderZoom()}</AnimatePresence>
    </article>
  );
}

export default Card;
