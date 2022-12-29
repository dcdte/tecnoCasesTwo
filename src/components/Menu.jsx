import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setFilters, setPartialFilters } from "../store/slices/main";
import {
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

function Menu() {
  const dispatch = useDispatch();
  const finances = useSelector(showFinances);
  const rams = useSelector(showRams);
  const roms = useSelector(showRoms);
  const filters = useSelector(showFilters);
  const partialFilters = useSelector(showPartialFilters);
  const [maxPay, setMaxPay] = useState("");

  const applyFilter = (partialFilters, maxPay) => {
    const partial = maxPay
      ? { ...partialFilters, maxPay }
      : { ...partialFilters };
    dispatch(setFilters(partial));
    console.log("mi fuck");
    setMaxPay("");
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
      <div className="menu__pay">
        <span>Cuota Máxima</span>
        <TextInput
          placeholder="Cuota Máxima"
          field="maxPay"
          value={maxPay}
          setValue={setMaxPay}
          type="number"
        />
      </div>
      <Button
        handler={(partialFilters) => applyFilter(partialFilters, maxPay)}
        text="Aplicar Filtros"
        type="filter-dark"
      />
    </motion.section>
  );
}

export default Menu;
