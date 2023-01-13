import React, { useState } from "react";
import "../../styles/css/ButtonDropDown.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import CheckBox from "./CheckBox";

const ButtonDropDown = ({ name, children }) => {
  const [dropdown, setDropdown] = useState(false);

  const seeDropdown = () => {
    setDropdown((prev) => !prev);
  };

  const dropped = dropdown;

  return (
    <motion.div className="dropdown">
      <button onClick={seeDropdown} className="dropdown__btn">
        <span>{name}</span>
        <MdKeyboardArrowDown className={dropped} />
      </button>
      <AnimatePresence initial={false}>
        {dropdown && (
          <motion.div
            className="dropdown__container"
            initial={{  opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{  opacity: 0, height: 0 }}
            transition={{duration: 0.2}}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ButtonDropDown;
