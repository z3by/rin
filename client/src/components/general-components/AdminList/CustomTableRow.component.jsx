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
    for (const name in this.props.data) {
      if (this.props.data.hasOwnProperty(name)) {
        const val = this.props.data[name];
        columns.push(<TableCell>{val}</TableCell>);
      }
    }
    return (
      <TableRow>
        {columns}
        <CustomTableRowActions
          itemName={this.props.itemName}
          itemID={this.props.data.id}
        />
      </TableRow>
    );
  }
}
