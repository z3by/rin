import React from "react";
import axios from "axios";
import "./Filter.css";

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { countries: [] };
  }

  componentWillMount() {
    this.fetchAllCountries();
  }

  fetchAllCountries = () => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(res => this.setState({ countries: res.data }));
  };

  onSlide = e => {
    document.querySelector("#benefits-range").innerText =
      parseInt(e.target.value) + "  $";
  };

  render() {
    const countries = this.state.countries.map(country => {
      return <option value={country.name}> {country.name}</option>;
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
            placeholder="organization name"
            className="filter-input-text"
          />
          <button className="filter-btn">Filter</button>
        </div>

        <div className="filter-input">
          <label htmlFor="capacity" className="filter-label">
            Filter by organization capacity
          </label>
          <input
            id="capacity"
            type="text"
            placeholder="organization capacity"
            className="filter-input-text"
          />
          <button className="filter-btn">Filter</button>
        </div>

        <div className="filter-input">
          <label htmlFor="benefits" className="filter-label">
            Filter by organization benefits
          </label>
          <input
            id="benefits"
            type="range"
            placeholder="organization benefits"
            className="slider"
            onChange={this.onSlide}
            max="10000000"
          />
          <p id="benefits-range" />
        </div>

        <div className="filter-input">
          <label htmlFor="countries" className="filter-label">
            Filter by countries
          </label>
          <select name="countries" id="countries">
            {countries}
          </select>
        </div>
      </div>
    );
  }
}

export default Filter;
