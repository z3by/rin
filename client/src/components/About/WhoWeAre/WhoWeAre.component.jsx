import React from "react";
import "./WhoWeAre.css";

export default props => {
  return (
    <div className="">
      <h1 className="heading-theme-2">
        <i className="fas fa-users" />
        Who We Are
      </h1>
      <h3 className="heading-theme-3">
        A commitment to courageous action, innovative economic solutions, and
        deep collaboration.
      </h3>
      <div className="grid-2">
        <div>
          <h1 className="heading-theme-4">
            <i className="fas fa-users-cog" />
            Operating Team
          </h1>
          <p className="p-theme-1">
            RIN Members represent the full capital continuum: foundations and
            philanthropists, impact, institutional, and commercial investors--as
            well as international finance institutions, policymakers, and
            humanitarians. RIN members all share a commitment to courageous
            action, innovative economic solutions, and deep collaboration.
          </p>
        </div>
        <div>
          <h1 className="heading-theme-4">
            <i className="fas fa-user-friends" />
            Key Partners
          </h1>
          <p className="p-theme-1">
            Systems entrepreneurs John Kluge (Alight Fund & Toilet Hackers) and
            Tim Docking (IBM & Millennium Challenge Corporation) lead the RIN
            with support from the Global Development Incubator (GDI), a
            non-profit that builds startups and partnerships to address global
            development challenges. GDI’s Founder and Executive Director Andrew
            Stern leads the organization’s strategic and operational support for
            the RIN.
          </p>
        </div>
      </div>
    </div>
  );
};
