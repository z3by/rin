import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import "./Map.css";
import * as options from "./map-options";
import * as projects from "./projects-data.json";
import Dot from "./Dot/Dot.component";
import Filter from "./Filter/Filter.component";
import Spectrum from "./Spectrum/Spectrum.component";
import { mapApi } from "../../config/map.config";

export default class Map extends Component {
  state = {
    position: {
      lat: 31.95,
      lng: 35.99
    },
    zoom: 0,
    filterOptions: {
      projectName: "",
      organizationName: "",
      country: "",
      capacity: 0,
      benefits: 0,
      year: 0
    },
    projects: []
  };

  componentWillMount() {
    this.fetchProjects();
  }

  // get all the projects and map it to the state;
  fetchProjects = () => {
    this.setState({
      projects: projects
    });
  };

  // get the user filter input and call the filter by the options func
  setFilterOptions = e => {
    this.setState({
      filterOptions: {
        ...this.state.filterOptions,
        [e.target.name]: e.target.value
      }
    });
  };

  // filter projects by it own type
  filterByType = type => {
    this.setState({
      filterOptions: {
        ...this.state.filterOptions,
        type: type
      }
    });
  };

  render() {
    const dots = this.state.projects.map((project, key) => {
      const options = this.state.filterOptions;
      let shown = project.projectName
        .toLowerCase()
        .includes(options.projectName.toLowerCase());

      return (
        <Dot
          lng={project.position.lng}
          lat={project.position.lat}
          key={key}
          style={{ display: shown ? "block" : "none" }}
          project={project}
        />
      );
    });

    return (
      <div
        style={{ height: "100vh", width: "100%" }}
        className="map fadeInFast"
      >
        <Filter filter={this.setFilterOptions} />
        <div className="spectrum-container">
          <div className="spectrum-popup">
            hover over different colors to filter by project type
          </div>
          <Spectrum className="" filterByType={this.filterByType} />
        </div>
        <GoogleMapReact
          className="land-map"
          options={options}
          bootstrapURLKeys={{ key: mapApi }}
          defaultCenter={this.state.position}
          defaultZoom={this.state.zoom}
        >
          {[dots]}
        </GoogleMapReact>
      </div>
    );
  }
}
