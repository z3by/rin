import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Axios from "axios";
import "./StoryInfo.css";
import draftToHtml from "draftjs-to-html";
import renderHTML from "react-render-html";

export default class StoryInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storyData: {
        project: { Sdgs: [], refugeeInvestmentType: {}, Countries: [] }
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
        // this.setState({ storyData: { ...this.state.storyData, storyText: draftToHtml(JSON.parse(this.state.storyData.storyText)) } }, () => {
        // });
        this.setState({
          myText: draftToHtml(JSON.parse(this.state.storyData.storyText))
        });
      });
    });
  };

  render() {
    let story = this.state.storyData;
    let { myText } = this.state;
    console.log(story);

    return (
      <Paper style={{ position: "relative" }}>
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
              style={{ borderRadius: 0, height: 50, width: 50 }}
              src={story.project.refugeeInvestmentType.img}
            />
            {this.state.storyData.project.Sdgs.map((sdg, i) => {
              return (
                <Avatar
                  style={{ borderRadius: 0, height: 50, width: 50, margin: 10 }}
                  src={sdg.logo}
                  key={i}
                />
              );
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
        </div>
        <div className="container">{renderHTML(myText)}</div>
      </Paper>
    );
  }
}
