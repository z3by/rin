import React, { Component } from "react";
import "./Data2.css";
import axios from "axios";
import IconButton from "@material-ui/core/IconButton";
import CircularProgress from '@material-ui/core/CircularProgress';
import MyBarChart from "./MyBarChart/MyBarChart.component";

export default class Data2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      asylumSeekersData: {},
      asylumSeekersSelectedYear: 2012,
      isLoadingAsylumSeekersData: true
    }
  }

  componentDidMount() {
    // this.getAllCounries();
    this.getAsylumSeekersDataByYear();
    // this.getResettlementData();
    // this.getDemographicsData();
  }

  getAllCounries = () => {
    axios.get("https://restcountries.eu/rest/v2/all")
      .then(res => {
        res.data.forEach((oneData, i) => {
          this.setState({ allCountries: [...this.state.allCountries, { name: oneData.name, alpha3Code: oneData.alpha3Code }] }, () => {
            if (i === 249) {
              this.setState({ isAllCountriesRetrieved: true });
            }
          });
        });
      })
      .catch(err => {
        console.log(err);
      })
  }

  scrollToTop = () => {
    document.querySelector(".library").scrollIntoView({
      behavior: "smooth"
    });
  };

  goDown = () => {
    document.querySelector(".container").scrollIntoView({
      behavior: "smooth"
    });
  };

  // check if an array of objects "arr" icludes a specific key value "val"
  isArrayInclude = (arr, key, val) => {
    arr.forEach(elm => {
      if (elm[key] === val) {
        return true;
      }
    });
    return false;
  }

  getAsylumSeekersDataByYear = e => {
    const year = this.state.asylumSeekersSelectedYear;
    //   e && e.target.value > -1
    //     ? e.target.value
    //     : this.state.asylumSeekersSelectedYear;
    // this.setState({
    //   asylumSeekersSelectedYear: year,
    //   isLoadingAsylumSeekersData: true
    // });

    axios
      .get(
        `http://popdata.unhcr.org/api/stats/asylum_seekers.json?year=${year}&&country_of_origin=SYR`
      )
      .then(res => {
        this.setState({ isLoadingAsylumSeekersData: false }, () => {
          let data = [];
          let obj = {};
          for (let i = 0; i < 50; i++) {
            if (!this.isArrayInclude(data, "label", res.data[i].country_of_asylum_en) && res.data[i].applied_during_year > 4) {
              obj = { label: "", AppliedCount: 0, AccepteddCount: 0 };
              obj.label = res.data[i].country_of_asylum_en;
              obj["Asylum Applications"] = res.data[i].applied_during_year;
              obj["Accepted Applications"] = res.data[i].applied_during_year - res.data[i].rejected;
              data.push(obj);
            }
          }
          let bars = [{ dataKey: "Asylum Applications", fill: "#8884d8" }, { dataKey: "Accepted Applications", fill: "#82ca9d" }];
          let xAsisName = "label";

          let asylumSeekersData = {
            data,
            bars,
            xAsisName
          }
          console.log(asylumSeekersData);

          this.setState({ asylumSeekersData });
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    let { asylumSeekersData } = this.state;

    return (
      <div
        className="data fadeInFast"
        style={{
          overflowY: "scroll"
        }}
      >
        <header>
          <div className="banner-full">
            <h1>data</h1>
            <div className="line" />
            <h3>statistics proof that refugees are a great investment</h3>
            <div className="go-down" onClick={this.goDown}>
              <IconButton>
                <i className="fas fa-arrow-down color-2" />
              </IconButton>
            </div>
          </div>
        </header>
        <div className="container">
          <div className="bar">
            <MyBarChart data={asylumSeekersData.data} xAsisName={asylumSeekersData.xAsisName} bars={asylumSeekersData.bars} />
          </div>
        </div>
      </div >
    );
  }
}



