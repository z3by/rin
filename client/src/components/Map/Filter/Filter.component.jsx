import React from "react";
import axios from "axios";
import "./Filter.css";

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
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(res => this.setState({ countries: res.data }));
  };

  onSlide = e => {
    const paragraph = document.querySelector(`#${e.target.id}-range`);

    if (e.target.id === "starting-year") {
      paragraph.innerText =
        "after:  " + parseInt(e.target.value, 10) + paragraph.dataset.sympol;
    } else {
      paragraph.innerText =
        "more than:  " +
        parseInt(e.target.value, 10) +
        paragraph.dataset.sympol;
    }

    // pass the event to the parent component;
    this.props.onSlide(e);
  };

  render() {
    const countries = this.state.countries.map(country => {
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
            placeholder="organization name"
            className="filter-input-text"
            onInput={this.props.filterProjectsByOrgName}
          />
        </div>

        <div className="filter-input">
          <label htmlFor="project-name" className="filter-label">
            Filter by project name
          </label>
          <input
            id="org-name"
            type="text"
            placeholder="project name"
            className="filter-input-text"
            onInput={this.props.filterProjectsByProjectName}
          />
        </div>

        <div className="filter-input">
          <label htmlFor="capacity" className="filter-label">
            Filter by project capacity
          </label>
          <input
            id="capacity"
            type="range"
            max="10000"
            placeholder="porject capacity"
            className="slider"
            onChange={this.onSlide}
          />

          <p id="capacity-range" data-sympol="  person" />
        </div>

        <div className="filter-input">
          <label htmlFor="benefits" className="filter-label">
            Filter by investors benefits
          </label>
          <input
            id="benefits"
            type="range"
            placeholder="organization benefits"
            className="slider"
            onChange={this.onSlide}
            max="10000000"
          />
          <p id="benefits-range" data-sympol="  $" />
        </div>

        <div className="filter-input">
          <label htmlFor="starting-year" className="filter-label">
            Filter by project starting-year
          </label>
          <input
            id="starting-year"
            type="range"
            placeholder="project starting year"
            className="slider"
            onChange={this.onSlide}
            max={new Date().getFullYear()}
            min={new Date().getFullYear() - 50}
          />
          <p id="starting-year-range" data-sympol="" />
        </div>

        <div className="filter-input">
          <label htmlFor="countries" className="filter-label">
            Filter by countries
          </label>
          <select
            name="countries"
            id="countries"
            onChange={this.props.filterByCountry}
          >
            <option value="choose one ">choose country</option>
            {countries}
          </select>
        </div>
      </div>
    );
  }
}

export default Filter;
