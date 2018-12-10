import React, { Component } from "react";
import TableCell from "@material-ui/core/TableCell";
import Axios from "axios";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";

export default class CustomTableRowActions extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  deleteItem = id => {
    let sure = window.confirm(
      "are you sure you want to delete this " + this.props.itemName
    );
    if (!sure) {
      return;
    }
    Axios.delete(`/api/${this.props.pluralName}/${id}`)
      .then(res => {
        this.props.handleDelete();
      })
      .catch(err => {
        alert("Error deleting a " + this.props.itemName);
      });
  };

  render() {
    const buttonStyle = {
      height: "40px",
      width: "40px"
    };
    let { itemID, itemName, pluralName } = this.props;
    return (
      <TableCell key="buttons" style={{ display: "flex" }}>
        <Link to={"/dashboard/" + pluralName + "/" + itemID}>
          <IconButton style={buttonStyle}>
            <i className="far fa-eye" style={{ fontSize: "1rem", margin: 0 }} />
          </IconButton>
        </Link>
        <Link to={`/dashboard/update${itemName}/${itemID}`}>
          <IconButton style={buttonStyle}>
            <i
              className="fas fa-edit"
              style={{ color: "royalblue", fontSize: "1rem", margin: 0 }}
            />
          </IconButton>
        </Link>
        <a onClick={() => this.deleteItem(itemID)}>
          <IconButton style={buttonStyle}>
            <i
              className="fas fa-trash-alt"
              style={{ color: "crimson", fontSize: "1rem", margin: 0 }}
            />
          </IconButton>
        </a>
      </TableCell>
    );
  }
}
