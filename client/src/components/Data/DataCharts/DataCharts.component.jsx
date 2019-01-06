import React, { Component } from "react";
import axios from "axios";
import "../Data.css";
import BarChart from "./Charts/BarChart/BarChart.component";
import LineChart from "./Charts/LineChart/LineChart.component";
import HorizontalBarChart from "./Charts/HorizontalBarChart/HorizontalBarChart.component";
import CircularProgress from "@material-ui/core/CircularProgress";
import VisibilitySensor from "react-visibility-sensor";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Typography from "@material-ui/core/Typography";
import { Paper } from "@material-ui/core";

/*The structure of any chart data object is as the following:
  somethingData: {
        // labels: [],
        // datasets: [{
        //   label: "",
        //   data: [],
        //   backgroundColor: ''
        // }]
      }
*/
export default class DataCharts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      asylumSeekersData: {},
      resettlementData: {},
      demographicsData: {},
      asylumSeekersSelectedYear: 2012,
      demographicsSelectedYear: 2012,
      demographicsSelectedCountry: "Syrian Arab Republic",
      isLoadingAsylumSeekersData: true,
      isLoadingResettlementData: true,
      isLoadingDmographicsData: true,
      allCountries: [],
      isAllCountriesRetrieved: false
    };
  }
  componentDidMount() {
    this.getAllCounries();
  }

  getAllCounries = () => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(res => {
        res.data.forEach((oneData, i) => {
          this.setState(
            {
              allCountries: [
                ...this.state.allCountries,
                { name: oneData.name, alpha3Code: oneData.alpha3Code }
              ]
            },
            () => {
              if (i === 249) {
                this.setState({ isAllCountriesRetrieved: true });
              }
            }
          );
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  goDown = () => {
    document.querySelector(".container").scrollIntoView({
      behavior: "smooth"
    });
  };

  getAsylumSeekersDataByYear = e => {
    if (!e) {
      if (this.state.asylumSeekersData.datasets.length) {
        return;
      }
    }
    const year =
      e && e.target.value > -1
        ? e.target.value
        : this.state.asylumSeekersSelectedYear;
    this.setState({
      asylumSeekersSelectedYear: year,
      isLoadingAsylumSeekersData: true
    });

    axios
      .get(
        `http://popdata.unhcr.org/api/stats/asylum_seekers.json?year=${year}&&country_of_origin=SYR`
      )
      .then(res => {
        this.setState({ isLoadingAsylumSeekersData: false }, () => {
          let labelsOfAsylumCountries = [];
          let dataOfAppliedCount = [];
          let dataOfAccepteddCount = [];
          for (let i = 0; i < 50; i++) {
            if (
              !labelsOfAsylumCountries.includes(
                res.data[i].country_of_asylum_en
              ) &&
              res.data[i].applied_during_year > 4
            ) {
              labelsOfAsylumCountries.push(res.data[i].country_of_asylum_en);
              dataOfAppliedCount.push(res.data[i].applied_during_year);
              dataOfAccepteddCount.push(
                res.data[i].applied_during_year - res.data[i].rejected
              );
            }
          }

          let datasets = [{}, {}];
          datasets[0].data = dataOfAppliedCount;
          datasets[0].label = "Asylum Applications";
          datasets[0].backgroundColor = "#8884d8";
          datasets[1].data = dataOfAccepteddCount;
          datasets[1].label = "Accepted Applications";
          datasets[1].backgroundColor = "#82ca9d";
          this.setState({
            asylumSeekersData: {
              labels: labelsOfAsylumCountries,
              datasets: datasets
            }
          });
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  getResettlementData = () => {
    if (this.state.resettlementData.datasets.length) {
      return;
    }

    const labels = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018];
    const countriesOfAsylum = ["AUS", "CAN", "DEU", "GBR", "USA"];
    const colors = [
      "rgb(232, 51, 56)",
      "rgb(141, 194, 111)",
      "rgb(100, 179, 244)",
      "rgb(100, 65, 165)",
      "rgb(255, 144, 104)"
    ];
    this.setState({ isLoadingResettlementData: true });
    let datasets = [];
    for (let i = 0; i < countriesOfAsylum.length; i++) {
      datasets.push({});
      datasets[i].label = countriesOfAsylum[i];
      datasets[i].backgroundColor = colors[i];
      datasets[i].borderColor = colors[i];
      datasets[i].fill = false;
      datasets[i].data = [];

      for (let j = 0; j < labels.length; j++) {
        axios
          .get(
            `http://popdata.unhcr.org/api/stats/resettlement.json?year=${
              labels[j]
            }&country_of_asylum=${countriesOfAsylum[i]}`
          )
          .then(res => {
            this.setState({ isLoadingResettlementData: false }, () => {
              let totalValue = 0;
              for (let r = 0; r < res.data.length; r++) {
                if (typeof res.data[r].value === "number") {
                  totalValue += res.data[r].value;
                }
              }
              datasets[i].data.push(totalValue);
            });
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
    this.setState({ resettlementData: { labels, datasets } });
  };

  findCountryAlpha3Code = countryName => {
    if (this.state.isAllCountriesRetrieved) {
      for (let i = 0; i < this.state.allCountries.length; i++) {
        if (this.state.allCountries[i].name === countryName) {
          return this.state.allCountries[i].alpha3Code;
        }
      }
    } else {
      return "SYR";
    }
  };

  getDemographicsData = e => {
    if (!e) {
      if (this.state.demographicsData.datasets.length) {
        return;
      }
    }
    let year, country, alpha3Code;
    //check if the event triggered by select year
    if (e && Number(e.target.value) > -1) {
      year = e.target.value;
      country = this.state.demographicsSelectedCountry;
    }
    //check if the event triggered by select country
    else if (e && e.target.value) {
      year = this.state.demographicsSelectedYear;
      country = e.target.value;
    }
    //the initial values when the function is called in componentWillMount
    else {
      year = this.state.demographicsSelectedYear;
      country = this.state.demographicsSelectedCountry;
    }
    this.setState({
      demographicsSelectedYear: year,
      demographicsSelectedCountry: country,
      isLoadingDmographicsData: true
    });
    //find the alpha3Code of the country
    alpha3Code = this.findCountryAlpha3Code(country);

    axios
      .get(
        `http://popdata.unhcr.org/api/stats/demographics.json?year=${year}&country_of_residence=${alpha3Code}`
      )
      .then(res => {
        let labels = [];
        let femaleValueData = [];
        let maleValueData = [];

        this.setState({ isLoadingDmographicsData: false }, () => {
          res.data.forEach(oneData => {
            labels.push(oneData.location_name.split(" ")[0]);
            femaleValueData.push(oneData.female_total_value);
            maleValueData.push(oneData.male_total_value);
          });
          let datasets = [{}, {}];
          datasets[0].data = femaleValueData;
          datasets[0].label = "Female Total Value";
          datasets[0].backgroundColor = "pink";
          datasets[1].data = maleValueData;
          datasets[1].label = "Male Total Value";
          datasets[1].backgroundColor = "#ADD8E6";

          this.setState({ demographicsData: { labels, datasets } });
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  // navigate to specific route
  navigateTO = route => {
    this.props.history.push(route);
    document.body.scrollBy({
      top: window.innerHeight - document.body.scrollTop,
      behavior: "smooth"
    });
  };

  render() {
    let {
      allCountries,
      isLoadingAsylumSeekersData,
      isLoadingResettlementData,
      isLoadingDmographicsData,
      demographicsSelectedYear,
      demographicsSelectedCountry,
      asylumSeekersData,
      resettlementData,
      demographicsData
    } = this.state;

    const { body } = this.props;

    const years = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017];
    let allYears = years.map((year, i) => {
      return (
        <MenuItem value={year} key={i}>
          {year}
        </MenuItem>
      );
    });

    let countries = allCountries.map((country, i) => {
      return (
        <MenuItem value={country.name} key={i}>
          {country.name}
        </MenuItem>
      );
    });
    return (
      <div>
        <section>{body}</section>
        <div className="asylum-seekers-chart">
          <Typography variant="h5" className="text-center">
            UNHCR Statistics of Asylum Seekers from Syria in{" "}
            {this.state.asylumSeekersSelectedYear}
          </Typography>
          <Paper className="padding-20 margin-20">
            <FormControl style={{ width: "50%" }}>
              <InputLabel htmlFor="year-select">select year</InputLabel>
              <Select
                onChange={this.getAsylumSeekersDataByYear}
                value={this.state.asylumSeekersSelectedYear}
                inputProps={{
                  id: "year-select"
                }}
              >
                {allYears}
              </Select>
            </FormControl>
          </Paper>
          <div className="chart-preloader">
            <CircularProgress
              className="preloader"
              size={"7vw"}
              thickness={3}
              style={{
                visibility: isLoadingAsylumSeekersData ? "visible" : "hidden"
              }}
            />
            <VisibilitySensor onChange={this.onChange} partialVisibility={true}>
              {({ isVisible }) => (
                <div style={{ height: "600px" }}>
                  {isVisible ? (
                    <BarChart
                      data={asylumSeekersData}
                      getAsylumSeekersDataByYear={
                        this.getAsylumSeekersDataByYear
                      }
                    />
                  ) : null}
                </div>
              )}
            </VisibilitySensor>
          </div>
        </div>
        <section className="resettlement-chart">
          <Typography variant="h5" className="text-center">
            UNHCR Statistics of Resettlement (2010 - 2018)
          </Typography>
          <div className="chart-preloader">
            <CircularProgress
              className="preloader"
              size={"7vw"}
              thickness={3}
              style={{
                visibility: isLoadingResettlementData ? "visible" : "hidden"
              }}
            />
            <VisibilitySensor onChange={this.onChange} partialVisibility={true}>
              {({ isVisible }) => (
                <div style={{ height: "450px" }}>
                  {isVisible ? (
                    <LineChart
                      data={resettlementData}
                      getResettlementData={this.getResettlementData}
                    />
                  ) : null}
                </div>
              )}
            </VisibilitySensor>
          </div>
        </section>
        <section className="demographics-chart">
          <Typography variant="h5" className="text-center">
            UNHCR Statistics of Demographics in {demographicsSelectedCountry} (
            {demographicsSelectedYear})
          </Typography>
          <Paper className="margin-20 padding-20">
            <FormControl style={{ width: "45%", marginRight: 20 }} id="">
              <InputLabel htmlFor="year-select">select year</InputLabel>
              <Select
                onChange={this.getDemographicsData}
                value={this.state.demographicsSelectedYear}
                inputProps={{
                  id: "year-select"
                }}
              >
                >{allYears}
              </Select>
            </FormControl>
            <FormControl style={{ width: "45%" }} id="">
              <InputLabel htmlFor="country-select">select country</InputLabel>
              <Select
                onChange={this.getDemographicsData}
                value={this.state.demographicsSelectedCountry}
                inputProps={{
                  id: "country-select"
                }}
              >
                >{countries}
              </Select>
            </FormControl>
          </Paper>
          <div className="chart-preloader">
            <CircularProgress
              className="preloader"
              size={"7vw"}
              thickness={3}
              style={{
                visibility: isLoadingDmographicsData ? "visible" : "hidden"
              }}
            />
            <VisibilitySensor onChange={this.onChange} partialVisibility={true}>
              {({ isVisible }) => (
                <div style={{ height: "450px" }}>
                  {isVisible ? (
                    <HorizontalBarChart
                      data={demographicsData}
                      getDemographicsData={this.getDemographicsData}
                    />
                  ) : null}
                </div>
              )}
            </VisibilitySensor>
          </div>
        </section>
      </div>
    );
  }
}
