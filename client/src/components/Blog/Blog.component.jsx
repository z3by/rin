import React, { Component } from "react";
import "./Blog.css";

export default class Blog extends Component {
  constructor() {
    super();
    this.state = {
      pageNumber: 0
    };
  }

  render() {
    return (
      <div
        className="blog fadeInFast"
        style={{
          overflowY: "scroll"
        }}
      >
        <div className=" container ">
          <h1>hello from blog</h1>
        </div>
      </div>
    );
  }
}
