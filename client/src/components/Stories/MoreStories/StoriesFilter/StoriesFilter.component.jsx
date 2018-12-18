import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Axios from "axios";

export default class StoriesFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterOptions: {
        sectorId: "",
        refugeeInvestmentTypeId: "",
        year: ""
      },
      sectors: [],
      refugeeInvestmentTypes: [],
      countries: [],
      labelWidth: 0
    };
  }

  componentWillMount() {
    this.fetchSectors();
    this.fetchRFTs();
  }

  fetchSectors = () => {
    Axios.get("/api/sectors").then(result => {
      this.setState({
        sectors: result.data
      });
    });
  };

  fetchRFTs = () => {
    Axios.get("/api/refugeeinvestmenttypes").then(result => {
      this.setState({
        refugeeInvestmentTypes: result.data
      });
    });
  };

  handleChange = event => {
    this.setState(
      {
        filterOptions: {
          ...this.state.filterOptions,
          [event.target.name]: event.target.value
        }
      },
      () => {
        console.log(this.state.filterOptions);
      }
    );
  };

  render() {
    const currentYear = new Date().getFullYear();
    const firstYear = currentYear - 15;
    const yearsItems = [];
    for (let i = firstYear; i <= currentYear; i++) {
      yearsItems.push(
        <MenuItem value={i} key={i}>
          {i}
        </MenuItem>
      );
    }

    const refugeeInvestmentTypes = this.state.refugeeInvestmentTypes.map(
      (rft, i) => {
        return (
          <MenuItem key={i} value={rft.id}>
            {rft.name}
          </MenuItem>
        );
      }
    );

    const sectors = this.state.sectors.map((sector, i) => {
      return (
        <MenuItem value={sector.id} key={i}>
          {sector.name}
        </MenuItem>
      );
    });

    return (
      <Paper className="filter-card" style={{}}>
        <Typography variant="h6">Filter the stories</Typography>
        <FormControl className="filter-form-control">
          <InputLabel htmlFor="sector-select">select sector</InputLabel>
          <Select
            value={this.state.filterOptions.sectorId}
            onChange={this.handleChange}
            inputProps={{
              name: "sectorId",
              id: "sector-select"
            }}
          >
            {sectors}
          </Select>
        </FormControl>
        <FormControl className="filter-form-control">
          <InputLabel htmlFor="year-select">select year</InputLabel>
          <Select
            value={this.state.filterOptions.year}
            onChange={this.handleChange}
            inputProps={{
              name: "year",
              id: "year-select"
            }}
          >
            {yearsItems}
          </Select>
        </FormControl>

        <FormControl className="filter-form-control">
          <InputLabel htmlFor="refugee-investment-type-select">
            investment type
          </InputLabel>
          <Select
            value={this.state.filterOptions.refugeeInvestmentTypeId}
            onChange={this.handleChange}
            inputProps={{
              name: "refugeeInvestmentTypeId",
              id: "refugee-investment-type-select"
            }}
          >
            {refugeeInvestmentTypes}
          </Select>
        </FormControl>
        <Button
          style={{
            background: "var(--color-2)",
            color: "white",
            display: "block",
            margin: "20px auto"
          }}
          onClick={() => this.props.filterStories(this.state.filterOptions)}
        >
          <i className="fas fa-filter" style={{ marginRight: 10 }} />
          Filter Stories
        </Button>
      </Paper>
    );
  }
}
