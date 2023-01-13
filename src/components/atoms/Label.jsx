import React from "react";
import "../../styles/css/Tag.css";
import '../../styles/css/Label.css'

const Label = ({title, value, children} ) => {
  return (
    <div className="label">
      <div className="label--container">
        {children}
        {/* <h6 className="label--container__title">{title}</h6> */}
      </div>
      <span className="label--description">{value}</span>
    </div>
  );
};

export default Label;