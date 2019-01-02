import React, { Component } from "react";
import "./WhoWeAre.css";
import Team from "../Team/Team.component";
import TeamInfo from "../team.json";
import SteeringInfo from "../steering.json";
import { Typography, Paper } from "@material-ui/core";

export default class WhoWeAre extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentMemberInfo: {}
    };
  }

  render() {
    return (
      <div className="who-we-are">
        <section>
          <Typography variant="h3" className="color-4 upper text-center">
            <i className="fas fa-users start-icon color-2" />
            Who We Are
          </Typography>
          <Typography variant="h6" className="capitalize color-3 text-center">
            A commitment to courageous action, innovative economic solutions,
            and deep collaboration.
          </Typography>

          <div className="grid-2 margin-20">
            <div className="card-col">
              <Typography variant="h6" className="upper color-4">
                <i className="start-icon fas fa-users-cog" />
                Operating Team
              </Typography>
              <Typography variant="body1" className="">
                RIN Members represent the full capital continuum: foundations
                and philanthropists, impact, institutional, and commercial
                investors--as well as international finance institutions,
                policymakers, and humanitarians. RIN members all share a
                commitment to courageous action, innovative economic solutions,
                and deep collaboration.
              </Typography>
            </div>
            <div className="card-col">
              <Typography variant="h6" className="upper color-4">
                <i className="start-icon fas fa-user-friends" />
                Key Partners
              </Typography>
              <Typography variant="body1" className="">
                Systems entrepreneurs John Kluge (Alight Fund & Toilet Hackers)
                and Tim Docking (IBM & Millennium Challenge Corporation) lead
                the RIN with support from the Global Development Incubator
                (GDI), a non-profit that builds startups and partnerships to
                address global development challenges. GDI’s Founder and
                Executive Director Andrew Stern leads the organization’s
                strategic and operational support for the RIN.
              </Typography>
            </div>
          </div>
        </section>
        <section>
        <Typography variant="h4" className="color-4 text-center">
            <i className="start-icon color-2 fas fa-users" />
            Meet The Team
          </Typography>
          <div className="grid-5">
            <Team {...this.props} info={TeamInfo} />
          </div>
        </section>  
        <section>
          <Typography variant="h4" className="color-4 text-center">
            <i className="start-icon color-2 fas fa-user-friends" />
            Guided by a world-class Steering Committee.
          </Typography>
          <Typography variant="subtitle1" className="text-center color-3">
            We're proud to draw on the expertise of a Steering Committee made up
            of members who come from diverse backgrounds but share a commitment
            to creating long-term solutions to global forced migration.
          </Typography>
          <div className="grid-6">
            <Team {...this.props} info={SteeringInfo} />
          </div>
        </section>
      </div>
    );
  }
}
