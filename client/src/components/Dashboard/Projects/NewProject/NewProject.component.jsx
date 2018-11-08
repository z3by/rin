import React, { Component } from "react";
import axios from "axios";
import GoogleMapReact from "google-map-react";
import { mapApi } from "../../../../config/map.config";
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
      organization_name: "",
      img_url: "",
      type: "",
      project_description: "",
      countryName: "",
      lng: 0,
      lat: 0,
      zoom: 0,
      loading: false
    };
  }

  componentWillMount() {
    this.fetchAllCountries();
  }

  componentDidMount() {
    document.body.style.overflowY = "auto";
  }

  enableAddButton = () => {
    document.querySelector(".btn-admin").disabled = false;
    document.querySelector(".btn-admin").style.backgroundColor = "#222";
    document
      .querySelector(".btn-admin")
      .addEventListener("mouseenter", function() {
        document.querySelector(".btn-admin").style.backgroundColor = "#f90";
      });
    document
      .querySelector(".btn-admin")
      .addEventListener("mouseleave", function() {
        document.querySelector(".btn-admin").style.backgroundColor = "#222";
      });
  };

  disableAddButton = () => {
    document.querySelector(".btn-admin").disabled = true;
    document.querySelector(".btn-admin").style.backgroundColor = "#666";
  };

  checkButtonAvailability = () => {
    if (
      this.state.title &&
      this.state.project_description &&
      this.state.organization_name &&
      this.state.capacity &&
      this.state.img_url &&
      this.state.type &&
      this.state.countryName &&
      this.state.start_date &&
      this.state.lat &&
      this.state.lng
    ) {
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
      .then(function(response) {
        document.querySelector(".admin-form form").reset();
        document.querySelector(".done-img").style.display = "flex";
        setTimeout(() => {
          document.querySelector(".done-img").style.display = "none";
        }, 3000);
      })
      .catch(function(error) {
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
    let types = this.state.types.map((type, i) => {
      return (
        <option value={type} key={i}>
          {type}
        </option>
      );
    });

    return (
      <div className="admin-form">
        <form onSubmit={this.addProject}>
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
          <input
            required
            type="file"
            name="img"
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
              style={{ height: "40vh", width: "40vw" }}
              bootstrapURLKeys={{ key: mapApi }}
              defaultCenter={{ lng: this.state.lng, lat: this.state.lat }}
              defaultZoom={this.state.zoom}
              onClick={this.onMapClick}
            >
              <Marker lng={this.state.lng} lat={this.state.lat} />
            </GoogleMapReact>
          </div>
          <button type="submit" className="btn-admin" disabled>
            <p>
              <i className="fas fa-plus" /> Add Project
            </p>
          </button>
          <div className="done-img">
            <img src="/imgs/done.gif" alt="" />
          </div>
        </form>
      </div>
    );
  }
}
