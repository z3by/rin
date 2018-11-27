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

    // filter the data and keep only wanted fields
    for (const key in this.props.data) {
      if (this.props.data.hasOwnProperty(key)) {
        if (wantedFields.includes(key)) {
          const value = this.props.data[key];
          columns.push(<TableCell>{value}</TableCell>);
        }
      }
    }

    columns.push(
      <CustomTableRowActions
        itemName={this.props.itemName}
        itemID={this.props.data.id}
      />
    );
    return <TableRow>{columns}</TableRow>;
  }
}
