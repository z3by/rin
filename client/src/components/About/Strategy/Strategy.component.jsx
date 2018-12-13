import React from "react";
import "./Strategy.css";
import { Typography, Paper, Card } from "@material-ui/core";
import HowItWorksComponent from "../HowItWorks/HowItWorks.component";
import IconButton from "@material-ui/core/IconButton";

export default props => {
  setTimeout(() => {
    document.body.scrollTo(0, window.innerHeight);
  }, 200);
  return (
    <div className="strategy fadeInFast">
      <Typography variant="h4" className="upper color-4">
        <i class="fas fa-street-view start-icon color-2" />
        The RIN strategy has three pillars:
      </Typography>
      <ul
        className="grid-3"
        style={{ listStyle: "none", padding: 0, margin: "50px 0" }}
      >
        <li>
          <a href="#research">
            <Card className="card-col">
              <Typography variant="h6" className="upper color-1">
                Research
              </Typography>
              <Typography variant="body1">
                Create the first investor-centered knowledge hub targeting
                business opportunities that support refugee self-reliance
              </Typography>
            </Card>
          </a>
        </li>
        <li>
          <Card className="card-col">
            <Typography variant="h6" className="upper color-1">
              Facilitation
            </Typography>
            <Typography variant="body1">
              Guidance on Build a pipeline of bankable deals that will speed and
              scale private investment in communities of displaced people
            </Typography>
          </Card>
        </li>
        <li>
          <Card className="card-col">
            <Typography variant="h6" className="upper color-1">
              Policy and Advocacy
            </Typography>
            <Typography variant="body1">
              Articulate and bridge investor needs to funders, governments, and
              the development community to drive catalytic investments and
              policies
            </Typography>
          </Card>
        </li>
      </ul>

      <Typography variant="h6" className="color-5" style={{ margin: "30px 0" }}>
        <i className="far fa-calendar start-icon" />
        By 2030 the RIN aims to unlock at least $1 billion in investment deals
        that produce over one million new jobs and measurably improve the
        livelihood opportunities for refugees and their host communities.
      </Typography>
      <HowItWorksComponent />
      <div className="back-to-top">
        <IconButton className="arrow-btn" onClick={this.scrollToTop}>
          <i className="fas fa-arrow-up" />
        </IconButton>
      </div>
    </div>
  );
};
