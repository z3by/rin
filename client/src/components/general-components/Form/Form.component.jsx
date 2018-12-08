import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./Form.css";
import Axios from "axios";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormValid: false
    };
  }

  render() {
    return (
      <Paper style={{ padding: 20 }}>
        <Typography variant="h5">
          Add the project info here Please...
        </Typography>
        <form
          onSubmit={this.props.onFormSubmit}
          style={{ width: "60%", position: "relative", left: "20%" }}
        >
          {this.props.children}
          <Button
            type="submit"
            className="form-sbumit-button"
            disabled={this.state.isFormValid}
          >
            <i className="fas fa-check" />
            Submit
          </Button>
        </form>
      </Paper>
    );
  }
}
