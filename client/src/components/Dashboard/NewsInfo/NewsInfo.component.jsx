import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Axios from "axios";
import "./NewsInfo.css";

export default class NewsInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsData: {},
      imageLoaded: false
    };
  }

  componentDidMount() {
    this.fetchNews();
  }

  fetchNews = () => {
    const newsId = this.props.match.params.id;
    Axios.get("/api/news/" + newsId).then(result => {
      this.setState({ newsData: result.data[0] });
    });
  };

  render() {
    const news = this.state.newsData;
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
              {news.title}
            </Typography>
            <Typography variant="sbutitle1" className="color-3 text-center">
              {news.subtitle}
            </Typography>
            <CardActions style={{ padding: 0, margin: "20px 0" }}>
              <a href={news.url}>
                <Button
                  style={{ background: "var(--color-2)" }}
                  className="color-1"
                >
                  Read full article
                </Button>
              </a>
            </CardActions>
          </CardContent>
          <CardMedia image={news.imgUrl} style={{ width: "40%" }} />
        </Card>
      </div>
    );
  }
}
