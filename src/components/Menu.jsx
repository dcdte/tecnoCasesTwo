import React, { useEffect } from "react";
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
import ButtonDropDown from "./atoms/ButtonDropDown";
import CheckBox from "./atoms/CheckBox";

function Menu() {
  const dispatch = useDispatch();
  const finances = useSelector(showFinances);
  const rams = useSelector(showRams);
  const roms = useSelector(showRoms);
  const filters = useSelector(showFilters);
  const partialFilters = useSelector(showPartialFilters);

  const setFilter = (type) => () => {
    dispatch(
      setPartialFilters({ ...partialFilters, [type]: !partialFilters[type] })
    );
  };

  useEffect(() => {
    console.log("finances", finances);
  }, [filters, dispatch]);

  return (
    <section className="menu">
      <ButtonDropDown name="Financieras">
        {finances.map((item) => {
          return (
            <CheckBox
              key={item.id}
              data={{ id: item.id, value: item.name }}
              type="finances"
              status={partialFilters.finances.filter(obj => obj.id == item.id)[0]?.isSelected}
              handler={setFilter("finances")}
            />
          );
        })}
      </ButtonDropDown>
      <ButtonDropDown name="RAM">
        {rams.map((item) => {
          return (
            <CheckBox
              key={item}
              data={{ id: item, value: item }}
              type="rams"
              status={partialFilters.rams.filter(obj => obj.id == item)[0]?.isSelected}
              handler={setFilter("rams")}
            />
          );
        })}
      </ButtonDropDown>
    </section>
  );
}

export default Menu;
