import React, { Component } from "react";
import Form from "../../general-components/Form/Form.component";
import AutoComplete from "../../general-components/AutoComplete/AutoComplete.component";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import MenuItem from "@material-ui/core/MenuItem";
import Axios from "axios";
import Typography from "@material-ui/core/Typography";
import GoogleMap from "../../general-components/GoogleMap/GoogleMap.component";

export default class ProjectForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allCountries: [],
      allFounders: [],
      allInvestors: [],
      allSdgs: [],
      allRefugeeInvestmentTypes: [],
      allSectors: [],
      project: {
        locations: []
      },
      uploading: {},
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
    this.fetchRefugeeInvestmentTypes();
    this.fetchSectors();
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
          project: {
            ...result.data[0],
            year: this.formatDate(new Date(result.data[0].year))
          },
          adding: true,
          contact: result.data[0].contact
        },
        () => {
          this.setState({ adding: false });
        }
      );
    });
  };

  formatDate = date => {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
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

  fetchRefugeeInvestmentTypes = () => {
    Axios.get("/api/refugeeInvestmentTypes").then(result => {
      this.setState({ allRefugeeInvestmentTypes: result.data });
    });
  };

  fetchSectors = () => {
    Axios.get("/api/sectors").then(result => {
      this.setState({ allSectors: result.data });
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
    if (this.state.updating) {
      this.updateContact();
    } else {
      this.createContact();
    }
  };

  updateContact = () => {
    Axios.put("/api/contacts/" + this.state.contact.id, this.state.contact)
      .then(result => {
        this.setState(
          {
            project: { ...this.state.project, contactId: result.data.id }
          },
          () => {
            this.updateProject();
          }
        );
      })
      .catch(err => {
        this.showErrorMessage(err);
      });
  };

  createContact = () => {
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

  updateProject = () => {
    this.setState({ adding: true });
    Axios.put("/api/projects/" + this.state.project.id, this.state.project)
      .then(result => {
        this.setState({ adding: false }, () => {
          this.props.history.push("/dashboard/projects");
        });
      })
      .catch(err => {
        this.showErrorMessage(err);
      });
  };

  createProject = () => {
    this.setState(
      { project: { ...this.state.project, pending: false }, adding: true },
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
    const imgSize = e.target.files[0].size;
    if (imgSize > 1000000) {
      return this.showErrorMessage(
        "this image is too large ! max size is 1 mb"
      );
    }

    const formData = new FormData();
    const name = e.target.name;
    this.setState({ uploading: { [name]: true } });
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
          },
          uploading: { [name]: false }
        });
      })
      .catch(err => {
        this.showErrorMessage(err);
      });
  };

  render() {
    return (
      <Form
        id="project-form"
        data={this.state.project}
        onFormSubmit={this.onFormSubmit}
        adding={this.state.adding}
      >
        <Typography variant="h5" style={{ marginTop: 50 }}>
          Add the project info here Please...
        </Typography>
        <TextField
          className="full-width-input"
          label="project name"
          InputLabelProps={{
            shrink: true
          }}
          name="name"
          variant="outlined"
          required
          value={this.state.project.name}
          error={!this.checkIfFieldIsValid("name")}
          onChange={this.onChange}
        />
        <TextField
          className="full-width-input"
          value={this.state.project.organization}
          InputLabelProps={{
            shrink: true
          }}
          variant="outlined"
          required
          error={!this.checkIfFieldIsValid("organization")}
          label="organization name"
          onChange={this.onChange}
          name="organization"
        />
        <TextField
          value={this.state.project.investmentSize}
          className="full-width-input"
          inputProps={{
            min: 0
          }}
          error={!this.checkIfFieldIsValid("investmentSize")}
          label="investment size by US dollar $"
          InputLabelProps={{
            shrink: true
          }}
          onChange={this.onChange}
          variant="outlined"
          name="investmentSize"
          type="number"
          required
        />
        <TextField
          className="full-width-input"
          label="starting year"
          type="date"
          variant="outlined"
          defaultValue={this.state.project.year}
          value={this.state.project.year}
          required
          name="year"
          InputLabelProps={{
            shrink: true
          }}
          onChange={this.onChange}
        />

        <TextField
          className="full-width-input"
          label="impact"
          name="impact"
          error={!this.checkIfFieldIsValid("impact")}
          value={this.state.project.impact}
          multiline
          inputProps={{ maxLength: 1000 }}
          InputLabelProps={{
            shrink: true
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
          inputProps={{ maxLength: 1000 }}
          multiline
          InputLabelProps={{
            shrink: true
          }}
          onChange={this.onChange}
          required
          rowsMax="6"
          variant="outlined"
        />
        <TextField
          className="full-width-input"
          label="structure"
          inputProps={{ maxLength: 1000 }}
          name="structure"
          error={!this.checkIfFieldIsValid("structure")}
          multiline
          InputLabelProps={{
            shrink: true
          }}
          value={this.state.project.structure}
          onChange={this.onChange}
          required
          rowsMax="6"
          variant="outlined"
        />
        <TextField
          select
          label="sector"
          error={!this.checkIfFieldIsValid("sector")}
          required
          className="full-width-input"
          InputLabelProps={{
            shrink: this.state.project.sectorId ? true : false
          }}
          name="sectorId"
          value={this.state.project.sectorId}
          onChange={this.onChange}
          helperText="Please select the project sector"
          margin="normal"
        >
          {this.state.allSectors.map(option => (
            <MenuItem
              key={option.id}
              value={option.id}
              style={{ textTransform: "capitalize" }}
            >
              {option.name}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          select
          label="refugee investment type"
          error={!this.checkIfFieldIsValid("refugeeInvestmentType")}
          required
          InputLabelProps={{
            shrink: this.state.project.refugeeInvestmentTypeId ? true : false
          }}
          className="full-width-input"
          name="refugeeInvestmentTypeId"
          value={this.state.project.refugeeInvestmentTypeId}
          onChange={this.onChange}
          helperText="Please select the refugee investment type"
          margin="normal"
        >
          {this.state.allRefugeeInvestmentTypes.map(option => (
            <MenuItem
              key={option.id}
              value={option.id}
              style={{ textTransform: "capitalize" }}
            >
              {option.name}
            </MenuItem>
          ))}
        </TextField>
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

        <div className="contact-section">
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
                shrink: true
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
                shrink: true
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
                shrink: true
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
                shrink: true
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
                shrink: true
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
                shrink: true
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
                shrink: true
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
                shrink: true
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
                shrink: true
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
                shrink: true
              }}
              onChange={this.onContactChange}
            />
          </div>
        </div>

        <div className="img-upload-group">
          <Avatar
            className="img-upload-preveiw"
            src={
              this.state.uploading.img
                ? "/imgs/loading.gif"
                : this.state.project.img
                ? this.state.project.img
                : "https://beedie.sfu.ca/corporate-governance-blog/wp-content/themes/newsroom13/img/placeholder.png"
            }
          />

          <TextField
            style={{ marginTop: 0 }}
            label="upload good image for your project"
            className="full-width-input"
            name="img"
            InputLabelProps={{
              shrink: true
            }}
            variant="filled"
            helperText="max size 1.mb"
            type="file"
            accept="image/*"
            required={this.state.updating ? false : true}
            onChange={this.uploadImage}
          />
        </div>

        <div className="img-upload-group">
          <Avatar
            className="img-upload-preveiw"
            src={
              this.state.uploading.logo
                ? "/imgs/loading.gif"
                : this.state.project.logo
                ? this.state.project.logo
                : "https://beedie.sfu.ca/corporate-governance-blog/wp-content/themes/newsroom13/img/placeholder.png"
            }
          />

          <TextField
            style={{ marginTop: 0 }}
            className="full-width-input"
            helperText="max size 1.mb"
            name="logo"
            label="upload logo image for your business"
            variant="filled"
            required={this.state.updating ? false : true}
            InputLabelProps={{
              shrink: true
            }}
            accept="image/*"
            type="file"
            onChange={this.uploadImage}
          />
        </div>

        <Typography variant="body2" style={{ marginTop: 50 }}>
          click on the map to select the project locations, click on the dots to
          remove the location
        </Typography>
        <div className="map-wrapper" style={{ height: 300, width: "100%" }}>
          <GoogleMap
            setLocations={this.setLocations}
            dots={this.state.project.locations}
          />
        </div>
      </Form>
    );
  }
}
