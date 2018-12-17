import React, { Component } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import sdgsData from "../../../../config/sdgs";
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
      refugeeInvestmentTypes: []
    };
  }

  componentDidMount() {
    this.fetchRFTs();
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
    const i = sdgs.indexOf(val);
    if (i >= 0) {
      sdgs.splice(i, 1);
      this.setState({
        options: {
          ...options,
          sdgs
        }
      });
    } else {
      this.setState({
        options: {
          ...options,
          sdgs: [...sdgs, val]
        }
      });
    }
  };

  // fetch refugee investment types
  fetchRFTs = () => {
    Axios.get("/api/refugeeinvestmenttypes").then(res => {
      this.setState({ refugeeInvestmentTypes: res.data });
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
          {sdgsData.map((sdg, i) => {
            return (
              <div key={i}>
                <Checkbox
                  style={{ color: "var(--color-2)" }}
                  checked={this.state.options.sdgs.includes(sdg.name)}
                  value={sdg.name}
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
