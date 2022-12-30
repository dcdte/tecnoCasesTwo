import React from "react";
import "../styles/css/Card.css";
import Tag from "./atoms/Tag";
import small from "../assets/small.png";

import { AiOutlineCamera } from "react-icons/ai";
import {
  MdOutlineSdStorage,
  MdMemory,
  MdDeveloperBoard,
  MdOutlineScreenshot,
  MdBatteryCharging60,
} from "react-icons/md";
import Label from "./atoms/Label";

function Card({ data }) {
  console.log(data);
  return (
    <article className="card">
      <div className="card__visual">
        <div className="card__img">
          <img src={small} alt="" />
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
                <Tag id={item.financeId} hover={false} handler={() => {}}>
                  {item.finance.name}
                </Tag>
              ))}
          </div>
        </div>
      </div>
      <div className="card__pays">
        <div className="card__row"></div>
        <div className="card__row"></div>
      </div>
    </article>
  );
}

export default Card;
