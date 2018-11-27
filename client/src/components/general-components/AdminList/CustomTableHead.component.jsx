import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

export default function CustomTableHead(props) {
  const columns = [];
  for (const key in props.data) {
    if (props.data.hasOwnProperty(key)) {
      columns.push(<TableCell>{key}</TableCell>);
    }
  }
  return (
    <TableHead>
      <TableRow>{columns}</TableRow>
    </TableHead>
  );
}
