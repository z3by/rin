import React, { Component } from "react";
import axios from "axios";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { TablePagination } from "@material-ui/core";
import CustomTableHead from "./CustomTableHead.component";
import CustomTableRow from "./CustomTableRow.component";

export default class AdminList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 28, title: "this is the title", subtitle: "this is the subtitle" }
      ],
      page: 0,
      rowsPerPage: 5,
      itemsCount: 100
    };
  }

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  render() {
    const { itemsCount, rowsPerPage, page, data } = this.state;

    return (
      <Paper className="fadeInFast">
        <Table>
          <CustomTableHead data={data[0]} />
          <TableBody>
            <CustomTableRow itemName={this.props.itemName} data={data[0]} />
          </TableBody>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={itemsCount}
            rowsPerPage={rowsPerPage}
            page={page}
            backIconButtonProps={{
              "aria-label": "Previous Page"
            }}
            nextIconButtonProps={{
              "aria-label": "Next Page"
            }}
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.handleChangeRowsPerPage}
          />
        </Table>
      </Paper>
    );
  }
}
