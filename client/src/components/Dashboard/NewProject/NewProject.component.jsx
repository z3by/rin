import React, { Component } from "react";
import axios from "axios";
import GoogleMapReact from "google-map-react";
import { mapApi } from "../../../config/map.config";
import "./NewProject.css";

const Marker = () => {
  return (
    <div className="marker">
      <i className="fas fa-map-marker-alt" />
    </div>
  );
};

export default class NewProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      types: [
        "Health",
        "Nutrition",
        "Water",
        "Agriculture",
        "Infancy",
        "Housing"
      ],
      title: "",
      start_date: "",
      capacity: 0,
      partner_id: 1,
      organization_name: "",
      img_url: "",
      type: "",
      project_description: "",
      countryName: "",
      lng: 0,
      lat: 0,
      zoom: 0
    };
  }

  componentWillMount() {
    this.fetchAllCountries();
  }

  componentDidMount() {
    document.body.style.overflowY = "auto";
  }

  fetchAllCountries = () => {
    axios.get("/api/countries").then(res => {
      this.setState({ countries: res.data });
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () => {});
  };

  onMapClick = ({ lng, lat }) => {
    this.setState({ lng: lng, lat: lat });
  };

  addProject = () => {
    let projectData = {
      title: this.state.title,
      start_date: this.state.start_date,
      capacity: this.state.capacity,
      partner_id: this.state.partner_id,
      organization_name: this.state.organization_name,
      img_url: this.state.img_url,
      type: this.state.type,
      project_description: this.state.project_description,
      countryName: this.state.countryName,
      lng: this.state.lng,
      lat: this.state.lat
    };
    axios
      .post("/api/projects", projectData)
      .then(function(response) {
        console.log("SUCCESS");
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  render() {
    let countries = this.state.countries.map((country, i) => {
      return (
        <option value={country.name} key={i}>
          {country.name}
        </option>
      );
    });
    let types = this.state.types.map((type, i) => {
      return (
        <option value={type} key={i}>
          {type}
        </option>
      );
    });

    return (
      <div className="admin-form">
        <form>
          <label htmlFor="project-title">Project Title</label> <br />
          <input
            required
            type="text"
            name="title"
            id="project-title"
            onChange={this.onChange}
          />
          <br />
          <br />
          <label htmlFor="project-desc">Project Description</label> <br />
          <input
            required
            type="text"
            name="project_description"
            id="project-desc"
            onChange={this.onChange}
          />
          <br />
          <br />
          <label htmlFor="start_date">Start Date</label> <br />
          <input
            required
            type="date"
            name="start_date"
            id="start_date"
            onChange={this.onChange}
          />
          <br />
          <br />
          <label htmlFor="capacity">Capacity</label> <br />
          <input
            required
            type="number"
            min="0"
            name="capacity"
            id="capacity"
            onChange={this.onChange}
          />
          <br />
          <br />
          <label htmlFor="organization_name">Organization Name</label> <br />
          <input
            required
            type="text"
            name="organization_name"
            id="organization_name"
            onChange={this.onChange}
          />
          <br />
          <br />
          <label htmlFor="img_url">Image Url</label> <br />
          <input required type="text" name="img_url" id="img_url" />
          <br />
          <br />
          <label htmlFor="type">Project Type</label> <br />
          <select required name="type" id="type" onChange={this.onChange}>
            <option value="select type">Select Type</option>
            {types}
          </select>
          <br />
          <br />
          <label htmlFor="countryName">Project Country</label> <br />
          <select
            required
            name="countryName"
            id="countryName"
            onChange={this.onChange}
          >
            <option value="select type">Select Country</option>
            {countries}
          </select>
          <div className="form-popup" id="myForm">
            <GoogleMapReact
              //className="project-map"
              style={{ height: "40vh", width: "40vw" }}
              bootstrapURLKeys={{ key: mapApi }}
              defaultCenter={{ lng: this.state.lng, lat: this.state.lat }}
              defaultZoom={this.state.zoom}
              onClick={this.onMapClick}
            >
              <Marker lng={this.state.lng} lat={this.state.lat} />
            </GoogleMapReact>

            <button onClick={this.addProject}>Add Project</button>
          </div>
        </form>
      </div>
    );
  }
}
