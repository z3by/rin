import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Axios from "axios";
import "./ResearchInfo.css";

export default class ResearchInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      researchData: {},
      imageLoaded: false
    };
  }

  componentDidMount() {
    this.fetchResearch();
  }

  fetchResearch = () => {
    const researchId = this.props.match.params.id;
    Axios.get("/api/researches/" + researchId).then(result => {
      this.setState({ researchData: result.data[0] });
    });
  };

  render() {
    const research = this.state.researchData;
    let year = new Date().getFullYear();

    return (
      <div className="container">
        <Card
          style={{
            margin: 0,
            position: "relative",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <CardContent style={{ width: "100%" }}>
            <Typography variant="h6" className="capitalize text-center">
              {research.title}
            </Typography>
            <Typography variant="sbutitle1" className="color-3 text-center">
              {research.subtitle}
            </Typography>
            <Typography variant="body2" className="color-3">
              Publisher: {research.publisher}
            </Typography>
            <Typography variant="body2" className="color-3">
              Year: {year}
            </Typography>
            <Typography variant="body2" className="color-3">
              Pages: {research.pages}
            </Typography>
            <CardActions style={{ padding: 0, margin: "20px 0" }}>
              <a href={research.researchUrl} download>
                <Button
                  style={{ background: "var(--color-2)" }}
                  className="color-1"
                >
                  Download
                </Button>
              </a>
            </CardActions>
          </CardContent>
          <CardMedia image={research.imgUrl} style={{ width: "40%" }} />
        </Card>
      </div>
    );
  }
}
