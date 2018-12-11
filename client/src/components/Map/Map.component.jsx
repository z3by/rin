import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import "./Map.css";
import { Link } from "react-router-dom";
import * as options from "./map-options";
import Dot from "./Dot/Dot.component";
import Filter from "./Filter/Filter.component";
import Spectrum from "./Spectrum/Spectrum.component";
import { mapApi } from "../../config/map.config";
import Axios from "axios";

export default class Map extends Component {
  state = {
    center: [0, 0],
    zoom: 1,
    filterOptions: {},
    locations: [],
    projectsInfo: [],
    currentProject: {}
  };

  componentDidMount() {
    this.fetchProjects();
  }

  // get all the projects and map it to the state;
  fetchProjects = () => {
    const locations = [];
    Axios.get("/api/projectslocations").then(res => {
      res.data.forEach(project => {
        project.locations.forEach(location => {
          location.sector = project.sector;
          locations.push(location);
        });
      });
      this.setState({ locations: locations });
    });
  };

  _onChange = data => {
    if (data.marginBounds.nw.lat >= 85 || data.marginBounds.se.lat <= -85) {
      this.setState({
        center: [this.state.center[0] + 0.001, this.state.center[1]]
      });
    }
  };

  render() {
    return (
      <div
        style={{ height: "100vh", width: "100%" }}
        className="map fadeInSlow"
      >
        <GoogleMapReact
          className="land-map"
          options={options}
          bootstrapURLKeys={{ key: mapApi }}
          center={this.state.center}
          zoom={this.state.zoom}
          onChange={this._onChange}
        >
          {this.state.locations.map(location => {
            return (
              <Dot
                lng={location.lng}
                lat={location.lat}
                key={location.id}
                location={location}
              />
            );
          })}
        </GoogleMapReact>
      </div>
    );
  }
}
