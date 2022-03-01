import React from "react";

const IconCard = ({icon,title,data,children,...otherProps}) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="single-meta-field">
        <div className="field-label">
          <i className={icon}></i>
          <span>{title} </span>
        </div>
        <div className="field-value">{data}</div>
      </div>
    </div>
  );
};

export default IconCard;
