import React, { Component } from "react";
import Form from "../../general-components/Form/Form.component";
import TextField from "@material-ui/core/TextField";
import Axios from "axios";
import Typography from "@material-ui/core/Typography";

export default class PermissionsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adding: false,
      updating: false,
      permission: {},
      uploading: {}
    };
  }
  componentDidMount() {
    this.checkIfDataIsPassed();
  }

  checkIfDataIsPassed = () => {
    if (!!this.props.match.params.id) {
      this.fetchPermissionInfo(this.props.match.params.id);
      this.setState({ updating: true });
    }
  };

  fetchPermissionInfo = id => {
    Axios.get("/api/permissions/" + id).then(result => {
      this.setState(
        {
          permission: {
            ...result.data[0]
          },
          adding: true
        },
        () => {
          this.setState({ adding: false });
        }
      );
    });
  };

  onChange = e => {
    this.setState({
      permission: {
        ...this.state.permission,
        [e.target.name]: e.target.value
      }
    });
  };

  // for demo ONLY
  checkIfFieldIsValid = name => {
    return true;
  };

  onFormSubmit = e => {
    e.preventDefault();
    if (this.state.updating) {
      this.updatePermission();
    } else {
      this.createPermission();
    }
  };

  updatePermission = () => {
    Axios.put("/api/permissions/" + this.state.permission.id, this.state.permission)
      .then(result => {
        this.props.history.push("/dashboard/permissions");
      })
      .catch(err => {
        this.showErrorMessage(err);
      });
  };

  createPermission = () => {
    this.setState({ adding: true });
    Axios.post("/api/permissions", this.state.permission)
      .then(result => {
        this.props.history.push("/dashboard/permissions");
      })
      .catch(err => {
        this.showErrorMessage(err);
      });
  };

  showErrorMessage = msg => {
    alert(msg);
  };



  render() {
    return (
      <div>
        <Form
          id="research-form"
          onFormSubmit={this.onFormSubmit}
          adding={this.state.adding}
        >
          <Typography variant="h5" style={{ marginBottom: 50 }}>
            Add the Permission info here Please...
          </Typography>

          <TextField
            className="full-width-input"
            label="Permission Name"
            InputLabelProps={{
              shrink: true
            }}
            name="name"
            required
            value={this.state.permission.name}
            error={!this.checkIfFieldIsValid("name")}
            onChange={this.onChange}
          />
         
        </Form>
      </div>
    );
  }
}
