import React, { useState } from "react";
import "../../styles/css/ButtonDropDown.css";
import { MdKeyboardArrowUp } from "react-icons/md";
import CheckBox from "./CheckBox";

const ButtonDropDown = ({name, children}) => {
  const [dropdown, setDropdown] = useState(false);

  const seeDropdown = () => {
    setDropdown((prev) => !prev);
  };

  const dropped = dropdown;

  return (
    <div className="container">
      <button onClick={seeDropdown} className="container__dropdown">
        {name}
        <MdKeyboardArrowUp className={dropped} />
      </button>
      {dropdown && children}
    </div>
  );
};

export default ButtonDropDown;
