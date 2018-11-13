import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

let id = 0;
function createData(title, description) {
  id += 1;
  return { id, title, description };
}

const rows = [
  createData("Frozen yoghurt", "description"),
  createData("Ice cream sandwich", "description"),
  createData("Eclair", "description"),
  createData("Cupcake", "description"),
  createData("Gingerbread", "description")
];

function ProjectRequests(props) {
  const { classes } = props;

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>project Title</TableCell>
            <TableCell>Project Description</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.description}
                </TableCell>

                <TableCell numeric>
                  <Button>
                    <i className="fas fa-edit" style={{ color: "royalblue" }} />
                  </Button>
                  <Button>
                    <i
                      className="fas fa-check"
                      style={{ color: "lightgreen" }}
                    />
                  </Button>
                  <Button>
                    <i className="fas fa-times" style={{ color: "crimson" }} />
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default ProjectRequests;
