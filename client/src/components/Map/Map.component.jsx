import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import "./Map.css";
import * as options from "./map-options";
import * as projects from "./projects-data.json";
import Dot from "./Dot/Dot.react.jsx";
import Filter from "./Filter/Filter.react.jsx";

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

  // get the current type from the filter component and set it to the state;
  setCurrentType = type => {
    this.setState({
      currentType: type
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
        <Filter setCurrentType={this.setCurrentType} />
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
