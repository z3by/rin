import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

export default function CustomTableHead(props) {
  const columns = props.data.map((title, index) => {
    return <TableCell key={index}>{title}</TableCell>;
  });
  columns.push(<TableCell key="actions">Actions</TableCell>);
  return (
    <TableHead>
      <TableRow>{columns}</TableRow>
    </TableHead>
  );
}
