import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setPartialFilters } from "../store/slices/main";
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

  const applyFilter = () => {};

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
        <TextInput placeholder="Cuota Máxima" />
      </div>
      <Button handler={applyFilter} text="Aplicar Filtros" type="filter-dark" />
    </motion.section>
  );
}

export default Menu;
