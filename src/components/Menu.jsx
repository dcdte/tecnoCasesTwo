import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setFilters, setPartialFilters } from "../store/slices/main";
import {
  showModels,
  showCases,
  showFilters,
  showPartialFilters,
} from "../store/slices/main/selectors";
import "../styles/css/Menu.css";
import Button from "./atoms/Button";
import ButtonDropDown from "./atoms/ButtonDropDown";
import CheckBox from "./atoms/CheckBox";
import TextInput from "./atoms/TextInput";

function Menu({ isToggle = null, setIsToggle }) {
  const dispatch = useDispatch();
  const models = useSelector(showModels);
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
      <ButtonDropDown name="Modelo">
        {models.map((item) => {
          return (
            <CheckBox
              key={item}
              data={{ id: item, value: item }}
              type="models"
            />
          );
        })}
      </ButtonDropDown>

      <div className="menu__pay"></div>
      <Button handler={applyFilter} text="Aplicar Filtros" type="filter-dark" />
    </motion.section>
  );
}

export default Menu;
