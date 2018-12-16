import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./MoreStories.css";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CircularProgress from "@material-ui/core/CircularProgress";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Axios from "axios";
import StoriesFilter from "./StoriesFilter/StoriesFilter.component";

export default class MoreStories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: [],
      loading: false,
      nomore: false,
      nostories: false
    };
  }

  componentDidMount() {
    this.fetchStories();
  }

  fetchStories = () => {
    this.setState({ loading: true });
    Axios.get("/api/stories/page", {
      params: {
        first: this.state.stories.length,
        last: this.state.stories.length + 3
      }
    })
      .then(res => {
        if (res.data.rows.length === 0) {
          this.setState({ nomore: true });
        }
        this.setState({
          stories: [...this.state.stories, ...res.data.rows],
          loading: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  filterStories = options => {
    const selectedOptions = {};
    for (const option in options) {
      if (options[option] !== "") {
        selectedOptions[option] = options[option];
      }
    }

    if (Object.keys(selectedOptions).length === 0) {
      return;
    }

    Axios.get("/api/stories/filter", { params: selectedOptions })
      .then(result => {
        console.log(result.data);

        this.setState({ stories: result.data }, () => {
          if (!this.state.stories.length) {
            this.setState({ nostories: true });
          }
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="more-stories">
        <div className="container" style={{ marginRight: 10 }}>
          {this.state.stories.map((story, i) => {
            return (
              <Card key={i} style={{ marginBottom: 10 }} className="story-card">
                <CardContent>
                  <Typography variant="h6" className="capitalize">
                    {story.buisness}
                  </Typography>
                  <Typography variant="subtitle1" className="color-3">
                    {story.buisnessDescription}
                  </Typography>
                </CardContent>
                <CardMedia
                  image={story.img}
                  style={{ height: 150, width: "100%" }}
                />
                <CardActions>
                  <Link to={`/stories/${story.id}`}>
                    <Button className="color-5">read this story</Button>
                  </Link>
                </CardActions>
              </Card>
            );
          })}

          <Typography
            variant="h6"
            style={{
              display: this.state.nomore ? "block" : "none",
              textAlign: "center"
            }}
          >
            No more stories!
          </Typography>
          <Typography
            variant="h6"
            style={{
              display: this.state.nostories ? "block" : "none",
              textAlign: "center",
              margin: 100
            }}
          >
            No stories for selected categories, please try to filter by
            different categories!
          </Typography>
          <Button
            style={{
              background: "var(--color-2)",
              color: "white",
              display: this.state.nostories ? "none" : "block",
              margin: "20px auto"
            }}
            onClick={this.fetchStories}
          >
            Show more stories...
          </Button>
          <CircularProgress
            style={{
              display: this.state.loading ? "block" : "none",
              margin: "0 auto"
            }}
          />
        </div>
        <StoriesFilter filterStories={this.filterStories} />
      </div>
    );
  }
}
