import React from "react";
import "./style.scss";
const Grid = (props) => {
  return (
    <div className={`container-grid ${props.styles}`}>{props.children}</div>
  );
};

export default Grid;
