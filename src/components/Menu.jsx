import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  showFilters,
  showFinances,
  showPartialFilters,
  showRams,
  showRoms,
} from "../store/slices/main/selectors";
import "../styles/css/Menu.css";
import ButtonDropDown from "./atoms/ButtonDropDown";
import CheckBox from "./atoms/CheckBox";

function Menu() {
  const dispatch = useDispatch();
  const finances = useSelector(showFinances);
  const rams = useSelector(showRams);
  const roms = useSelector(showRoms);
  const filters = useSelector(showFilters);
  const partialFiters = useSelector(showPartialFilters);

  useEffect(() => {}, [filters, dispatch]);

  return (
    <section className="menu">
      <ButtonDropDown name="Financieras">
        {finances.map((item) => {
          <CheckBox data={{ id: item.id, value: item.name }} type="finances" />;
        })}
      </ButtonDropDown>
    </section>
  );
}

export default Menu;
