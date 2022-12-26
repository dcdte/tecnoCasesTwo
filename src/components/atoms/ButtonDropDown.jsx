import React, { useState } from "react";
import "../../styles/css/ButtonDropDown.css";
import { MdKeyboardArrowUp } from "react-icons/md";
import CheckBox from "./CheckBox";

const ButtonDropDown = ({name, children}) => {
  const [dropdown, setDropdown] = useState(false);

  const seeDropdown = () => {
    setDropdown((prev) => !prev);
    console.log(children);
  };

  const dropped = dropdown;

  return (
    <div className="dropdown">
      <button onClick={seeDropdown} className="dropdown__btn">
        <span>{name}</span>
        <MdKeyboardArrowUp className={dropped} />
      </button>
      {dropdown && children}
    </div>
  );
};

export default ButtonDropDown;
