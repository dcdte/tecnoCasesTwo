import React from "react";
import {RiCloseCircleFill} from "react-icons/ri";
import "../../styles/css/Tag.css";

function Tag({
  type,
  handler,
  children,
  isActive,
  hover,
  id,
  isAction,
}) {
  return (
    <button
      className={`tag ${isActive && "tag--active"}`}
      onClick={() => handler(id)}
    >
      {children}
      {hover && <div className="tag__btn"><RiCloseCircleFill className="tag__icon" /></div>}
    </button>
  );
}

export default Tag;
