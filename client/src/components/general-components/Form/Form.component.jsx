import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
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
          <Button
            type="submit"
            className="form-sbumit-button"
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
          </Button>
        </form>
      </Paper>
    );
  }
}
