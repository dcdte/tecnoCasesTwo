import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaCheck } from "react-icons/fa";
import {
  showFilters,
  showPartialFilters,
} from "../../store/slices/main/selectors";
import "../../styles/css/CheckBox.css";
import { setPartialFilters } from "../../store/slices/main";

const CheckBox = ({ data, type }) => {
  const dispatch = useDispatch();
  const partialFilters = useSelector(showPartialFilters);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(
      partialFilters[type].filter((obj) => obj.id == data.id)[0]?.isSelected
    );
  }, [partialFilters]);

  const handler = (partialFilters) => {
    const partial = [...partialFilters[type]];
    const index = partial.findIndex((item) => item.id == data.id);
    const newData = {...partial[index]};
    newData.isSelected = !newData.isSelected;
    partial[index] = newData;

    dispatch(
      setPartialFilters({
        ...partialFilters,
        [type]: partial,
      })
    );
  };

  return (
    <div className="check">
      <div
        className={`check__box ${isChecked && "check__box--active"}`}
        onClick={() => handler(partialFilters)}
      >
        {isChecked && <FaCheck className="check__checked" />}
      </div>
      <span className="check__label">{data.value}</span>
    </div>
  );
};

export default CheckBox;
