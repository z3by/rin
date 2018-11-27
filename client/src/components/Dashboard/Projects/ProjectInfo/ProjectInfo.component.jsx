import React, { Component } from "react";
import axios from "axios";
import "./ProjectInfo.css";

export default class ProjectInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      project: {},
      country: "",
      start_date: ""
    };
  }

  componentWillMount() {
    this.getProject(this.state.id);
  }

  componentDidMount() {
    document.body.style.overflowY = "auto";
  }

  getProject = id => {
    axios.get(`/api/projects/${id}`).then(res => {
      this.setState({ project: res.data[0] }, () => {
        this.setState({ start_date: res.data[0].start_date.slice(0, 10) });
        this.getProjectCountry(this.state.project.location_id);
      });
    });
  };

  getProjectCountry = locationId => {
    axios.get(`/api/projects/location/${locationId}`).then(res => {
      this.setState({ country: res.data[0]["name"] });
    });
  };

  render() {
    return (
      <div className="admin-info-single fadeInFast">
        <table>
          <tr>
            <th>Project ID</th>
            <td>{this.state.id}</td>
          </tr>
          <tr>
            <th>Project Tilte</th>
            <td>{this.state.project.title}</td>
          </tr>
          <tr>
            <th>Project Country</th>
            <td>{this.state.country}</td>
          </tr>
          <tr>
            <th>Project Description</th>
            <td>{this.state.project.project_description}</td>
          </tr>
          <tr>
            <th>Project Start Date</th>
            <td>{this.state.start_date}</td>
          </tr>
          <tr>
            <th>Project Capacity </th>
            <td>{this.state.project.capacity}</td>
          </tr>
          <tr>
            <th>Project Organization Name</th>
            <td>{this.state.project.organization_name}</td>
          </tr>
          <tr>
            <th>Project Type</th>
            <td>{this.state.project.type}</td>
          </tr>
          <tr>
            <th>Project Image</th>
            <td>
              <img
                className="admin-img"
                src={this.state.project.img_url}
                alt="Project Img"
              />
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
