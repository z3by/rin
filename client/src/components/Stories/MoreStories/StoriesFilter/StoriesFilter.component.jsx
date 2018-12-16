import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default class StoriesFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sector: "",
      year: "",
      refugeeInvestmentType: "",
      countries: [],
      labelWidth: 0
    };
  }

  componentWillMount() {}

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
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

    const refugeeInvestmentTypes = [
      <MenuItem value={"refugee owned"} key={1}>
        refugee owned
      </MenuItem>
    ];

    const { sector, year, refugeeInvestmentType } = this.state;

    const options = { sector, year, refugeeInvestmentType };

    return (
      <Paper className="filter-card" style={{ marginLeft: 0 }}>
        <Typography variant="h6">Filter the stories</Typography>
        <FormControl className="filter-form-control">
          <InputLabel htmlFor="sector-select">select sector</InputLabel>
          <Select
            value={this.state.sector}
            onChange={this.handleChange}
            inputProps={{
              name: "sector",
              id: "sector-select"
            }}
          >
            <MenuItem value={"health"}>health</MenuItem>
            <MenuItem value={"education"}>education</MenuItem>
            <MenuItem value={"agriculture"}>agriculture</MenuItem>
          </Select>
        </FormControl>
        <FormControl className="filter-form-control">
          <InputLabel htmlFor="year-select">select year</InputLabel>
          <Select
            value={this.state.year}
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
            value={this.state.refugeeInvestmentType}
            onChange={this.handleChange}
            inputProps={{
              name: "refugeeInvestmentType",
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
          onClick={() => this.props.filterStories(options)}
        >
          Filter Stories...
        </Button>
      </Paper>
    );
  }
}
