import React, { Component } from "react";
import Form from "../../general-components/Form/Form.component";
import TextField from "@material-ui/core/TextField";
import Axios from "axios";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";

export default class RoleForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adding: false,
      updating: false,
      role: {
        name: ""
      },
      uploading: {},
      checkedPermissions: [],
      permissions: []
    };
  }
  componentDidMount() {
    this.checkIfDataIsPassed();
    this.fetchPermissions();
  }

  fetchPermissions = () => {
    Axios.get("/api/permissions").then(result => {
      this.setState({ permissions: result.data });
    });
  };

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
          checkedPermissions: result.data[0].permissions,
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
    this.state.role.permissions = this.state.checkedPermissions;

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

  onCheckBoxChecked = e => {
    const rolePermissions = this.state.checkedPermissions;
    if (rolePermissions.includes(e.target.value)) {
      const index = rolePermissions.indexOf(e.target.value);
      rolePermissions.splice(index, 1);
    } else {
      rolePermissions.push(e.target.value);
    }
    this.setState({
      checkedPermissions: rolePermissions
    });
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
          <Typography variant="h6">What this role can do?...</Typography>
          <div className="perm-checkboxes my-50">
            {this.state.permissions.map((perm, i) => {
              return (
                <FormControlLabel
                  key={i}
                  control={
                    <Checkbox
                      checked={(() => {
                        this.state.checkedPermissions.includes(perm.id);
                      })()}
                      onChange={this.onCheckBoxChecked}
                      value={perm.id}
                      color="primary"
                    />
                  }
                  label={perm.name}
                />
              );
            })}
          </div>
        </Form>
      </div>
    );
  }
}
