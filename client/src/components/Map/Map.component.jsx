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
    projects: [],
    filterOptions: {
      type: "",
      title: "",
      projectName: "",
      year: 2018,
      benefits: 10000000,
      organizationName: "",
      capacity: 10000,
      country: ""
    },
    filteredProjects: []
  };

  componentWillMount() {
    this.fetchProjects();
  }

  // get all the projects and map it to the state;
  fetchProjects = () => {
    this.setState({
      projects: projects,
      filteredProjects: projects
    });
  };

  // get the user filter input and call the filter by the options func
  setFilterOptions = e => {
    this.setState(
      {
        filterOptions: {
          ...this.state.filterOptions,
          [e.target.name]: e.target.value
        }
      },
      this.filterProjectsByOptions
    );
  };

  // filter the projects by the given catrgories;
  filterProjectsByOptions = () => {
    // the filter callback to use;
    const theFilter = project => {
      const options = this.state.filterOptions;

      // get only the projects that follow this pattern
      const filterCondition =
        project.projectName
          .toLowerCase()
          .includes(options.projectName.toLowerCase()) &&
        project.organizationName
          .toLowerCase()
          .includes(options.organizationName.toLowerCase());

      return filterCondition;
    };

    // calling the filter;
    const filteredProjects = this.state.projects.filter(theFilter);

    // set the filtered projects array to the state;
    this.setState({
      filteredProjects: filteredProjects
    });
  };

  render() {
    const dots = this.state.filteredProjects.map((project, key) => {
      return (
        <Dot
          lng={project.position.lng}
          lat={project.position.lat}
          key={key}
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
          <Spectrum className="" filterByType={this.filterProjectsByType} />
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
