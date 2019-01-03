import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
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
      this.setState({ projectData: result.data[0] });
    });
  };

  render() {
    const project = this.state.projectData;
    return (
      <div style={{ padding: 20, margin: 40 }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar src={project.logo} style={{ marginRight: 10 }} />
          <Typography variant="title" className="color-5">
            {project.organization}
          </Typography>
        </div>
        <Typography variant="h4" className="color-5 capitalize text-center">
          {project.name}
        </Typography>

        <img src={project.img} className="w-100" alt="" />
        <div className="">
          <Typography
            variant="h6"
            style={{ marginTop: 30 }}
            className="color-5"
          >
            Sector: {project.sector.name}
          </Typography>
          <Typography
            variant="h6"
            style={{ marginTop: 30 }}
            className="color-5"
          >
            Investment Size: {project.investmentSize} $
          </Typography>
          <Typography
            variant="h6"
            style={{ marginTop: 30 }}
            className="color-5"
          >
            Start Year: {new Date(project.year).getFullYear()}
          </Typography>
          <Typography
            variant="h6"
            style={{ display: "flex", marginTop: 30 }}
            className="color-5"
          >
            refugee investment type:
            <Avatar
              src={project.refugeeInvestmentType.img}
              style={{ marginLeft: 10 }}
            />
          </Typography>
          <Typography
            variant="h6"
            style={{ display: "flex", marginTop: 30 }}
            className="color-5"
          >
            Sustainable development goals:
            {project.Sdgs.map((sdg, i) => {
              return <Avatar src={sdg.logo} style={{ marginLeft: 10 }} />;
            })}
          </Typography>
          <Typography
            variant="h6"
            style={{ marginTop: 30 }}
            className="color-5"
          >
            Investment Thesis
          </Typography>
          <Typography variant="body1">{project.thesis}</Typography>
          <Typography
            variant="h6"
            style={{ marginTop: 30 }}
            className="color-5"
          >
            Impact
          </Typography>
          <Typography variant="body1">{project.impact}</Typography>
          <Typography
            variant="h6"
            style={{ marginTop: 30 }}
            className="color-5"
          >
            Structure
          </Typography>
          <Typography variant="body1">{project.structure}</Typography>
          <Card style={{ marginTop: 50 }}>
            <Typography variant="h6" className="color-5 text-center upper">
              contact info
            </Typography>

            <div className="contact-links flex-centerd">
              <a
                href={"tel:" + project.contact.phone1}
                className="contact-field"
              >
                <i className="fas fa-phone" />
                {project.contact.phone1}
              </a>
              <a
                href={"tel:" + project.contact.phone2}
                className="contact-field"
              >
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
          </Card>
        </div>
      </div>
    );
  }
}
