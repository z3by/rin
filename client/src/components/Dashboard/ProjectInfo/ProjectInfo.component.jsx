import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Axios from "axios";
import "./ProjectInfo.css";

export default class ProjectInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectData: { Sdgs: [], Countries: [], Founders: [], Investors: [] }
    };
  }

  componentDidMount() {
    this.fetchProject();
  }

  fetchProject = () => {
    const projectId = this.props.match.params.id;
    Axios.get("/api/projects/" + projectId).then(result => {
      console.log(result.data[0]);
      this.setState({ projectData: result.data[0] });
    });
  };

  render() {
    const project = this.state.projectData;
    return (
      <Paper style={{ padding: 20, margin: 40 }}>
        <div className="flex-centerd">
          <Avatar src={project.logo} style={{ marginRight: 10 }} />
          <Typography variant="title" className="color-3 text-center">
            {project.organization}
          </Typography>
        </div>
        <Typography variant="h4" className="color-5 capitalize text-center">
          {project.name}
        </Typography>
        <div className="grid-4" style={{ marginTop: 30 }}>
          <Typography variant="subtitle1" className="color-3 text center">
            <strong>Sector:</strong> {project.sector}
          </Typography>
          <Typography variant="subtitle1" className="color-3 text center">
            <strong>Investment Size:</strong> {project.investmentSize} $
          </Typography>
          <Typography variant="subtitle1" className="color-3 text center">
            <strong>Start Year:</strong> {new Date(project.year).getFullYear()}
          </Typography>
          <Typography variant="subtitle1" className="color-3 text center">
            {project.refugeeInvestmentType}
          </Typography>
        </div>

        <img src={project.img} className="w-100" alt="" />
        <div className="container">
          <Typography variant="h4" className="color-2">
            Thesis
          </Typography>
          <Typography variant="body1">{project.thesis}</Typography>
          <Typography variant="h4" className="color-2">
            Impact
          </Typography>
          <Typography variant="body1">{project.impact}</Typography>
          <Typography variant="h4" className="color-2">
            Structure
          </Typography>
          <Typography variant="body1">{project.structure}</Typography>
        </div>
      </Paper>
    );
  }
}
