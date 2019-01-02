import React from "react";
import "./Strategy.css";
import { Typography } from "@material-ui/core";
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
        style={{ listStyle: "none" }}
      >
        <li style={{ margin: 0 }}>
          <div className="card-col">
            <Typography variant="h6" className="upper color-1">
              Research
            </Typography>
            <Typography variant="body1">
              Create the first investor-centered knowledge hub targeting
              business opportunities that support refugee self-reliance
            </Typography>
          </div>
        </li>
        <li style={{ margin: 0 }}>
          <div className="card-col">
            <Typography variant="h6" className="upper color-1">
              Facilitation
            </Typography>
            <Typography variant="body1">
              Guidance on Build a pipeline of bankable deals that will speed and
              scale private investment in communities of displaced people
            </Typography>
          </div>
        </li>
        <li style={{ margin: 0 }}>
          <div className="card-col">
            <Typography variant="h6" className="upper color-1">
              Policy and Advocacy
            </Typography>
            <Typography variant="body1">
              Articulate and bridge investor needs to funders, governments, and
              the development community to drive catalytic investments and
              policies
            </Typography>
          </div>
        </li>
      </ul>

      <HowItWorksComponent />
    </div>
  );
};
