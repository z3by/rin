import React, { Component } from "react";
import Form from "../../general-components/Form/Form.component";
import AutoComplete from "../../general-components/AutoComplete/AutoComplete.component";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Axios from "axios";
import Typography from "@material-ui/core/Typography";

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
    allSdgs: [],
    project: {},
    contact: {}
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
    this.setState({
      project: {
        ...this.state.project,
        [e.target.name]: e.target.value
      }
    });
  };

  checkIfFieldIsValid = name => {
    return true;
  };

  setChoosenFields = (fieldName, value) => {
    const fieldsIds = [];
    value.forEach(field => {
      fieldsIds.push(field.id);
    });
    this.setState({
      project: {
        ...this.state.project,
        [fieldName]: fieldsIds
      }
    });
  };

  onContactChange = e => {
    this.setState({
      contact: {
        ...this.state.contact,
        [e.target.name]: e.target.value
      }
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    Axios.post("/api/contacts", this.state.contact)
      .then(result => {
        this.setState({
          project: { ...this.state.project, contactId: result.data.id }
        });
        this.createProject();
      })
      .catch(err => {
        console.log(err);
      });
  };

  createProject = () => {
    Axios.post("/api/projects", this.state.project)
      .then(result => {
        console.log("project created");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <Form data={this.state.project} onFormSubmit={this.onFormSubmit}>
          <Typography variant="h5">
            Add the project info here Please...
          </Typography>
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
          <div className="input-text-group">
            <i className="fas fa-phone" />
            <TextField
              className="half-width-input"
              label="phone number"
              name="phone1"
              required
              type="tel"
              onChange={this.onContactChange}
            />
          </div>
          <div className="input-text-group">
            <i className="fas fa-mobile-alt" />
            <TextField
              className="half-width-input"
              label="mobile number"
              type="tel"
              name="phone2"
              onChange={this.onContactChange}
            />
          </div>
          <div className="input-text-group">
            <i className="fas fa-envelope" />
            <TextField
              className="half-width-input"
              label="email"
              name="email1"
              type="email"
              required
              onChange={this.onContactChange}
            />
          </div>
          <div className="input-text-group">
            <i className="far fa-envelope" />
            <TextField
              className="half-width-input"
              label="second email"
              name="email2"
              type="email"
              onChange={this.onContactChange}
            />
          </div>
          <div className="input-text-group">
            <i className="fas fa-globe" />
            <TextField
              className="half-width-input"
              label="website"
              name="website"
              type="url"
              onChange={this.onContactChange}
            />
          </div>
          <div className="input-text-group">
            <i className="fab fa-facebook" />
            <TextField
              className="half-width-input"
              label="facebook"
              name="facebook"
              type="url"
              onChange={this.onContactChange}
            />
          </div>
          <div className="input-text-group">
            <i className="fab fa-twitter" />
            <TextField
              className="half-width-input"
              label="twitter"
              name="twitter"
              type="url"
              onChange={this.onContactChange}
            />
          </div>
          <div className="input-text-group">
            <i className="fab fa-instagram" />
            <TextField
              className="half-width-input"
              label="instagram"
              name="instagram"
              type="url"
              onChange={this.onContactChange}
            />
          </div>
          <div className="input-text-group">
            <i className="fas fa-fax" />
            <TextField
              className="half-width-input"
              label="fax"
              name="fax"
              onChange={this.onContactChange}
            />
          </div>
          <div className="input-text-group">
            <i className="fas fa-address-card" />
            <TextField
              className="half-width-input"
              label="address"
              name="address"
              onChange={this.onContactChange}
            />
          </div>
        </Form>
      </div>
    );
  }
}
