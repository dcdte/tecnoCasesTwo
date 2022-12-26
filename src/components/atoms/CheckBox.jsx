import React from "react";
import { useSelector } from "react-redux";
import { showFilters } from "../../store/slices/main/selectors";
import "../../styles/css/CheckBox.css";

const CheckBox = ({ data, handler, status }) => {
  
  return (
    <div className="containerCheck">
      <input
        type="checkbox"
        text={data.id}
        checked={status}
        className="containerCheck__checkbox"
        onChange={() => {
          handler();
        }}
      />
      <label className="containerCheck__Label">{data.value}</label>
    </div>
  );
};

export default CheckBox;
