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
    center: [50, 0],
    zoom: 3,
    locadedProjects: [],
    locations: [],
    hoveredProject: {
      Countries: [],
      Sdgs: [],
      Founders: [],
      Investors: [],
      contact: {},
      sector: {},
      refugeeInvestmentType: {}
    },
    projectsInfo: [],
    filterOptions: {
      sectorId: 0,
      investmentSize: ""
    },
    filterOn: false
  };

  componentDidMount() {
    this.fetchProjects();
  }

  // get all the projects and map it to the state;
  fetchProjects = () => {
    const locations = [];
    Axios.get("/api/projectslocations", {
      params: { ...this.state.filterOptions }
    })
      .then(res => {
        console.log(this.state.filterOptions);

        res.data.forEach(project => {
          project.locations.forEach(location => {
            location.sector = project.sector.name;
            locations.push(location);
          });
        });
        this.setState({ locations: locations });
      })
      .catch(err => {
        console.log(err);
      });
  };

  _onChange = data => {
    if (data.marginBounds.nw.lat >= 85 || data.marginBounds.se.lat <= -85) {
      this.setState({
        center: [this.state.center[0] + 0.001, this.state.center[1]]
      });
    }
  };

  handleSpectrumHover = sectorName => {
    Axios.get("/api/sectors").then(res => {
      const currentSector = res.data.filter(sector => {
        return sector.name === sectorName;
      });

      const sectorId = currentSector[0].id;
      this.setState(
        {
          filterOptions: { ...this.state.filterOptions, sectorId: sectorId }
        },
        () => {
          this.fetchProjects();
        }
      );
    });
  };

  getProject = (id, location) => {
    this.state.locadedProjects.forEach(project => {
      if (project.id === id) {
        this.setState({
          hoveredProject: project,
          center: [location.lat, location.lng],
          zoom: 6
        });
        return;
      }
    });

    Axios.get("/api/projects/" + id).then(result => {
      this.setState({
        locadedProjects: [...this.state.locadedProjects, result.data[0]],
        hoveredProject: result.data[0]
      });
    });
  };

  onOutHover = () => {
    this.setState({
      center: [50, 0],
      zoom: 3
    });
  };

  handleFilterToggle = () => {
    this.setState({ filterOn: !this.state.filterOn });
  };

  filterByGivenOptions = options => {
    this.setState(
      {
        filterOptions: { ...this.state.filterOptions, ...options }
      },
      () => {
        this.fetchProjects();
      }
    );
  };

  render() {
    return (
      <div
        style={{ height: "100vh", width: "100%" }}
        className="map fadeInSlow"
      >
        <Spectrum handleMouseHover={this.handleSpectrumHover} />

        <Filter
          filterProjects={this.filterByGivenOptions}
          handleFilterToggle={this.handleFilterToggle}
          shown={this.state.filterOn}
        />
        <button
          button="true"
          className="filter-btn"
          onClick={this.handleFilterToggle}
          style={{ display: this.state.filterOn ? "none" : "block" }}
        >
          filter
        </button>
        <GoogleMapReact
          className="land-map"
          options={options}
          bootstrapURLKeys={{ key: mapApi }}
          center={this.state.center}
          zoom={this.state.zoom}
          onChange={this._onChange}
          handleMouseHover={this.handleSpectrumHover}
        >
          {this.state.locations.map((location, key) => {
            return (
              <Dot
                lng={location.lng}
                lat={location.lat}
                key={key}
                location={location}
                project={this.state.hoveredProject}
                onHover={this.getProject}
                onOutHover={this.onOutHover}
              />
            );
          })}
        </GoogleMapReact>
      </div>
    );
  }
}
