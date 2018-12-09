import React, { Component } from "react";
import Form from "../../general-components/Form/Form.component";
import AutoComplete from "../../general-components/AutoComplete/AutoComplete.component";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Axios from "axios";
import Typography from "@material-ui/core/Typography";
import GoogleMap from "../../general-components/GoogleMap/GoogleMap.component";

const sectors = ["health", "education"];
const refugeeInvestmentTypes = [
  {
    name: "refugee owned",
    img:
      "https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/1032686/1160/772/m1/fpnw/wm0/usb-flash-drive-flat-icon-01-.jpg?1456561868&s=0a614a61f233630542ee5a77c5baec30"
  }
];
export default class ProjectForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allCountries: [],
      allFounders: [],
      allInvestors: [],
      allSdgs: [],
      project: {
        locations: []
      },
      contact: {},
      adding: false,
      updating: false
    };
  }
  componentDidMount() {
    this.fetchCountries();
    this.fetchFounders();
    this.fetchInvestors();
    this.fetchSdgs();
    this.checkIfProjectDateIsPassed();
  }

  checkIfProjectDateIsPassed = () => {
    if (!!this.props.match.params.id) {
      this.fetchProjectInfo(this.props.match.params.id);
      this.setState({ updating: true });
    }
  };

  fetchProjectInfo = id => {
    Axios.get("/api/projects/ " + id).then(result => {
      this.setState(
        {
          project: { ...result.data[0] },
          adding: true,
          contact: result.data[0].contact
        },
        () => {
          this.setState({ adding: false });
        }
      );
    });
  };

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

  // for demo ONLY
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

  setLocations = locations => {
    this.setState({
      project: {
        ...this.state.project,
        locations: [...locations]
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
        this.setState(
          {
            project: { ...this.state.project, contactId: result.data.id }
          },
          () => {
            this.createProject();
          }
        );
      })
      .catch(err => {
        this.showErrorMessage(err);
      });
  };

  createProject = () => {
    this.setState({ adding: true });
    this.setState(
      { project: { ...this.state.project, pending: false } },
      () => {
        Axios.post("/api/projects", this.state.project)
          .then(result => {
            this.setState({ adding: false }, () => {
              this.props.history.push("/dashboard/projects");
            });
          })
          .catch(err => {
            this.showErrorMessage(err);
          });
      }
    );
  };

  showErrorMessage = messge => {
    alert(messge);
  };

  uploadImage = e => {
    e.preventDefault();
    const formData = new FormData();
    const name = e.target.name;
    formData.append("img", e.target.files[0]);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };

    Axios.post("/api/upload/img", formData, config)
      .then(res => {
        const imageURL = res.data.location;
        this.setState({
          project: {
            ...this.state.project,
            [name]: imageURL
          }
        });
      })
      .catch(err => {
        this.showErrorMessage(err);
      });
  };

  render() {
    return (
      <div>
        <Form
          id="project-form"
          data={this.state.project}
          onFormSubmit={this.onFormSubmit}
          adding={this.state.adding}
        >
          <Typography variant="h5">
            Add the project info here Please...
          </Typography>
          <TextField
            className="full-width-input"
            label="project name"
            InputLabelProps={{
              shrink: this.state.updating
            }}
            name="name"
            required
            value={this.state.project.name}
            error={!this.checkIfFieldIsValid("name")}
            onChange={this.onChange}
          />
          <TextField
            className="full-width-input"
            value={this.state.project.organization}
            InputLabelProps={{
              shrink: this.state.updating
            }}
            required
            error={!this.checkIfFieldIsValid("organization")}
            label="organization name"
            onChange={this.onChange}
            name="organization"
          />
          <TextField
            value={this.state.project.investmentSize}
            className="full-width-input"
            error={!this.checkIfFieldIsValid("investmentSize")}
            label="investment size by US dollar $"
            InputLabelProps={{
              shrink: this.state.updating
            }}
            onChange={this.onChange}
            name="investmentSize"
            type="number"
            required
          />
          <TextField
            className="full-width-input"
            label="starting year"
            type="date"
            defaultValue={this.state.project.year}
            required
            name="year"
            InputLabelProps={{
              shrink: this.state.updating
            }}
            onChange={this.onChange}
          />
          <TextField
            select
            label="sector"
            error={!this.checkIfFieldIsValid("sector")}
            required
            className="full-width-input"
            InputLabelProps={{
              shrink: this.state.updating
            }}
            name="sector"
            value={this.state.project.sector}
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
            label="refugee investment type"
            error={!this.checkIfFieldIsValid("refugeeInvestmentType")}
            required
            InputLabelProps={{
              shrink: this.state.updating
            }}
            className="full-width-input"
            name="refugeeInvestmentType"
            value={this.state.project.refugeeInvestmentType}
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
            value={this.state.project.impact}
            multiline
            InputLabelProps={{
              shrink: this.state.updating
            }}
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
            value={this.state.project.thesis}
            multiline
            InputLabelProps={{
              shrink: this.state.updating
            }}
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
            InputLabelProps={{
              shrink: this.state.updating
            }}
            value={this.state.project.structure}
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
              value={this.state.contact.phone1}
              type="tel"
              InputLabelProps={{
                shrink: this.state.updating
              }}
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
              value={this.state.contact.phone2}
              InputLabelProps={{
                shrink: this.state.updating
              }}
              onChange={this.onContactChange}
            />
          </div>
          <div className="input-text-group">
            <i className="fas fa-envelope" />
            <TextField
              className="half-width-input"
              label="email"
              value={this.state.contact.email1}
              name="email1"
              type="email"
              InputLabelProps={{
                shrink: this.state.updating
              }}
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
              value={this.state.contact.email2}
              type="email"
              InputLabelProps={{
                shrink: this.state.updating
              }}
              onChange={this.onContactChange}
            />
          </div>
          <div className="input-text-group">
            <i className="fas fa-globe" />
            <TextField
              className="half-width-input"
              label="website"
              value={this.state.contact.website}
              name="website"
              type="url"
              InputLabelProps={{
                shrink: this.state.updating
              }}
              onChange={this.onContactChange}
            />
          </div>
          <div className="input-text-group">
            <i className="fab fa-facebook" />
            <TextField
              className="half-width-input"
              label="facebook"
              name="facebook"
              value={this.state.contact.facebook}
              type="url"
              InputLabelProps={{
                shrink: this.state.updating
              }}
              onChange={this.onContactChange}
            />
          </div>
          <div className="input-text-group">
            <i className="fab fa-twitter" />
            <TextField
              className="half-width-input"
              value={this.state.contact.twitter}
              label="twitter"
              name="twitter"
              type="url"
              InputLabelProps={{
                shrink: this.state.updating
              }}
              onChange={this.onContactChange}
            />
          </div>
          <div className="input-text-group">
            <i className="fab fa-instagram" />
            <TextField
              className="half-width-input"
              label="instagram"
              name="instagram"
              value={this.state.contact.instagram}
              type="url"
              InputLabelProps={{
                shrink: this.state.updating
              }}
              onChange={this.onContactChange}
            />
          </div>
          <div className="input-text-group">
            <i className="fas fa-fax" />
            <TextField
              className="half-width-input"
              label="fax"
              value={this.state.contact.fax}
              name="fax"
              InputLabelProps={{
                shrink: this.state.updating
              }}
              onChange={this.onContactChange}
            />
          </div>
          <div className="input-text-group">
            <i className="fas fa-address-card" />
            <TextField
              className="half-width-input"
              label="address"
              value={this.state.contact.address}
              name="address"
              InputLabelProps={{
                shrink: this.state.updating
              }}
              onChange={this.onContactChange}
            />
          </div>
          <Typography variant="h5" style={{ marginTop: 50 }}>
            choose a good image for the project to upload
          </Typography>

          <div className="img-upload-group">
            <div
              className="img-upload-preveiw"
              style={{
                height: 40,
                width: 40,
                marginRight: 10,
                backgroundImage: "url(" + this.state.project.img + ")"
              }}
            />

            <TextField
              style={{ marginTop: 0 }}
              className=""
              name="img"
              required
              InputLabelProps={{
                shrink: this.state.updating
              }}
              type="file"
              accept="image/*"
              onChange={this.uploadImage}
            />
            <Typography variant="overline">max size 1.mb</Typography>
          </div>
          <Typography variant="h5" style={{ marginTop: 50 }}>
            upload the buisness logo
          </Typography>
          <div className="img-upload-group">
            <div
              className="img-upload-preveiw"
              style={{
                height: 40,
                width: 40,
                marginRight: 10,
                backgroundImage: "url(" + this.state.project.logo + ")"
              }}
            />

            <TextField
              style={{ marginTop: 0 }}
              className=""
              name="logo"
              required
              InputLabelProps={{
                shrink: this.state.updating
              }}
              accept="image/*"
              type="file"
              onChange={this.uploadImage}
            />
            <Typography variant="overline">max size 1.mb</Typography>
          </div>

          <Typography variant="h5" style={{ marginTop: 50 }}>
            click on the map to select the project locations, click on the dots
            to remove the location
          </Typography>
          <div className="map-wrapper" style={{ height: 500, width: "100%" }}>
            <GoogleMap
              setLocations={this.setLocations}
              dots={this.state.project.locations}
            />
          </div>
        </Form>
      </div>
    );
  }
}
