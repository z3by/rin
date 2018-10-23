import React, { Component } from "react";
import axios from "axios";
import GoogleMapReact from "google-map-react";
import { mapApi } from "../../../config/map.config";
import "./NewProject.css";
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
      img_url:
        "https://worldvisionadvocacy.org/wp-content/uploads/2017/10/W220-0005-107_706974.jpg",
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
    axios.get("https://restcountries.eu/rest/v2/all").then(res => {
      this.setState({ countries: res.data });
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      console.log(this.state);
    });
  };

  openForm = () => {
    document.getElementById("myForm").style.display = "block";
    console.log("hiiiiiiiiii");
  };

  closeForm = () => {
    document.getElementById("myForm").style.display = "none";
  };

  onClick = ({ lng, lat }) => {
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
      .then(function (response) {
        console.log("SUCCESS");
      })
      .catch(function (error) {
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
      <div className="new-project">
        <from method="POST">
          <label htmlFor="project-title">Project Title</label> <br />
          <input
            type="text"
            name="title"
            id="project-title"
            onChange={this.onChange}
          />
          <br />
          <br />
          <label htmlFor="project-desc">Project Description</label> <br />
          <input
            type="text"
            name="project_description"
            id="project-desc"
            onChange={this.onChange}
          />
          <br />
          <br />
          <label htmlFor="start_date">Start Date</label> <br />
          <input
            type="date"
            name="start_date"
            id="start_date"
            onChange={this.onChange}
          />
          <br />
          <br />
          <label htmlFor="capacity">Capacity</label> <br />
          <input
            type="number"
            name="capacity"
            id="capacity"
            onChange={this.onChange}
          />
          <br />
          <br />
          <label htmlFor="organization_name">Organization Name</label> <br />
          <input
            type="text"
            name="organization_name"
            id="organization_name"
            onChange={this.onChange}
          />
          <br />
          <br />
          <label htmlFor="img_url">Image Url</label> <br />
          <input type="text" name="img_url" id="img_url" />
          <br />
          <br />
          <label htmlFor="type">Project Type</label> <br />
          <select name="type" id="type" onChange={this.onChange}>
            <option value="select type">Select Type</option>
            {types}
          </select>
          <br />
          <br />
          <label htmlFor="countryName">Project Country</label> <br />
          <select name="countryName" id="countryName" onChange={this.onChange}>
            <option value="select type">Select Country</option>
            {countries}
          </select>
          <br />
          <br />
          <button className="open-button" onClick={this.openForm}>
            Select Project Location
          </button>
          <button type="submit" onClick={this.addProject}>
            Add Project
          </button>
          <div className="form-popup" id="myForm">
            <form className="form-container">
              <h1>Select Project location</h1>
              <GoogleMapReact
                //className="project-map"
                style={{ height: "40vh", width: "40vw" }}
                bootstrapURLKeys={{ key: mapApi }}
                defaultCenter={{ lng: this.state.lng, lat: this.state.lat }}
                defaultZoom={this.state.zoom}
                onClick={this.onClick}
              />

              <button
                type="button"
                className="btn cancel"
                onClick={this.closeForm}
              >
                Ok
              </button>
            </form>
          </div>
        </from>
      </div>
    );
  }
}
