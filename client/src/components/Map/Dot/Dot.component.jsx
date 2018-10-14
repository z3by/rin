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
      <div className="project-info">
        <div className="project-info-popup">
          <h1>title</h1>
        </div>
        <div className="project-info-popup">
          <h1>title</h1>
        </div>
        <div className="project-info-popup">
          <h1>title</h1>
        </div>
      </div>
    </div>
  );
};

export default Dot;
