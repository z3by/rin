import React from "react";
import "./Spectrum.css";

export default props => {
  return (
    <ul className="spectrum">
      <li
        className="spectrum-item"
        data-index={0}
        onMouseEnter={props.handleMouseHover}
      >
        <div className="tooltip">
          <div className="tooltiptext spec">housing</div>
        </div>
      </li>
      <li
        className="spectrum-item"
        data-index={1}
        onMouseEnter={props.handleMouseHover}
      >
        <div className="tooltip">
          <div className="tooltiptext spec">education</div>
        </div>
      </li>
      <li
        className="spectrum-item"
        data-index={2}
        onMouseEnter={props.handleMouseHover}
      >
        <div className="tooltip">
          <div className="tooltiptext spec">agriculture</div>
        </div>
      </li>
      <li
        className="spectrum-item"
        data-index={3}
        onMouseEnter={props.handleMouseHover}
      >
        <div className="tooltip">
          <div className="tooltiptext spec">health</div>
        </div>
      </li>
      <li
        className="spectrum-item"
        data-index={4}
        onMouseEnter={props.handleMouseHover}
      >
        <div className="tooltip">
          <div className="tooltiptext spec">water</div>
        </div>
      </li>
      <li
        className="spectrum-item"
        data-index={5}
        onMouseEnter={props.handleMouseHover}
      >
        <div className="tooltip">
          <div className="tooltiptext spec">nutrition </div>
        </div>
      </li>
      <li
        className="spectrum-item"
        data-index={6}
        onMouseEnter={props.handleMouseHover}
      >
        <div className="tooltip">
          <div className="tooltiptext spec">infancy </div>
        </div>
      </li>
    </ul>
  );
};
