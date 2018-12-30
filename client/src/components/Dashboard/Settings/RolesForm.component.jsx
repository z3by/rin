import React, { Component } from "react";
import Form from "../../general-components/Form/Form.component";
import TextField from "@material-ui/core/TextField";
import Axios from "axios";
import Typography from "@material-ui/core/Typography";

export default class RoleForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adding: false,
      updating: false,
      role: {},
      uploading: {}
    };
  }
  componentDidMount() {
    this.checkIfDataIsPassed();
  }

  checkIfDataIsPassed = () => {
    if (!!this.props.match.params.id) {
      this.fetchRoleInfo(this.props.match.params.id);
      this.setState({ updating: true });
    }
  };

  fetchRoleInfo = id => {
    Axios.get("/api/roles/" + id).then(result => {
      this.setState(
        {
          role: {
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
      role: {
        ...this.state.role,
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
      this.updateRole();
    } else {
      this.createRole();
    }
  };

  updateRole = () => {
    Axios.put("/api/roles/" + this.state.role.id, this.state.role)
      .then(result => {
        this.props.history.push("/dashboard/roles");
      })
      .catch(err => {
        this.showErrorMessage(err);
      });
  };

  createRole = () => {
    this.setState({ adding: true });
    Axios.post("/api/roles", this.state.role)
      .then(result => {
        this.props.history.push("/dashboard/roles");
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
            Add the Role info here Please...
          </Typography>

          <TextField
            className="full-width-input"
            label="Role Name"
            InputLabelProps={{
              shrink: true
            }}
            name="name"
            required
            value={this.state.role.name}
            error={!this.checkIfFieldIsValid("name")}
            onChange={this.onChange}
          />
         
        </Form>
      </div>
    );
  }
}
