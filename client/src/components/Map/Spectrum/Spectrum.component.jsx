import React from "react";

import "./Spectrum.css";

class Spectrum extends React.Component {
  // mouse hover handler for the spectrum;
  handleMouseHover = e => {
    const index = e.target.dataset.index;
    const types = [
      "housing",
      "education",
      "agriculture",
      "health",
      "water",
      "nutrition",
      "infancy"
    ];

    this.props.filterByType(types[index]);
  };

  render() {
    return (
      <ul className="spectrum">
        <li
          className="spectrum-item"
          data-index={0}
          onMouseEnter={this.handleMouseHover}
        >
          <div className="tooltip">
            <div className="tooltiptext spec">housing</div>
          </div>
        </li>
        <li
          className="spectrum-item"
          data-index={1}
          onMouseEnter={this.handleMouseHover}
        >
          <div className="tooltip">
            <div className="tooltiptext spec">education</div>
          </div>
        </li>
        <li
          className="spectrum-item"
          data-index={2}
          onMouseEnter={this.handleMouseHover}
        >
          <div className="tooltip">
            <div className="tooltiptext spec">agriculture</div>
          </div>
        </li>
        <li
          className="spectrum-item"
          data-index={3}
          onMouseEnter={this.handleMouseHover}
        >
          <div className="tooltip">
            <div className="tooltiptext spec">health</div>
          </div>
        </li>
        <li
          className="spectrum-item"
          data-index={4}
          onMouseEnter={this.handleMouseHover}
        >
          <div className="tooltip">
            <div className="tooltiptext spec">water</div>
          </div>
        </li>
        <li
          className="spectrum-item"
          data-index={5}
          onMouseEnter={this.handleMouseHover}
        >
          <div className="tooltip">
            <div className="tooltiptext spec">nutrition </div>
          </div>
        </li>
        <li
          className="spectrum-item"
          data-index={6}
          onMouseEnter={this.handleMouseHover}
        >
          <div className="tooltip">
            <div className="tooltiptext spec">infancy </div>
          </div>
        </li>
      </ul>
    );
  }
}

export default Spectrum;
