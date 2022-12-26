import React from "react";
import { useSelector } from "react-redux";
import { showFilters } from "../../store/slices/main/selectors";
import "../../styles/css/CheckBox.css";

const CheckBox = ({ data, handler, type }) => {

  const filters = useSelector(showFilters);

  const isChecked = (type) => {
    const target = filters[type];
    if(type === "finances") {
        return target.some(item => item.id === data.id);
    } else {
      return target.some(item => item === data.id);
    }
  };
  
  return (
    <div className="containerCheck">
      <input
        type="checkbox"
        text={data.id}
        checked={isChecked(type)}
        className="containerCheck__checkbox"
        onClick={() => {
          handler();
        }}
      />
      <label className="containerCheck__Label">{data.value}</label>
    </div>
  );
};

export default CheckBox;
