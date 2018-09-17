import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import "./Map.css";
import * as options from "./map-options";
import * as projects from "./projects-data.json";
import Dot from "./Dot/Dot.react";

export default class Map extends Component {
  state = {
    position: {
      lat: 31.95,
      lng: 35.99
    },
    zoom: 5,
    currentType: "agriculture"
  };

  componentWillMount() {
    this.getUserLocation();
  }

  // get the user location;
  getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        position: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      });
    });
  };

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

    this.setState({
      currentType: types[index]
    });
  };

  render() {
    const dots = projects.map((project, key) => {
      return (
        this.state.currentType === project.type && (
          <Dot
            lng={project.position.lng}
            lat={project.position.lat}
            key={key}
            project={project}
            key={key}
          />
        )
      );
    });

    return (
      <div
        style={{ height: "100vh", width: "100%" }}
        className="map fadeInFast"
      >
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
        <GoogleMapReact
          options={options}
          bootstrapURLKeys={{ key: "AIzaSyAxYHlwX3Vu7-ygTF2wiB3sjSyFU7mAMJE" }}
          defaultCenter={this.state.position}
          defaultZoom={this.state.zoom}
        >
          {[dots]}
        </GoogleMapReact>
      </div>
    );
  }
}
