import React, { Component } from "react";
import "./Data.css";

export default class Data extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div
        className="data fadeInFast"
        style={{
          overflowY: "scroll"
        }}
      >
        <div className=" container ">
          <section>
            <h2 className="color-2 upper">
              Watch UNHCR historical Refugee Data
            </h2>
            <iframe
              title="iframe 1"
              src="http://data.unhcr.org/dataviz/"
              frameborder="0"
            />
          </section>
        </div>
      </div>
    );
  }
}
