import React, { Component } from "react";
import Form from "../../general-components/Form/Form.component";
import TextField from "@material-ui/core/TextField";
import Axios from "axios";
import Typography from "@material-ui/core/Typography";

export default class InvestorForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      investorInfo: {},
      updating: false,
      contact: {}
    };
  }

  componentDidMount() {
    this.checkIfDateIsPassed();
  }

  checkIfDateIsPassed = () => {
    if (!!this.props.match.params.id) {
      this.fetchInvestorInfo(this.props.match.params.id);
      this.setState({ updating: true });
    }
  };

  fetchInvestorInfo = id => {
    Axios.get("/api/investors/ " + id).then(result => {
      this.setState({
        investorInfo: {
          ...result.data[0]
        }
      });
    });
  };

  onChange = e => {
    this.setState({
      investorInfo: {
        ...this.state.investorInfo,
        [e.target.name]: e.target.value
      }
    });
  };

  onContactChange = e => {
    this.setState({
      contact: {
        ...this.state.investorInfo,
        [e.target.name]: e.target.value
      }
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    if (this.state.updating) {
      this.updateInvestor();
    } else {
      this.createInvestor();
    }
  };

  updateInvestor = () => {
    Axios.put(
      "/api/investors/" + this.state.investorInfo.id,
      this.state.investorInfo
    )
      .then(result => {
        this.props.history.push("/");
      })
      .catch(err => {
        this.showErrorMessage(err);
      });
  };

  createInvestor = () => {
    Axios.post("/api/contacts", this.state.contact).then(res => {
      this.setState(
        {
          investorInfo: {
            ...this.state.investorInfo,
            contactId: res.data.id
          }
        },
        () => {
          Axios.post("/api/investors", this.state.investorInfo)
            .then(result => {
              this.props.history.push("/");
            })
            .catch(err => {
              this.showErrorMessage(err);
            });
        }
      );
    });
  };

  showErrorMessage = messge => {
    alert(messge);
  };

  render() {
    return (
      <Form
        id="investor-form"
        data={this.state.investorInfo}
        onFormSubmit={this.onFormSubmit}
      >
        <Typography variant="h5" style={{ marginTop: 50 }}>
          Add the Investor info here Please...
        </Typography>
        <TextField
          className="full-width-input"
          label="investor name"
          InputLabelProps={{
            shrink: true
          }}
          name="name"
          variant="outlined"
          required
          value={this.state.investorInfo.name}
          onChange={this.onChange}
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
      </Form>
    );
  }
}
