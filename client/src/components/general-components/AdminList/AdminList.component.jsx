import React, { Component } from "react";
import axios from "axios";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Paper from "@material-ui/core/Paper";
import { TablePagination } from "@material-ui/core";
import CustomTableHead from "./CustomTableHead.component";
import CustomTableRow from "./CustomTableRow.component";
import Axios from "axios";

export default class AdminList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      page: 0,
      rowsPerPage: 5,
      itemsCount: 100
    };
  }

  componentDidMount() {
    this.getItemsCount();
  }

  getItemsCount = () => {
    Axios.get(`/api/${this.props.pluralName}/count`).then(res => {
      this.setState({
        itemsCount: res.data["count(*)"]
      });
    });
    this.fetchData();
  };

  fetchData = () => {
    const startIndex = this.state.page * this.state.rowsPerPage;
    const endIndex = startIndex + this.state.rowsPerPage;
    const indexes = {
      first: startIndex,
      last: endIndex
    };

    Axios.get(`/api/${this.props.pluralName}/selectedpage`, {
      params: indexes
    })
      .then(res => {
        this.setState({ data: res.data });
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleChangePage = (event, page) => {
    this.setState({ page }, () => {
      this.fetchData();
    });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value }, () => {
      this.fetchData();
    });
  };

  render() {
    const { itemsCount, rowsPerPage, page, data } = this.state;
    const rows = this.state.data.map((item, index) => {
      return (
        <CustomTableRow
          itemName={this.props.itemName}
          pluralName={this.props.pluralName}
          data={item}
          key={index}
          controls={this.props.controls}
          handleDelete={this.fetchData}
          wantedFields={this.props.wantedFields}
        />
      );
    });
    return (
      <Paper className="fadeInFast">
        <Table style={{ overflowX: "scroll" }}>
          <CustomTableHead
            data={this.props.wantedFields}
            controls={this.props.controls}
          />
          <TableBody>{rows}</TableBody>
        </Table>
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
      </Paper>
    );
  }
}
