import React, { Component } from "react";
import "./Data.css";
import axios from "axios";
import IconButton from "@material-ui/core/IconButton";
import { Route } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import DataCharts from "./DataCharts/DataCharts.component";
import Researches from "./Researches/Researches.component";
import Footer from "../Footer/Footer.component";
import SocialLinks from "../Landing/socialLinks.component";
import Logo from "../Landing/Logo.component";

export default class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionInfo: {}
    };
  }

  componentWillMount() {
    this.getSectionInfo("data");
  }

  getSectionInfo = sectionTitle => {
    axios
      .get(`/api/sectiontitle/${sectionTitle}`)
      .then(result => {
        this.setState({ sectionInfo: result.data[0] });
      })
      .catch(err => {
        console.log(err);
      });
  };

  goDown = () => {
    document.querySelector(".data").scrollBy({
      top: window.innerHeight - document.body.scrollTop,
      behavior: "smooth"
    });
  };

  // navigate to specific route
  navigateTO = route => {
    this.props.history.push(route);
    this.goDown();
  };

  render() {
    const { sectionInfo } = this.state;

    return (
      <div
        className="data fadeInFast"
        style={{
          overflowY: "scroll"
        }}
      >
        <SocialLinks />
        <Logo />
        <header>
          <div className="banner-full">
            <Typography variant="h1" className="hero-title upper color-2">
              {sectionInfo.title}
            </Typography>
            <Typography variant="h5" className="hero-subtitle color-1">
              {sectionInfo.subtitle}
            </Typography>
            <ul className="header-nav">
              <li>
                <a
                  onClick={() => {
                    this.navigateTO("/data");
                  }}
                >
                  <i className="fas fa-chart-bar" />
                  <h5 className="upper">Data</h5>
                </a>
              </li>

              <li>
                <a
                  onClick={() => {
                    this.navigateTO("/data/researches");
                  }}
                >
                  <i className="fas fa-file-contract" />
                  <h5 className="upper">researches</h5>
                </a>
              </li>
            </ul>
            <div className="go-down" onClick={this.goDown}>
              <IconButton>
                <i className="fas fa-arrow-down color-1" />
              </IconButton>
            </div>
          </div>
        </header>
        <div className="container">
          <Route
            exact
            path="/data"
            render={props => <DataCharts {...props} body={sectionInfo.body} />}
          />
          <Route path="/data/researches" component={Researches} />
        </div>
        <Footer />
      </div>
    );
  }
}
