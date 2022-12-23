import React, { useState } from "react";
import "../../styles/css/ButtonDropDown.css";
import { MdKeyboardArrowUp } from "react-icons/md";
import CheckBox from "./CheckBox";

const ButtonDropDown = () => {
  const [dropdown, setDropdown] = useState(false);

  const seeDropdown = () => {
    setDropdown((prev) => !prev);
  };

  const dropped = dropdown;

  return (
    <div className="container">
      <button onClick={seeDropdown} className="container__dropdown">
        Ram
        <MdKeyboardArrowUp className={dropped} />
      </button>
      {dropdown === true && /*mapeo del check box */ <CheckBox />}
    </div>
  );
};

export default ButtonDropDown;
