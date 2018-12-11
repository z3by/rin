import React from "react";
import "./Spectrum.css";

export default props => {
  return (
    <ul className="spectrum">
      <li
        className="spectrum-item"
        onMouseEnter={() => props.handleMouseHover("housing")}
      >
        <div className="tooltip">
          <div className="tooltiptext spec">housing</div>
        </div>
      </li>
      <li
        className="spectrum-item"
        onMouseEnter={() => props.handleMouseHover("education")}
      >
        <div className="tooltip">
          <div className="tooltiptext spec">education</div>
        </div>
      </li>
      <li
        className="spectrum-item"
        onMouseEnter={() => props.handleMouseHover("agriculture")}
      >
        <div className="tooltip">
          <div className="tooltiptext spec">agriculture</div>
        </div>
      </li>
      <li
        className="spectrum-item"
        onMouseEnter={() => props.handleMouseHover("health")}
      >
        <div className="tooltip">
          <div className="tooltiptext spec">health</div>
        </div>
      </li>
      <li
        className="spectrum-item"
        onMouseEnter={() => props.handleMouseHover("water")}
      >
        <div className="tooltip">
          <div className="tooltiptext spec">water</div>
        </div>
      </li>
      <li
        className="spectrum-item"
        onMouseEnter={() => props.handleMouseHover("nutrition")}
      >
        <div className="tooltip">
          <div className="tooltiptext spec">nutrition </div>
        </div>
      </li>
      <li
        className="spectrum-item"
        onMouseEnter={() => props.handleMouseHover("infancy")}
      >
        <div className="tooltip">
          <div className="tooltiptext spec">infancy </div>
        </div>
      </li>
    </ul>
  );
};
