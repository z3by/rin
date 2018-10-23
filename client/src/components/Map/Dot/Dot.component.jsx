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
          <h1>Basic statistics</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
            similique obcaecati vitae consequuntur atque eligendi architecto
            quam. Ut natus repellendus sint earum rerum consequuntur assumenda
            quo illum veritatis. Soluta, corrupti!
          </p>
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
