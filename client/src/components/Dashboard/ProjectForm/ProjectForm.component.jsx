import React, { Component } from "react";
import Form from "../../general-components/Form/Form.component";
import AutoComplete from "../../general-components/AutoComplete/AutoComplete.component";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Axios from "axios";

const sectors = ["health", "education"];
export default class ProjectForm extends Component {
  state = {
    allCountries: []
  };

  componentDidMount() {
    this.fetchCountries();
  }

  fetchCountries = () => {
    Axios.get("/api/countries/names").then(result => {
      this.setState({ allCountries: result.data });
    });
  };

  onChange = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => {
        console.log(this.state);
      }
    );
  };

  checkIfFieldIsValid = name => {
    if (this.state[name]) {
      return true;
    } else {
      return false;
    }
  };

  setChoosenCountries = value => {
    const countriesIds = [];
    value.forEach(country => {
      countriesIds.push(country.id);
    });
    this.setState({
      countries: countriesIds
    });
  };

  render() {
    return (
      <div>
        <Form>
          <TextField
            className="full-width-input"
            label="project name"
            name="name"
            required
            error={!this.checkIfFieldIsValid("name")}
            onChange={this.onChange}
          />
          <TextField
            className="full-width-input"
            required
            error={!this.checkIfFieldIsValid("organization")}
            label="organization name"
            onChange={this.onChange}
            name="organization"
          />
          <TextField
            className="full-width-input"
            error={!this.checkIfFieldIsValid("investmentSize")}
            label="investment size"
            onChange={this.onChange}
            name="investmentSize"
            type="number"
            required
          />
          <TextField
            select
            label="sector"
            error={!this.checkIfFieldIsValid("sector")}
            required
            className="full-width-input"
            name="sector"
            value={this.state.sector}
            onChange={this.onChange}
            helperText="Please select the project sector"
            margin="normal"
          >
            {sectors.map(option => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            className="full-width-input"
            label="impact"
            name="impact"
            error={!this.checkIfFieldIsValid("impact")}
            multiline
            required
            onChange={this.onChange}
            rowsMax="6"
            variant="outlined"
          />

          <TextField
            className="full-width-input"
            label="thesis"
            name="thesis"
            error={!this.checkIfFieldIsValid("thesis")}
            multiline
            onChange={this.onChange}
            required
            rowsMax="6"
            variant="outlined"
          />
          <TextField
            className="full-width-input"
            label="structure"
            name="structure"
            error={!this.checkIfFieldIsValid("structure")}
            multiline
            onChange={this.onChange}
            required
            rowsMax="6"
            variant="outlined"
          />
          <AutoComplete
            suggestions={this.state.allCountries}
            label="countries"
            handleChange={this.setChoosenCountries}
          />
        </Form>
      </div>
    );
  }
}
