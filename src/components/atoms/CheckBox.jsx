import React from "react";
import "../../styles/css/CheckBox.css";

const CheckBox = () => {
  return (
    <div className="containerCheck">
      <input type="checkbox" text="2gb" className="containerCheck__checkbox" />
      <label htmlFor="check2gb" className="containerCheck__Label">
        2gb
      </label>
    </div>
  );
};

export default CheckBox;
