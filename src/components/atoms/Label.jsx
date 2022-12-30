import React from "react";
import "../../styles/css/Tag.css";
import '../../styles/css/Label.css'

const Label = ({title, value, children} ) => {
  return (
    <div className="label">
      <div className="label--container">
        {children}
        <h6 className="label--container__title">{title}</h6>
      </div>
      <p className="label--description">{value}</p>
    </div>
  );
};

export default Label;