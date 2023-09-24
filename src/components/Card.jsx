import React, { useEffect, useState } from "react";
import "../styles/css/Card.css";
import Tag from "./atoms/Tag";

import { AiOutlineCamera } from "react-icons/ai";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { IoCloseCircleOutline } from "react-icons/io5";
import {
  MdOutlineSdStorage,
  MdMemory,
  MdDeveloperBoard,
  MdOutlineScreenshot,
  MdBatteryCharging60,
} from "react-icons/md";
import Label from "./atoms/Label";
import CardPay from "./atoms/CardPay";
import currencyFormat from "../utils/currencyFormat";
function Card({ data }) {
  const [zoom, setZoom] = useState(false);

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
            src={`https://creatorapp.zohopublic.com/file/vt.cel/tecnosuper/Productos_General_Report/${data.id}/preview/image-download/qe6WhYfEhFASK7SDr3NE5EVztWUOSZnTdwg10Xe1AZOTdehEZEfvEWeqeSYv6yp0wFKJHyNSgdpQN3tAf3nQH1rxGgrxbMP3YdyZ?filepath=/${data.preview}`}
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
 */}        <h3 className="card__title">{data.model}</h3>
        <div className="card__img" onClick={() => setZoom(true)}>
          <motion.img
            src={`https://creatorapp.zohopublic.com/file/vt.cel/tecnosuper/Productos_General_Report/${data.id}/preview/image-download/qe6WhYfEhFASK7SDr3NE5EVztWUOSZnTdwg10Xe1AZOTdehEZEfvEWeqeSYv6yp0wFKJHyNSgdpQN3tAf3nQH1rxGgrxbMP3YdyZ?filepath=/${data.preview}`}
            alt=""
            whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
          />
        </div>
      </div>
      <div className="card__info">
        <div className="card__row">
          <div className="pay">
            <span className="pay__title">Referencia: </span>
            <div className="pay__value">{data.reference}</div>
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
