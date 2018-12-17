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
      projectData: {
        Sdgs: [],
        Countries: [],
        Founders: [],
        Investors: [],
        sector: {},
        contact: {},
        refugeeInvestmentType: {}
      }
    };
  }

  componentDidMount() {
    this.fetchProject();
  }

  fetchProject = () => {
    const projectId = this.props.match.params.id;
    Axios.get("/api/projects/" + projectId).then(result => {
      console.log(result.data);

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
            <strong>Sector:</strong> {project.sector.name}
          </Typography>
          <Typography variant="subtitle1" className="color-3 text center">
            <strong>Investment Size:</strong> {project.investmentSize} $
          </Typography>
          <Typography variant="subtitle1" className="color-3 text center">
            <strong>Start Year:</strong> {new Date(project.year).getFullYear()}
          </Typography>
          <Typography variant="subtitle1" className="color-3 text center">
            <strong>refugee investment type:</strong>{" "}
            {project.refugeeInvestmentType.name}
          </Typography>
        </div>

        <img src={project.img} className="w-100" alt="" />
        <div className="container">
          <Typography variant="h6" className="color-5">
            Thesis
          </Typography>
          <Typography variant="body1">{project.thesis}</Typography>
          <Typography variant="h6" className="color-5">
            Impact
          </Typography>
          <Typography variant="body1">{project.impact}</Typography>
          <Typography variant="h6" className="color-5">
            Structure
          </Typography>
          <Typography variant="body1">{project.structure}</Typography>
          <Typography variant="h6" className="color-5">
            contact info
          </Typography>
          <div className="contact-links flex-centerd">
            <a href={"tel:" + project.contact.phone1} className="contact-field">
              <i className="fas fa-phone" />
              {project.contact.phone1}
            </a>
            <a href={"tel:" + project.contact.phone2} className="contact-field">
              <i className="fas fa-mobile" />
              {project.contact.phone2}
            </a>
            <a
              href={"mailto:" + project.contact.email1}
              className="contact-field"
            >
              <i
                style={{ fontSize: "1.5rem" }}
                className="color-2 fas fa-envelope"
              />
              {project.contact.email1}
            </a>
            {!project.contact.email2 ? null : (
              <a
                href={"mailto:" + project.contact.email2}
                className="contact-field"
              >
                <i
                  style={{ fontSize: "1.5rem" }}
                  className="color-2 far fa-envelope"
                />
                {project.contact.email2}
              </a>
            )}

            <a
              target="_blank"
              href={project.contact.website}
              className="contact-field"
            >
              <i
                style={{ fontSize: "1.5rem" }}
                className="color-2 fas fa-globe"
              />
              visit the project website
            </a>
            {!project.contact.facebook ? null : (
              <a
                target="_blank"
                href={project.contact.facebook}
                className="contact-field"
              >
                <i
                  style={{ fontSize: "1.5rem" }}
                  className="color-2 fab fa-facebook"
                />
                facebook contact
              </a>
            )}
            {!project.contact.twitter ? null : (
              <a
                target="_blank"
                href={project.contact.twitter}
                className="contact-field"
              >
                <i
                  style={{ fontSize: "1.5rem" }}
                  className="color-2 fab fa-twitter"
                />
                twitter contact
              </a>
            )}
            {!project.contact.instagram ? null : (
              <a
                target="_blank"
                href={project.contact.instagram}
                className="contact-field"
              >
                <i
                  style={{ fontSize: "1.5rem" }}
                  className="color-2 fab fa-instagram"
                />
                instagram contact
              </a>
            )}
            {!project.contact.fax ? null : (
              <a
                target="_blank"
                href={project.contact.fax}
                className="contact-field"
              >
                <i
                  style={{ fontSize: "1.5rem" }}
                  className="color-2 fas fa-fax"
                />
                Fax: {project.contact.fax}
              </a>
            )}
            {!project.contact.address ? null : (
              <address className="contact-field">
                <i
                  style={{ fontSize: "1.5rem" }}
                  className="color-2 fas fa-address-card"
                />
                Address: {project.contact.address}
              </address>
            )}
          </div>
        </div>
      </Paper>
    );
  }
}
