import React from "react";
import "./Strategy.css";
import { Typography, Card } from "@material-ui/core";
import HowItWorksComponent from "../HowItWorks/HowItWorks.component";

export default props => {
  return (
    <div className="strategy">
      <Typography variant="h4" className="upper color-4 text-center">
        <i className="fas fa-street-view start-icon color-2" />
        The RIN strategy has three pillars:
      </Typography>
      <ul
        className="grid-3 stategy-cards"
        style={{ listStyle: "none", padding: 0, margin: "50px 0" }}
      >
        <li style={{ margin: 0 }}>
          <Card className="card-col">
            <Typography variant="h6" className="upper color-1">
              Research
            </Typography>
            <Typography variant="body1">
              Create the first investor-centered knowledge hub targeting
              business opportunities that support refugee self-reliance
            </Typography>
          </Card>
        </li>
        <li style={{ margin: 0 }}>
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
        <li style={{ margin: 0 }}>
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
    </div>
  );
};
