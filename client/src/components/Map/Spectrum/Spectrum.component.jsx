import React from "react";
import "./Spectrum.css";
import ToolTipComponent from "./ToolTip.component";

export default props => {
  return (
    <ul className="spectrum">
      <li
        className="spectrum-item"
        onMouseEnter={() => props.handleMouseHover("housing")}
      >
        <ToolTipComponent tooltipText="housing" />
      </li>
      <li
        className="spectrum-item"
        onMouseEnter={() => props.handleMouseHover("education")}
      >
        <ToolTipComponent tooltipText="education" />
      </li>
      <li
        className="spectrum-item"
        onMouseEnter={() => props.handleMouseHover("agriculture")}
      >
        <ToolTipComponent tooltipText="agriculture" />
      </li>
      <li
        className="spectrum-item"
        onMouseEnter={() => props.handleMouseHover("health")}
      >
        <ToolTipComponent tooltipText="health" />
      </li>
      <li
        className="spectrum-item"
        onMouseEnter={() => props.handleMouseHover("water")}
      >
        <ToolTipComponent tooltipText="water" />
      </li>
      <li
        className="spectrum-item"
        onMouseEnter={() => props.handleMouseHover("nutrition")}
      >
        <ToolTipComponent tooltipText="nutrition" />
      </li>
      <li
        className="spectrum-item"
        onMouseEnter={() => props.handleMouseHover("infancy")}
      >
        <ToolTipComponent tooltipText="infancy" />
      </li>
    </ul>
  );
};
