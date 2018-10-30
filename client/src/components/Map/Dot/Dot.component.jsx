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

  let type = props.project.type.toLowerCase();

  return (
    <div
      className="dot"
      style={{ background: colors[type] }}
      onMouseEnter={e => {
        props.hover(props.project.id);
      }}
    >
      <div className="project-info">
        <div className="project-info-popup">
          <h1>Basic statistics</h1>
          <p>{props.info.type}</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
            similique obcaecati vitae consequuntur atque eligendi architecto
            quam. Ut natus repellendus sint earum rerum consequuntur assumenda
            quo illum veritatis. Soluta, corrupti!
          </p>
        </div>
        <div className="project-info-popup">
          <h1>Qualitative information</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo amet
            dolore blanditiis, culpa tempore voluptatibus! Id, animi eligendi
            voluptate, iure, quibusdam voluptatum quam hic odit quidem
            reiciendis nam voluptatibus ipsam!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo amet
            dolore blanditiis, culpa tempore voluptatibus! Id, animi eligendi
            voluptate, iure, quibusdam voluptatum quam hic odit quidem
            reiciendis nam voluptatibus ipsam!
          </p>
        </div>
        <div className="project-info-popup">
          <h1>other info</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui,
            exercitationem! Amet eum ipsa accusamus nulla libero iste sequi
            dolorum magnam reiciendis porro, ex tempora voluptates maiores
            eveniet saepe nam fugit?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui,
            exercitationem! Amet eum ipsa accusamus nulla libero iste sequi
            dolorum magnam reiciendis porro, ex tempora voluptates maiores
            eveniet saepe nam fugit?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dot;
