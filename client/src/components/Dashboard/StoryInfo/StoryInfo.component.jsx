import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Axios from "axios";
import "./StoryInfo.css";
import draftToHtml from "draftjs-to-html";
import renderHTML from "react-render-html";
import IconButton from "@material-ui/core/IconButton";

export default class StoryInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storyData: {
        project: {
          Sdgs: [],
          refugeeInvestmentType: {},
          Countries: [],
          contact: {}
        }
      },
      myText: ""
    };
  }

  componentDidMount() {
    this.fetchStory();
  }

  fetchStory = () => {
    const StoryId = this.props.match.params.id;
    Axios.get("/api/stories/" + StoryId).then(result => {
      this.setState({ storyData: result.data[0] }, () => {
        this.setState({
          myText: draftToHtml(JSON.parse(this.state.storyData.storyText))
        });
      });
    });
  };

  goDown = () => {
    document.body.scrollBy({
      top: window.innerHeight - document.body.scrollTop,
      behavior: "smooth"
    });
  };

  render() {
    let story = this.state.storyData;
    let { myText } = this.state;
    const project = story.project;
    return (
      <Paper
        style={{ position: "relative" }}
        className="fadeInFast story-info-details"
      >
        <div
          className="header-img"
          style={{
            backgroundImage: "url(" + story.img + ")"
          }}
        />
        <div className="story-header">
          <Typography
            variant="h3"
            className="color-1 upper text-center"
            style={{
              fontWeight: "bolder",
              padding: 10
            }}
          >
            {story.buisness}
          </Typography>
          <Typography
            variant="h5"
            className="color-1 capitalize text-center"
            style={{ padding: 10 }}
          >
            {story.buisnessDescription}
          </Typography>

          <div
            className="flex-centerd"
            style={{
              width: "100%",
              margin: "30px auto"
            }}
          >
            <Avatar
              className="lens-square"
              src={story.project.refugeeInvestmentType.img}
            />
            {this.state.storyData.project.Sdgs.map((sdg, i) => {
              return <Avatar className="lens-square" src={sdg.logo} key={i} />;
            })}
          </div>
          <div
            className="flex-centerd"
            style={{
              width: "100%",
              margin: "30px auto"
            }}
          >
            <Typography
              variant="h6"
              className="color-1 capitalize text-center"
              style={{ padding: 10 }}
            >
              Investment Size: {story.project.investmentSize} $
            </Typography>
          </div>
          <div
            className="flex-centerd"
            style={{
              width: "50%",
              margin: "30px auto"
            }}
          >
            {story.project.Countries.map(country => {
              return <Avatar src={country.flag} style={{ marginLeft: 10 }} />;
            })}
          </div>
          <div className="go-down" onClick={this.goDown}>
            <IconButton onClick={this.goDown}>
              <i className="fas fa-arrow-down color-1" />
            </IconButton>
          </div>
        </div>
        <div className="container">
          {renderHTML(myText)}

          <div className="contact-links flex-centerd">
            <a href={"tel:" + project.contact.phone1} className="contact-field">
              <i className="fas fa-phone" />
            </a>
            <a href={"tel:" + project.contact.phone2} className="contact-field">
              <i className="fas fa-mobile" />
            </a>
            <a
              href={"mailto:" + project.contact.email1}
              className="contact-field"
            >
              <i
                style={{ fontSize: "1.5rem" }}
                className="color-2 fas fa-envelope"
              />
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
