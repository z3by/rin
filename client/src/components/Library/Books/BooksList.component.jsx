import React, { Component } from "react";
import BooksItem from "./BooksItem.component";
import Axios from "axios";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";

export default class BooksList extends Component {
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

    Axios.get("/api/books/page", {
      params: { first, last }
    }).then(res => {
      if (!res.data.rows.length) {
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
          <BooksItem info={item} key={id} />
        </li>
      );
    });
    return (
      <div className="cards-container">
        <ul className="cards">{items}</ul>
        <Typography
          variant="h6"
          style={{
            display: this.state.nomore ? "block" : "none",
            textAlign: "center"
          }}
        >
          No more Books!
        </Typography>
        <Button
          className="show-more-btn"
          style={{
            display: !this.state.nomore ? "block" : "none"
          }}
          onClick={this.fetchData}
        >
          show more ...
        </Button>
        <CircularProgress
          style={{
            display: this.state.loading ? "block" : "none",
            margin: "0 auto"
          }}
        />
      </div>
    );
  }
}
