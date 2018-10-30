import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import "./Map.css";
import * as options from "./map-options";
import Dot from "./Dot/Dot.component";
import Filter from "./Filter/Filter.component";
import Spectrum from "./Spectrum/Spectrum.component";
import { mapApi } from "../../config/map.config";
import Axios from "axios";

export default class Map extends Component {
  state = {
    position: {
      lat: 31.95,
      lng: 35.99
    },
    zoom: 0,
    filterOptions: {},
    projects: [],
    projectsInfo: [],
    currentProject: {}
  };

  componentWillMount() {
    this.fetchProjects();
  }

  // get all the projects and map it to the state;
  fetchProjects = () => {
    const options = this.state.filterOptions;
    for (const key in options) {
      if (!options[key]) {
        delete options[key];
      }
    }
    Axios.get("/api/projects/locations", {
      params: options
    }).then(res => {
      this.setState({
        projects: res.data
      });
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
    this.setState(
      {
        filterOptions: {
          ...this.state.filterOptions,
          type: type
        }
      },
      () => {
        this.fetchProjects();
      }
    );
  };

  // get one project info
  getProject = id => {
    let projectLoaded = false;
    this.state.projectsInfo.forEach(one => {
      if (one.id === id) {
        projectLoaded = true;
      }
    });
    if (projectLoaded) {
      return this.setCurrentProject(id);
    }
    Axios.get(`/api/projects/${id}`).then(res => {
      this.setState(
        {
          projectsInfo: [...this.state.projectsInfo, res.data[0]]
        },
        () => {
          this.setCurrentProject(id);
        }
      );
    });
  };

  // set the current hovered project in the state
  setCurrentProject = id => {
    this.state.projectsInfo.forEach(one => {
      if (one.id === id) {
        this.setState({
          currentProject: one
        });
      }
    });
  };

  render() {
    const dots = this.state.projects.map((project, key) => {
      return (
        <Dot
          hover={this.getProject}
          lng={project.lng}
          lat={project.lat}
          key={key}
          project={project}
          info={this.state.currentProject}
        />
      );
    });

    return (
      <div
        style={{ height: "100vh", width: "100%" }}
        className="map fadeInFast"
      >
        <Filter
          filter={this.setFilterOptions}
          fetchProjects={this.fetchProjects}
          options={this.state.filterOptions}
        />
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
