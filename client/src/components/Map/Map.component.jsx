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
    projects: []
  };

  componentWillMount() {
    this.getUserLocation();
    this.setTheProjects();
  }

  // ser all the projects to the state;
  setTheProjects = () => {
    this.setState({
      projects: projects
    });
  };

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

  // filter projects by organization name
  filterProjectsByOrgName = e => {
    const name = e.target.value;
    const filteredProjects = projects.filter(project => {
      return project.organizationName.includes(name.toLowerCase());
    });

    // set the state to the filtered projects
    this.setState({
      projects: filteredProjects
    });
  };

  // filter projects by organization name
  filterProjectsByProjectName = e => {
    const name = e.target.value;
    const filteredProjects = projects.filter(project => {
      return project.projectName.includes(name.toLowerCase());
    });

    // set the state to the filtered projects
    this.setState({
      projects: filteredProjects
    });
  };

  // filter projects by type;
  filterProjectsByType = type => {
    // filter the projects based on it own type
    const filteredProjects = projects.filter(project => {
      return project.type === type;
    });

    // set the state to the filtered projects
    this.setState({
      projects: filteredProjects
    });
  };

  onSlide = e => {
    if (e.target.id === "starting-year") {
      this.filterByYear(e.target.value);
    }
    if (e.target.id === "benefits") {
      this.filterByBenefits(e.target.value);
    }
    if (e.target.id === "capacity") {
      this.filterByCapacity(e.target.value);
    }
  };

  filterByYear = year => {
    const filteredProjects = projects.filter(project => {
      return project.year > year;
    });

    // set the state to the filtered projects
    this.setState({
      projects: filteredProjects
    });
  };

  filterByBenefits = benefits => {
    const filteredProjects = projects.filter(project => {
      return parseInt(project.benefits, 10) > parseInt(benefits, 10);
    });

    // set the state to the filtered projects
    this.setState({
      projects: filteredProjects
    });
  };

  filterByCapacity = capacity => {
    const filteredProjects = projects.filter(project => {
      return parseInt(project.capacity, 10) > parseInt(capacity, 10);
    });

    // set the state to the filtered projects
    this.setState({
      projects: filteredProjects
    });
  };

  filterByCountry = e => {
    const country = e.target.value;

    const filteredProjects = projects.filter(project => {
      return project.country.toLowerCase() === country.toLowerCase();
    });

    // set the state to the filtered projects
    this.setState({
      projects: filteredProjects
    });
  };

  closeProjectInfo = () => {
    document.querySelector(".project-info").style.display = "none";
  };

  render() {
    const dots = this.state.projects.map((project, key) => {
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
        <div className="red" />
        <div className="project-info">
          <div className="read-more-close" onClick={this.closeProjectInfo}>
            <i className="fas fa-times" />
          </div>
          <div className="project-info-content">
            <p />
          </div>
        </div>
        <Filter
          filterProjectsByOrgName={this.filterProjectsByOrgName}
          onSlide={this.onSlide}
          filterByCountry={this.filterByCountry}
        />
        <div className="spectrum-container">
          <Spectrum className="" filterByType={this.filterProjectsByType} />
        </div>
        <GoogleMapReact
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
