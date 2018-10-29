import React, { Component } from "react";
import axios from "axios";
import GoogleMapReact from "google-map-react";
import { mapApi } from "../../../../config/map.config";
import "./UpdateProject.css";

const Marker = () => {
  return (
    <div className="marker">
      <i className="fas fa-map-marker-alt" />
    </div>
  );
};

export default class UpdateProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      countries: [],
      project: {},
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
      zoom: 0
    };
  }

  componentWillMount() {
    this.fetchAllCountries();
    this.getProject(this.state.id);
  }

  componentDidMount() {
    document.body.style.overflowY = "auto";
  }

  getProject = id => {
    axios.get(`/api/projects/${id}`).then(res => {
      this.setState({ project: res.data[0] }, () => {
        this.setState(
          {
            title: res.data[0]["title"],
            start_date: res.data[0].start_date.slice(0, 10),
            capacity: res.data[0]["capacity"],
            organization_name: res.data[0]["organization_name"],
            img_url: res.data[0]["img_url"],
            type: res.data[0]["type"],
            project_description: res.data[0]["project_description"]
          },
          () => {
            console.log(this.state.start_date);
          }
        );
        this.getProjectCountry(this.state.project.location_id);
        this.getProjectLocation(this.state.project.location_id);
      });
    });
  };

  fetchAllCountries = () => {
    axios.get("/api/countries").then(res => {
      this.setState({ countries: res.data });
    });
  };

  getProjectCountry = locationId => {
    axios.get(`/api/projects/location/${locationId}`).then(res => {
      this.setState({ countryName: res.data[0]["name"] });
    });
  };

  getProjectLocation = locationId => {
    axios.get(`/api/locations/${locationId}`).then(res => {
      this.setState({ lat: res.data[0]["lat"], lng: res.data[0]["lng"] });
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onChangeImg = e => {
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
      this.setState({
        img_url: imageURL
      });
    });
  };

  onMapClick = ({ lng, lat }) => {
    this.setState({ lng: lng, lat: lat }, () => {
      console.log(this.state.lat, this.state.lng);
    });
  };

  updateProject = e => {
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
      .put(`/api/projects/${this.state.id}`, projectData)
      .then(function(response) {
        document.querySelector(".done-img").style.display = "flex";
        setTimeout(() => {
          document.querySelector(".done-img").style.display = "none";
        }, 6000);
        console.log("UPDATED SUCCESSFULLY");
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    let countries = this.state.countries.map((country, i) => {
      if (country === this.state.countryName) {
        return (
          <option value={country.name} key={i} selected>
            {country.name}
          </option>
        );
      } else {
        return (
          <option value={country.name} key={i}>
            {country.name}
          </option>
        );
      }
    });
    let types = this.state.types.map((type, i) => {
      if (type === this.state.project.type) {
        return (
          <option value={type} key={i} selected>
            {type}
          </option>
        );
      } else {
        return (
          <option value={type} key={i}>
            {type}
          </option>
        );
      }
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
            value={this.state.title}
          />
          <br />
          <br />
          <label htmlFor="project-desc">Project Description</label> <br />
          <input
            required
            type="text"
            name="project_description"
            id="project-desc"
            value={this.state.project_description}
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
            value={this.state.start_date}
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
            value={this.state.capacity}
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
            value={this.state.organization_name}
            onChange={this.onChange}
          />
          <br />
          <br />
          <label htmlFor="img_url">Image Url</label> <br />
          <img
            className="admin-img-update"
            src={this.state.img_url}
            alt="Project Image"
          />
          <input
            type="file"
            accept="image/*"
            name="img_url"
            id="img_url"
            onChange={this.onChangeImg}
          />
          <br />
          <br />
          <label htmlFor="type">Project Type</label> <br />
          <select required name="type" id="type" onChange={this.onChange}>
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
          <button onClick={this.updateProject}>Update Project</button>
          <div className="done-img">
            <img src="/imgs/done.gif" alt="" />
          </div>
        </form>
      </div>
    );
  }
}
