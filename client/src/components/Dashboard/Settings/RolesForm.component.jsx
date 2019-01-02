import React, { Component } from "react";
import Form from "../../general-components/Form/Form.component";
import TextField from "@material-ui/core/TextField";
import Axios from "axios";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default class RoleForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adding: false,
      updating: false,
      role: {
        name: "",
        permissions: []
      },
      uploading: {},
      checkedPermissions: {},
      permissions: [],
      allChecked: false
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
      const checkedPermissions = {};
      result.data[0].permissions.forEach(perm => {
        checkedPermissions[perm.id] = true;
      });
      const allSelected = Object.keys(this.state.checkedPermissions).length === this.state.permissions.length 
      this.setState(
        {
          role: {
            ...result.data[0]
          },
          adding: true,
          checkedPermissions,
          allChecked: allSelected
        },
        () => {
          this.setState({
            adding: false,
            });
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
    const checkedPermissions = this.state.checkedPermissions;
    const permissionIds = [];
    for (const perm in checkedPermissions) {
      if (checkedPermissions.hasOwnProperty(perm)) {
        permissionIds.push(Number(perm));
      }
    }
    this.setState(
      {
        role: {
          id: this.state.role.id,
          name: this.state.role.name,
          permissions: permissionIds
        }
      },
      () => {
        if (this.state.updating) {
          this.updateRole();
        } else {
          this.createRole();
        }
      }
    );
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
    if (!!rolePermissions[e.target.value]) {
      delete rolePermissions[e.target.value];
    } else {
      rolePermissions[e.target.value] = true;
    }
    this.setState({
      checkedPermissions: rolePermissions
    });
  };

  onSelectAll = () => {
    this.setState({ allChecked: !this.state.allChecked }, () => {
      const checkedPermissions = {}
      this.state.permissions.forEach(perm => {
        checkedPermissions[perm.id] = true;
      });
      if (this.state.allChecked) {
        this.setState({ checkedPermissions: checkedPermissions });
      } else {
        this.setState({ checkedPermissions: [] });
      }
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
          <FormControlLabel
            control={
              <Checkbox
                checked={(() => {
                  return this.state.allChecked;
                })()}
                onChange={this.onSelectAll}
                value={""}
                color="primary"
              />
            }
            label={this.state.allChecked ? "unselect all ?": "select all ?"}
          />
          <div className="perm-checkboxes my-50">
            {this.state.permissions.map((perm, i) => {
              return (
                <FormControlLabel
                  key={i}
                  control={
                    <Checkbox
                      checked={(() => {
                        return !!this.state.checkedPermissions[perm.id];
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
