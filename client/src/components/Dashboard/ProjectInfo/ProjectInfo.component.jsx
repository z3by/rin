import React, { Component } from 'react';
import axios from "axios";
import "./ProjectInfo.css";

export default class ProjectInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            project: {},
            country: ""
        }
    }

    componentWillMount() {
        this.getProject(this.state.id);
    }

    getProject = (id) => {
        axios.get(`/api/projects/${id}`).then(res => {
            this.setState({ project: res.data[0] }, () => {
                this.getProjectCountry(this.state.project.location_id);
            });
        });
    }

    getProjectCountry = (locationId) => {
        axios.get(`/api/projects/location/${locationId}`).then(res => {
            this.setState({ country: res.data[0]["name"] });
        });
    }

    render() {
        return (
            <div>
                <h3>Project ID</h3>
                <p>{this.state.id}</p>

                <h3>Project Tilte</h3>
                <p>{this.state.project.title}</p>

                <h3>Project Country</h3>
                <p>{this.state.country}</p>

                <h3>Project Description</h3>
                <p>{this.state.project.project_description}</p>

                <h3>Project Start Date</h3>
                <p>{this.state.project.start_date}</p>


                <h3>Project Capacity</h3>
                <p>{this.state.project.capacity}</p>


                <h3>Project Organization Name</h3>
                <p>{this.state.project.organization_name}</p>


                <h3>Project Type</h3>
                <p>{this.state.project.type}</p>


                <h3>Project Image</h3>
                <img src={this.state.project.img_url} alt="Project Img" />
            </div>
        )
    }
}
