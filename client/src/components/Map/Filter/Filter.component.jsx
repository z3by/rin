import React from "react";
import axios from "axios";
import "./Filter.css";
import { connect } from "react-redux";
import { setCountries } from "../../../actions/index";

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: []
    };
  }

  componentWillMount() {
    this.fetchAllCountries();
  }

  fetchAllCountries = () => {
    axios.get("/api/countries").then(res => {
      this.props.setCountries(res.data);
    });
  };

  render() {
    let countries = !this.props.countries.countries
      ? []
      : this.props.countries.countries.map(country => {
          return (
            <option value={country.name} key={country.alpha2Code}>
              {country.name}
            </option>
          );
        });

    return (
      <div className="filter">
        <a>Filter</a>

        <div className="filter-input">
          <label htmlFor="org-name" className="filter-label">
            Filter by organization name
          </label>
          <input
            id="org-name"
            type="text"
            name="organizationName"
            placeholder="organization name"
            className="filter-input-text"
            onChange={this.props.filter}
          />
        </div>

        <div className="filter-input">
          <label htmlFor="project-name" className="filter-label">
            Filter by project name
          </label>
          <input
            id="projectName"
            type="text"
            name="projectName"
            placeholder="project name"
            className="filter-input-text"
            onChange={this.props.filter}
          />
        </div>

        <div className="filter-input">
          <label htmlFor="capacity" className="filter-label">
            Filter by project capacity:
            {"    "}
            <span id="capacity-range" data-sympol="  person" />
          </label>
          <input
            id="capacity"
            type="range"
            max="1000000"
            name="capacity"
            placeholder="porject capacity"
            className="slider"
            onChange={this.props.filter}
          />
        </div>

        <div className="filter-input">
          <label htmlFor="starting-year" className="filter-label">
            Filter by project starting-year:
            {"    "}
            <span id="starting-year-range" data-sympol="" />
          </label>

          <input
            id="starting-year"
            type="range"
            name="year"
            placeholder="project starting year"
            className="slider"
            onChange={this.props.filter}
            max={new Date().getFullYear()}
            min={new Date().getFullYear() - 50}
          />
        </div>

        <div className="filter-input">
          <label htmlFor="countries" className="filter-label">
            Filter by countries
          </label>
          <select name="country" id="countries" onChange={this.props.filter}>
            <option value="choose one ">choose country</option>
            {countries}
          </select>
        </div>
        <button onClick={this.props.fetchProjects}>fetch</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  countries: state.countries
});

export default connect(
  mapStateToProps,
  { setCountries }
)(Filter);
