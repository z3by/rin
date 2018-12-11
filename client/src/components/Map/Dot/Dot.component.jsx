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

  let sector = props.location.sector;
  let color = colors[sector];

  return <div className="dot" style={{ background: color }} />;
};

export default Dot;
