import React, { Component } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import refugeeInvestmentTypes from "../../../../config/refugeeInvestmentTypes";
import { TextField } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import sdgs from "../../../../config/sdgs";

export default class FilterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: { year: "", refugeeInvestmentType: "", selectedSdgs: [] }
    };
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
    this.setState({
      options: {
        ...this.state.options,
        selectedSdgs: [...this.state.options.selectedSdgs, e.target.value]
      }
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
            investment type
          </InputLabel>
          <Select
            className="full-width-input"
            value={this.state.options.refugeeInvestmentType}
            onChange={this.handleChange}
            inputProps={{
              name: "refugeeInvestmentType",
              id: "refugee-investment-type-select"
            }}
          >
            {refugeeInvestmentTypes.map((rft, i) => {
              return (
                <MenuItem value={rft.name} key={i}>
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
          {sdgs.map((sdg, i) => {
            return (
              <div key={i}>
                <Checkbox
                  style={{ color: "var(--color-2)" }}
                  checked={this.state.options.selectedSdgs.includes(sdg.name)}
                  value={sdg.name}
                  onChange={this.handleSdgSelect}
                />
                <img
                  src={sdg.logo}
                  alt="sdg"
                  style={{ width: 40, height: 40 }}
                />
              </div>
            );
          })}
        </div>
        <Button
          style={{
            background: "var(--color-2)",
            color: "white",
            display: "block",
            margin: "20px auto"
          }}
          onClick={() => {
            this.props.filterProjects(this.state.options);
          }}
        >
          Filter Projects...
        </Button>
      </div>
    );
  }
}
