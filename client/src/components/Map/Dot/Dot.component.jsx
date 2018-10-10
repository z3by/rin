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

  const showProjectInfo = info => {
    document.querySelector(".project-info").style.display = "initial";
    document.querySelector(".project-info-content").innerHTML = `
    <img src=${info.imgUrl} />
    <div className="grid-3">
      <h1>${info.projectName}</h1> 
      <h2>${info.title}</h2>
      <h2>${info.country}</h2>
      <h2>capacity:${info.capacity}</h2>
      <h2>started in:${info.year}</h2>
    </div>
    `;
  };

  return (
    <div className="dot" style={{ background: colors[props.project.type] }}>
      <div className="tooltip">
        <div className="tooltiptext">{props.project.title}</div>
        <img src={props.project.imgUrl} alt="" />
        <p className="tooltip-money">${props.project.benefits}</p>
        <a
          onClick={() => {
            showProjectInfo(props.project);
          }}
          className="tooltip-read-more"
        >
          read more...
        </a>
      </div>
    </div>
  );
};

export default Dot;
