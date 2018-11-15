import React from "react";
import axios from "axios";
import "./Filter.css";

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      filterToggled: false
    };
  }

  componentWillMount() {
    this.fetchAllCountries();
  }

  fetchAllCountries = () => {
    axios.get("/api/countries").then(res => {
      this.setState({
        countries: res.data
      });
    });
  };

  toggleFilter = () => {
    const { filterToggled } = this.state;
    this.setState({
      filterToggled: !filterToggled
    });
  };

  render() {
    const countries = this.state.countries.map(country => {
      return (
        <option value={country.name} key={country.alpha2Code}>
          {country.name}
        </option>
      );
    });

    let show = this.state.filterToggled ? " show" : "";
    return (
      <div className={"filter" + show}>
        <a onClick={this.toggleFilter}>
          <i className="fas fa-search" /> Filter
        </a>

        <a
          className="close"
          onClick={this.toggleFilter}
          style={{ display: this.state.filterToggled ? "block" : "none" }}
        >
          <i className="fas fa-times" />
        </a>
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
            <span>{this.props.options.capacity}</span>
          </label>
          <input
            id="capacity"
            type="range"
            max="1000000"
            name="capacity"
            placeholder="Porject Capacity"
            className="slider"
            onChange={this.props.filter}
          />
        </div>

        <div className="filter-input">
          <label htmlFor="starting-year" className="filter-label">
            Filter by project starting-year:
            {"    "}
            <span>{this.props.options.year}</span>
          </label>

          <input
            id="starting-year"
            type="range"
            name="year"
            placeholder="Project Starting Year"
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
        <button
          className="btn"
          onClick={() => {
            this.toggleFilter();
            this.props.fetchProjects();
          }}
        >
          search
        </button>
      </div>
    );
  }
}

export default Filter;
