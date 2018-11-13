import React from "react";
import "./WhoWeAre.css";
import Team from "../Team/Team.component";
import TeamInfo from "../team.json";
import SteeringInfo from "../steering.json";

export default props => {
  setTimeout(() => {
    document.body.scrollTo(0, window.innerHeight);
  }, 200);
  return (
    <div className="who-we-are">
      <section>
        <h2 className="heading-theme-2">
          <i className="fas fa-users" />
          Who We Are
        </h2>
        <h5 className="color-3">
          A commitment to courageous action, innovative economic solutions, and
          deep collaboration.
        </h5>
        <div className="grid-2">
          <div>
            <h3 className="heading-theme-4">
              <i className="fas fa-users-cog" />
              Operating Team
            </h3>
            <p className="p-theme-1">
              RIN Members represent the full capital continuum: foundations and
              philanthropists, impact, institutional, and commercial
              investors--as well as international finance institutions,
              policymakers, and humanitarians. RIN members all share a
              commitment to courageous action, innovative economic solutions,
              and deep collaboration.
            </p>
          </div>
          <div>
            <h3 className="heading-theme-4">
              <i className="fas fa-user-friends" />
              Key Partners
            </h3>
            <p className="p-theme-1">
              Systems entrepreneurs John Kluge (Alight Fund & Toilet Hackers)
              and Tim Docking (IBM & Millennium Challenge Corporation) lead the
              RIN with support from the Global Development Incubator (GDI), a
              non-profit that builds startups and partnerships to address global
              development challenges. GDI’s Founder and Executive Director
              Andrew Stern leads the organization’s strategic and operational
              support for the RIN.
            </p>
          </div>
        </div>
        <h2 className="heading-theme-4 upper">
          <i className="fas fa-users" />
          Meet The Team
        </h2>
        <Team info={TeamInfo} />
      </section>
      <section>
        <h2 className="heading-theme-4 upper">
          <i className="fas fa-user-friends" />
          Guided by a world-class Steering Committee.
        </h2>
        <p className="">
          We're proud to draw on the expertise of a Steering Committee made up
          of members who come from diverse backgrounds but share a commitment to
          creating long-term solutions to global forced migration.
        </p>
        <Team info={SteeringInfo} />
      </section>
    </div>
  );
};
