import React, { Component } from "react";
import axios from "axios";
import "./NewProject.css";

export default class NewProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      projectData: {
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
        lat: 0
      }
    };
  }

  componentWillMount() {
    this.fetchAllCountries();
  }

  fetchAllCountries = () => {
    axios.get("https://restcountries.eu/rest/v2/all").then(res => {
      this.state.countries = res.data;
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="new-project">
        <h1>Add New Project</h1>
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
        </from>
      </div>
    );
  }
}
