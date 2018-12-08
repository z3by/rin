import React, { Component } from "react";
import Form from "../../general-components/Form/Form.component";
import AutoComplete from "../../general-components/AutoComplete/AutoComplete.component";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Axios from "axios";
import Avatar from "@material-ui/core/Avatar";

const sectors = ["health", "education"];
const refugeeInvestmentTypes = [
  {
    name: "refugee owned",
    img:
      "https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/1032686/1160/772/m1/fpnw/wm0/usb-flash-drive-flat-icon-01-.jpg?1456561868&s=0a614a61f233630542ee5a77c5baec30"
  }
];
export default class ProjectForm extends Component {
  state = {
    allCountries: [],
    allFounders: [],
    allInvestors: [],
    allSdgs: []
  };

  componentDidMount() {
    this.fetchCountries();
    this.fetchFounders();
    this.fetchInvestors();
    this.fetchSdgs();
  }

  fetchCountries = () => {
    Axios.get("/api/countries/names").then(result => {
      this.setState({ allCountries: result.data });
    });
  };

  fetchInvestors = () => {
    Axios.get("/api/investors").then(result => {
      this.setState({ allInvestors: result.data });
    });
  };

  fetchFounders = () => {
    Axios.get("/api/founders").then(result => {
      this.setState({ allFounders: result.data });
    });
  };
  fetchSdgs = () => {
    Axios.get("/api/sdgs").then(result => {
      this.setState({ allSdgs: result.data });
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

  setChoosenFields = (fieldName, value) => {
    const fieldsIds = [];
    value.forEach(field => {
      fieldsIds.push(field.id);
    });
    this.setState({
      [fieldName]: fieldsIds
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
            label={this.state.sector ? "" : "sector"}
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
            select
            label={
              this.state.refugeeInvestmentType ? "" : "refugee investment type"
            }
            error={!this.checkIfFieldIsValid("refugeeInvestmentType")}
            required
            className="full-width-input"
            name="refugeeInvestmentType"
            value={this.state.refugeeInvestmentType}
            onChange={this.onChange}
            helperText="Please select the refugee investment type"
            margin="normal"
          >
            {refugeeInvestmentTypes.map(option => (
              <MenuItem key={option.name} value={option.name}>
                {option.name}
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
            handleChange={value => {
              this.setChoosenFields("countries", value);
            }}
          />
          <AutoComplete
            suggestions={this.state.allFounders}
            label="founders"
            handleChange={value => {
              this.setChoosenFields("founders", value);
            }}
          />
          <AutoComplete
            suggestions={this.state.allInvestors}
            label="investors"
            handleChange={value => {
              this.setChoosenFields("investors", value);
            }}
          />
          <AutoComplete
            suggestions={this.state.allSdgs}
            label="SDGs"
            handleChange={value => {
              this.setChoosenFields("sdgs", value);
            }}
          />
        </Form>
      </div>
    );
  }
}
