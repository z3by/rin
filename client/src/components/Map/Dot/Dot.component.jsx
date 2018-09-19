import React from "react";

import "./Dot.css";

const Dot = props => {
  const colors = {
    housing: "#E83338",
    education: "#ff9068",
    agriculture: "#FFB75E",
    health: "#8DC26F",
    water: "#64b3f4",
    nutrition: "#6441A5",
    infancy: "#fc67fa"
  };
  return (
    <div className="dot" style={{ background: colors[props.project.type] }}>
      <div className="tooltip">
        <div className="tooltiptext">{props.project.title}</div>
        <img src={props.project.imgUrl} alt="" />
        <p className="tooltip-money">{props.project.intensity}$</p>
      </div>
    </div>
  );
};

export default Dot;
