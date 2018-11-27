import React, { Component } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import CustomTableRowActions from "./CustomTableRowActions.component";

export default class CustomTableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const columns = [];
    const wantedFields = this.props.wantedFields;

    wantedFields.forEach((field, i) => {
      if (this.props.data.hasOwnProperty(field)) {
        columns.push(<TableCell key={i}>{this.props.data[field]}</TableCell>);
      }
    });
    if (this.props.controls) {
      columns.push(
        <CustomTableRowActions
          key="actions"
          itemName={this.props.itemName}
          pluralName={this.props.pluralName}
          itemID={this.props.data.id}
          handleDelete={this.props.handleDelete}
        />
      );
    }
    return <TableRow>{columns}</TableRow>;
  }
}
