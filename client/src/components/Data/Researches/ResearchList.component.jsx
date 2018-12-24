import React, { Component } from "react";
import ResearchItem from "./ResearchItem.component";
import Axios from "axios";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default class ResearchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      nomore: false
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  // get more 10 items and append it to the current items
  fetchData = () => {
    const first = this.state.items.length;
    const last = first + 10;

    Axios.get("/api/researches/page", {
      params: { first, last }
    }).then(res => {
      if (res.data.rows.length === 0) {
        this.setState({ nomore: true });
      }
      this.setState({
        items: [...this.state.items, ...res.data.rows]
      });
    });
  };

  render() {
    const items = this.state.items.map((item, id) => {
      return (
        <li>
          <ResearchItem info={item} key={id} />
        </li>
      );
    });
    return (
      <div className="cards-container">
        <ul style={{ listStyle: "none" }}>{items}</ul>
        <Button
          className="show-more-btn"
          onClick={this.fetchData}
          style={{
            display: this.state.nomore ? "none" : "block",
            marginTop: 100
          }}
        >
          show more ...
        </Button>
        <Typography
          variant="h6"
          style={{
            display: this.state.nomore ? "block" : "none",
            textAlign: "center",
            marginTop: 100
          }}
        >
          No more Researches!
        </Typography>
      </div>
    );
  }
}
