import React, { useEffect, useState } from "react";
import "../styles/css/Card.css";
import Tag from "./atoms/Tag";
import small from "../assets/small.png";

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
  const [pays, setPays] = useState(data.credits[0]);
  const [zoom, setZoom] = useState(false);

  let renderZoom = () => {
    if (zoom === true) {
      return (
        <motion.div
          className="img__visible"
          initial={{ x: -350 }}
          animate={{ x: 0 }}
          exit={{ x: -350 }}
        >
          <img src={`https://creatorapp.zohopublic.com/file/vt.cel/tecnosuper/Productos_General_Report/${data.id}/preview/image-download/qe6WhYfEhFASK7SDr3NE5EVztWUOSZnTdwg10Xe1AZOTdehEZEfvEWeqeSYv6yp0wFKJHyNSgdpQN3tAf3nQH1rxGgrxbMP3YdyZ?filepath=/${data.preview}`} alt="" />
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
        <div className="card__img" onClick={() => setZoom(true)}>
          <motion.img
            src={`https://creatorapp.zohopublic.com/file/vt.cel/tecnosuper/Productos_General_Report/${data.id}/preview/image-download/qe6WhYfEhFASK7SDr3NE5EVztWUOSZnTdwg10Xe1AZOTdehEZEfvEWeqeSYv6yp0wFKJHyNSgdpQN3tAf3nQH1rxGgrxbMP3YdyZ?filepath=/${data.preview}`}
            alt=""
            whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
          />
        </div>
      </div>
      <div className="card__info">
        <h4 className="card__brand">{data.brand.brand}</h4>
        <h3 className="card__title">{data.reference}</h3>
        <div className="card__details">
          <Label title="Cámara" value={data.camera}>
            <AiOutlineCamera className="label--container__icon" />
          </Label>
          <Label title="Almacenamiento" value={data.storage}>
            <MdOutlineSdStorage className="label--container__icon" />
          </Label>
          <Label title="RAM" value={data.ram}>
            <MdMemory className="label--container__icon" />
          </Label>
          <Label title="Procesador" value={data.processor}>
            <MdDeveloperBoard className="label--container__icon" />
          </Label>
          <Label title="Pantalla" value={data.window}>
            <MdOutlineScreenshot className="label--container__icon" />
          </Label>
          <Label title="Batería" value={data.battery}>
            <MdBatteryCharging60 className="label--container__icon" />
          </Label>
        </div>
        <div className="card__finances">
          <span className="card__finance">Financiera:</span>
          <div className="card__tags">
            {data.credits &&
              data.credits.map((item) => (
                <Tag
                  id={item.financeId}
                  hover={false}
                  isActive={pays.financeId === item.financeId}
                  handler={() => {
                    setPays(item);
                  }}
                >
                  {item.finance.name}
                </Tag>
              ))}
          </div>
        </div>
      </div>
      <div className="card__pays">
        <div className="card__row">
          <CardPay title="Inicial" value={currencyFormat(pays.initial)} />
          <CardPay title="8 Cuotas" value={currencyFormat(pays.eightPays)} />
        </div>
        <div className="card__row">
          <CardPay title="12 Cuotas" value={currencyFormat(pays.twelvePays)} />
          <CardPay title="16 Cuotas" value={currencyFormat(pays.sixteenPays)} />
        </div>
      </div>
      <AnimatePresence>{renderZoom()}</AnimatePresence>
    </article>
  );
}

export default Card;
