import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setFilters, setPartialFilters } from "../store/slices/main";
import {
  showBatterys,
  showCameras,
  showFilters,
  showFinances,
  showPartialFilters,
  showRams,
  showRoms,
} from "../store/slices/main/selectors";
import "../styles/css/Menu.css";
import Button from "./atoms/Button";
import ButtonDropDown from "./atoms/ButtonDropDown";
import CheckBox from "./atoms/CheckBox";
import TextInput from "./atoms/TextInput";

function Menu({ isToggle = null, setIsToggle }) {
  const dispatch = useDispatch();
  const finances = useSelector(showFinances);
  const rams = useSelector(showRams);
  const roms = useSelector(showRoms);
  const batterys = useSelector(showBatterys);
  const cameras = useSelector(showCameras);
  const filters = useSelector(showFilters);
  const partialFilters = useSelector(showPartialFilters);

  const applyFilter = (partialFilters) => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
    dispatch(setFilters({ ...partialFilters }));
    if (isToggle != null) {
      setIsToggle(false);
    }
  };

  const setMaxPay = (value, partialFilters) => {
    dispatch(
      setPartialFilters({
        ...partialFilters,
        maxPay: value === 0 ? null : value,
      })
    );
  };

  return (
    <motion.section layout className="menu">
      <ButtonDropDown name="Financieras">
        {finances.map((item) => {
          return (
            <CheckBox
              key={item.id}
              data={{ id: item.id, value: item.name }}
              type="finances"
            />
          );
        })}
      </ButtonDropDown>
      <ButtonDropDown name="RAM">
        {rams.map((item) => {
          return (
            <CheckBox key={item} data={{ id: item, value: item }} type="rams" />
          );
        })}
      </ButtonDropDown>
      <ButtonDropDown name="Almacenamiento">
        {roms.map((item) => {
          return (
            <CheckBox key={item} data={{ id: item, value: item }} type="roms" />
          );
        })}
      </ButtonDropDown>

      <ButtonDropDown name="Cámara">
        {cameras.map((item) => {
          return (
            <CheckBox
              key={item}
              data={{ id: item, value: item }}
              type="cameras"
            />
          );
        })}
      </ButtonDropDown>

      <ButtonDropDown name="Batería">
        {batterys.map((item) => {
          return (
            <CheckBox
              key={item}
              data={{ id: item, value: item }}
              type="batterys"
            />
          );
        })}
      </ButtonDropDown>
      <div className="menu__pay">
        <span>Cuota Máxima</span>
        <TextInput
          placeholder="Cuota Máxima"
          field="maxPay"
          value={partialFilters.maxPay || ""}
          setValue={(value) => setMaxPay(value, partialFilters)}
          type="number"
        />
      </div>
      <Button handler={applyFilter} text="Aplicar Filtros" type="filter-dark" />
    </motion.section>
  );
}

export default Menu;
