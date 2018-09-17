import React from "react";

import "./Spectrum.css";

class Spectrum extends React.Component {
  constructor(props) {
    super(props);
  }

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

    this.props.setCurrentType(types[index]);
  };

  render() {
    return (
      <div className="filter-spectrum">
        <ul className="spectrum">
          <li
            className="spectrum-item"
            data-index={0}
            onMouseEnter={this.handleMouseHover}
          >
            <div class="tooltip">
              <div class="tooltiptext spec">housing projects</div>
            </div>
          </li>
          <li
            className="spectrum-item"
            data-index={1}
            onMouseEnter={this.handleMouseHover}
          >
            <div class="tooltip">
              <div class="tooltiptext spec">education projects</div>
            </div>
          </li>
          <li
            className="spectrum-item"
            data-index={2}
            onMouseEnter={this.handleMouseHover}
          >
            <div class="tooltip">
              <div class="tooltiptext spec">agriculture projects</div>
            </div>
          </li>
          <li
            className="spectrum-item"
            data-index={3}
            onMouseEnter={this.handleMouseHover}
          >
            <div class="tooltip">
              <div class="tooltiptext spec">health projects</div>
            </div>
          </li>
          <li
            className="spectrum-item"
            data-index={4}
            onMouseEnter={this.handleMouseHover}
          >
            <div class="tooltip">
              <div class="tooltiptext spec">water projects</div>
            </div>
          </li>
          <li
            className="spectrum-item"
            data-index={5}
            onMouseEnter={this.handleMouseHover}
          >
            <div class="tooltip">
              <div class="tooltiptext spec">nutrition projects</div>
            </div>
          </li>
          <li
            className="spectrum-item"
            data-index={6}
            onMouseEnter={this.handleMouseHover}
          >
            <div class="tooltip">
              <div class="tooltiptext spec">infancy projects</div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Spectrum;
