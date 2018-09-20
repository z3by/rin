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
            <div className="tooltiptext spec">housing projects</div>
          </div>
        </li>
        <li
          className="spectrum-item"
          data-index={1}
          onMouseEnter={this.handleMouseHover}
        >
          <div className="tooltip">
            <div className="tooltiptext spec">education projects</div>
          </div>
        </li>
        <li
          className="spectrum-item"
          data-index={2}
          onMouseEnter={this.handleMouseHover}
        >
          <div className="tooltip">
            <div className="tooltiptext spec">agriculture projects</div>
          </div>
        </li>
        <li
          className="spectrum-item"
          data-index={3}
          onMouseEnter={this.handleMouseHover}
        >
          <div className="tooltip">
            <div className="tooltiptext spec">health projects</div>
          </div>
        </li>
        <li
          className="spectrum-item"
          data-index={4}
          onMouseEnter={this.handleMouseHover}
        >
          <div className="tooltip">
            <div className="tooltiptext spec">water projects</div>
          </div>
        </li>
        <li
          className="spectrum-item"
          data-index={5}
          onMouseEnter={this.handleMouseHover}
        >
          <div className="tooltip">
            <div className="tooltiptext spec">nutrition projects</div>
          </div>
        </li>
        <li
          className="spectrum-item"
          data-index={6}
          onMouseEnter={this.handleMouseHover}
        >
          <div className="tooltip">
            <div className="tooltiptext spec">infancy projects</div>
          </div>
        </li>
      </ul>
    );
  }
}

export default Spectrum;
