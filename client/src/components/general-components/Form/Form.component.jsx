import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import "./Form.css";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Paper className="admin-form-container">
        <form
          onSubmit={this.props.onFormSubmit}
          style={{ width: "80%", position: "relative", left: "10%" }}
        >
          {this.props.children}
          <button
            type="submit"
            className="btn w-100"
            disabled={this.props.adding}
          >
            <div
              style={{ display: !this.props.adding ? "inline-block" : "none" }}
            >
              <i className="fas fa-check" />
              Submit
            </div>
            <img
              style={{ display: this.props.adding ? "inline-block" : "none" }}
              className="loading-img"
              src="http://portal.paaet.edu.kw/DBPublic/img/loading2.gif"
              alt=""
            />
          </button>
        </form>
      </Paper>
    );
  }
}
