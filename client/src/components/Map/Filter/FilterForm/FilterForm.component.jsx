import React, { Component } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import Axios from "axios";

export default class FilterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        year: "",
        refugeeInvestmentTypeId: 0,
        sdgs: [],
        investmentSize: ""
      },
      refugeeInvestmentTypes: [],
      sdgs: []
    };
  }

  componentDidMount() {
    this.fetchRFTs();
    this.fetchSDGs();
  }

  handleChange = e => {
    this.setState({
      options: {
        ...this.state.options,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSdgSelect = e => {
    const sdgs = this.state.options.sdgs;
    const val = e.target.value;
    const options = this.state.options;
    const i = sdgs.indexOf(Number(val));
    // check if the sdg is already selected

    if (i >= 0) {
      sdgs.splice(i, 1);
    } else {
      sdgs.push(Number(val));
    }

    this.setState({
      options: {
        ...options,
        sdgs
      }
    });
  };

  // fetch refugee investment types
  fetchRFTs = () => {
    Axios.get("/api/refugeeinvestmenttypes").then(res => {
      this.setState({ refugeeInvestmentTypes: res.data });
    });
  };

  // fetch sustainable development goals
  fetchSDGs = () => {
    Axios.get("/api/sdgs").then(res => {
      this.setState({ sdgs: res.data });
    });
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

    return (
      <div className="center-w-50">
        <FormControl style={{ width: "100%" }}>
          <InputLabel
            shrink={this.state.year ? true : false}
            htmlFor="year-select"
          >
            select year
          </InputLabel>
          <Select
            className="full-width-input"
            value={this.state.options.year}
            onChange={this.handleChange}
            inputProps={{
              name: "year",
              id: "year-select"
            }}
          >
            {yearsItems}
          </Select>
        </FormControl>

        <FormControl style={{ width: "100%" }}>
          <InputLabel
            shrink={this.state.options.refugeeInvestmentType ? true : false}
            htmlFor="refugee-investment-type-select"
          >
            refugee investment type
          </InputLabel>
          <Select
            className="full-width-input"
            value={this.state.options.refugeeInvestmentTypeId}
            onChange={this.handleChange}
            inputProps={{
              name: "refugeeInvestmentTypeId",
              id: "refugee-investment-type-select"
            }}
          >
            {this.state.refugeeInvestmentTypes.map((rft, i) => {
              return (
                <MenuItem value={rft.id} key={i}>
                  {rft.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl style={{ width: "100%" }}>
          <TextField
            value={this.state.options.investmentSize}
            className="full-width-input"
            InputLabelProps={{
              shrink: this.state.options.investmentSize ? true : false
            }}
            label="investment size by US dollar $"
            onChange={this.handleChange}
            name="investmentSize"
            type="number"
            inputProps={{ min: 0 }}
          />
        </FormControl>
        <div className="sdgs-checkboxes">
          {this.state.sdgs.map((sdg, i) => {
            return (
              <div key={i}>
                <Checkbox
                  checked={this.state.options.sdgs.includes(sdg.id)}
                  value={sdg.id}
                  onChange={this.handleSdgSelect}
                />
                <img
                  src={sdg.logo}
                  alt="sdg"
                  style={{ width: 60, height: 60 }}
                />
              </div>
            );
          })}
        </div>
        <div className="flex-col">
          <Button
            style={{
              background: "var(--color-2)",
              color: "white",
              display: "block",
              margin: "20px 10px"
            }}
            onClick={() => {
              this.props.toggleFilter();
              this.props.filterProjects(this.state.options);
            }}
          >
            <i className="fas fa-filter" /> Filter Projects...
          </Button>
          <Button
            style={{
              background: "var(--color-4)",
              color: "white",
              display: "block",
              margin: "20px 10px"
            }}
            onClick={() => {
              this.props.resetFilter();
            }}
          >
            <i className="fas fa-redo-alt" /> Reset Filter
          </Button>
        </div>
      </div>
    );
  }
}
