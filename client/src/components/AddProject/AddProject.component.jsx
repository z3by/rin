import React, { Component } from "react";
import "./AddProject.css";
import axios from "axios";
import GoogleMapReact from "google-map-react";
import { mapApi } from "../../config/map.config";
import Paper from "@material-ui/core/Paper";

const types = [
  "Health",
  "Nutrition",
  "Water",
  "Agriculture",
  "Infancy",
  "Housing"
];

const Marker = () => {
  return (
    <div className="marker">
      <i className="fas fa-map-marker-alt" />
    </div>
  );
};
export default class AddProject extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      title: "",
      start_date: "",
      capacity: 0,
      organization_name: "",
      img_url: "",
      type: "",
      project_description: "",
      countryName: "",
      lng: 0,
      lat: 0,
      zoom: 0,
      loading: false,
      formValid: false,
      uploaded: false
    };
  }

  componentWillMount() {
    this.fetchAllCountries();
  }

  componentDidMount() {}

  enableAddButton = () => {
    this.setState({
      formValid: true
    });
  };

  disableAddButton = () => {
    this.setState({
      formValid: false
    });
  };

  checkButtonAvailability = () => {
    const state = this.state;
    // check if the user added all required input
    const isValid =
      state.title &&
      state.start_date &&
      state.type &&
      state.img_url &&
      state.project_description &&
      state.countryName &&
      state.lng &&
      state.lat;

    if (isValid) {
      this.enableAddButton();
    } else {
      this.disableAddButton();
    }
  };

  fetchAllCountries = () => {
    axios.get("/api/countries").then(res => {
      this.setState({ countries: res.data });
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      this.checkButtonAvailability();
    });
  };

  onMapClick = ({ lng, lat }) => {
    this.setState({ lng: lng, lat: lat }, () => {
      this.checkButtonAvailability();
    });
  };

  addProject = e => {
    e.preventDefault();

    let projectData = {
      title: this.state.title,
      start_date: this.state.start_date,
      capacity: this.state.capacity,
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
      .then(response => {
        document.querySelector(".admin-form form").reset();

        this.setState({
          img_url: "",
          uploaded: true,
          formValid: false
        });

        setTimeout(() => {
          this.setState({
            uploaded: false
          });
          this.props.history.push("/map");
        }, 3000);
      })
      .catch(error => {
        console.log(error);
      });
  };

  // upload image to the storage
  onChangeImg = e => {
    this.setState({
      loading: true
    });
    e.preventDefault();
    const formData = new FormData();
    formData.append("img", e.target.files[0]);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };

    axios.post("/api/upload", formData, config).then(res => {
      const imageURL = res.data.location;

      this.setState(
        {
          img_url: imageURL,
          loading: false
        },
        () => {
          this.checkButtonAvailability();
        }
      );
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
    let typesUI = types.map((type, i) => {
      return (
        <option value={type} key={i}>
          {type}
        </option>
      );
    });
    return (
      <div className="container fadeInFast">
        <Paper className="admin-form">
          <form onSubmit={this.addProject}>
            <h4 className="color-2">Fill your project info here</h4>
            <p>your request will be added after reviewing it by our team</p>
            <input
              type="text"
              name="title"
              id="project-title"
              placeholder="Project Title"
              onChange={this.onChange}
            />
            <input
              type="text"
              name="project_description"
              id="project-desc"
              placeholder="Project Description"
              onChange={this.onChange}
            />
            <input
              type="date"
              name="start_date"
              id="start_date"
              placeholder="Start Date"
              onChange={this.onChange}
            />
            <input
              type="number"
              min="0"
              placeholder="Capacity"
              name="capacity"
              id="capacity"
              onChange={this.onChange}
            />
            <input
              type="text"
              placeholder="Organization Name"
              name="organization_name"
              id="organization_name"
              onChange={this.onChange}
            />
            <label htmlFor="img">Upload image..</label>
            <input
              type="file"
              name="img"
              placeholder="Upload Image"
              accept="image/*"
              onChange={this.onChangeImg}
            />
            <img
              className="admin-img-update"
              src={this.state.img_url}
              alt="Project uploaded"
            />
            <img
              src="/imgs/loading.gif"
              alt=""
              className="loading"
              style={{ display: this.state.loading ? "block" : "none" }}
            />
            <label htmlFor="type">Project Type</label> <br />
            <select name="type" id="type" onChange={this.onChange}>
              <option value="select type">Select Type</option>
              {typesUI}
            </select>
            <label htmlFor="countryName">Project Country</label> <br />
            <select
              name="countryName"
              id="countryName"
              onChange={this.onChange}
            >
              <option value="select type">Select Country</option>
              {countries}
            </select>
            <div className="form-popup" id="myForm">
              <GoogleMapReact
                style={{ height: "40vh", width: "40vw" }}
                bootstrapURLKeys={{ key: mapApi }}
                defaultCenter={{ lng: this.state.lng, lat: this.state.lat }}
                defaultZoom={this.state.zoom}
                onClick={this.onMapClick}
              >
                <Marker lng={this.state.lng} lat={this.state.lat} />
              </GoogleMapReact>
            </div>
            <button
              type="submit"
              className="btn-admin"
              disabled={!this.state.formValid}
            >
              <i className="fas fa-plus" /> Add Project
            </button>
            <div
              className="done-img"
              style={{ opacity: this.state.uploaded ? "1" : "0" }}
            >
              <h4>Thanks! your project will be added after reviewing ...</h4>
            </div>
          </form>
        </Paper>
      </div>
    );
  }
}
