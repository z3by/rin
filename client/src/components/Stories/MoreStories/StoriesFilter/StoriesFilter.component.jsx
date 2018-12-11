import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Axios from "axios";
import Button from "@material-ui/core/Button";

export default class StoriesFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sector: "",
      year: "",
      country: "",
      refugeeInvestmentType: "",
      countries: [],
      labelWidth: 0
    };
  }

  componentWillMount() {
    this.fetchCountries();
  }

  fetchCountries = () => {
    Axios.get("/api/countries/names").then(result => {
      this.setState({ countries: result.data });
    });
  };

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

    const countries = this.state.countries.map((country, i) => {
      return (
        <MenuItem value={country.name} key={i}>
          {country.name}
        </MenuItem>
      );
    });

    const refugeeInvestmentTypes = [
      <MenuItem value={"refugee owend"} key={1}>
        refugee owened
      </MenuItem>
    ];

    const { sector, year, country, refugeeInvestmentType } = this.state;

    const options = { sector, year, country, refugeeInvestmentType };

    return (
      <Paper style={{ padding: 20 }}>
        <FormControl style={{ width: 150, marginLeft: 10 }}>
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
        <FormControl style={{ width: 150, marginLeft: 10 }}>
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
        <FormControl style={{ width: 150, marginLeft: 10 }}>
          <InputLabel htmlFor="country-select">select country</InputLabel>
          <Select
            value={this.state.country}
            onChange={this.handleChange}
            inputProps={{
              name: "country",
              id: "country-select"
            }}
          >
            {countries}
          </Select>
        </FormControl>
        <FormControl style={{ width: 150, marginLeft: 10 }}>
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
