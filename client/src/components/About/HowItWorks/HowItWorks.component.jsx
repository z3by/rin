import React from "react";
import "./HowItWorks.css";
import { Typography, Paper } from "@material-ui/core";

export default props => {
  return (
    <div className="fadeInFast">
      <Typography variant="h4" className="upper color-4">
        <i className="far fa-sun color-2" style={{ marginRight: 20 }} />
        How it works
      </Typography>
      <Paper className="padding-20 margin-20">
        <Typography variant="body1">
          increased capital investments. Drawing on deep domain expertise on
          Driving economic prosperity through improved investor networks and
          impact investing, development finance, and migration issues, and
          enabled through the thoughtful application of data science, the RIN
          provides its members with three core offerings:
        </Typography>
      </Paper>
      <Paper className="padding-20 margin-20" id="research">
        <Typography variant="h4" style={{ marginTop: 20 }}>
          <i className="color-2 start-icon fab fa-searchengin" />
          Research
        </Typography>
        <div className="p-heading">
          <div
            className="p-heading-image"
            style={{
              backgroundImage: "url(/imgs/about/1.jpeg)",
              backgroundPositionY: "60%"
            }}
          />
          <Typography variant="h6" className="p-heading-text">
            RIN creates the investment and impact proof points that serve as the
            foundation of a vibrant refugee investment market.
          </Typography>
        </div>
        <Typography variant="h6" className="color-4" style={{ marginTop: 20 }}>
          RIN members benefit from:
        </Typography>
        <ol>
          <li>
            <Typography variant="h6"> Market intelligence</Typography>
            <Typography variant="body1">
              The first knowledge hub containing investor-centric research on
              the current business, investment, and regulatory context of
              emerging and frontier markets that host large numbers of refugees
              or forced migrant populations
            </Typography>
          </li>
          <li>
            <Typography variant="h6">Expert insights</Typography> Guidance on
            <Typography variant="body1">
              where and how to incorporate displaced communities into investment
              strategies, with a focus on understanding local realities,
              opportunities, and how to effectively partner with governments and
              international financial institutions
            </Typography>
          </li>
          <li>
            <Typography variant="h6">Deal scorecards: </Typography>
            <Typography variant="body1">
              Access to independent and unbiased evaluations of the impact of
              investments on displaced and host communities designed in
              collaboration with investment and humanitarian partners
            </Typography>
          </li>
        </ol>
      </Paper>
      <Paper className="padding-20 margin-20" id="facilitation">
        <Typography variant="h4">
          <i className="color-2 start-icon fab fa-leanpub" />
          Facilitation
        </Typography>
        <div className="p-heading">
          <div
            className="p-heading-image"
            style={{
              backgroundImage: "url(/imgs/about/2.jpeg)",
              backgroundPositionY: "60%"
            }}
          />
          <Typography variant="h6" className="color-3 p-heading-text">
            RIN helps investors put their capital to work supporting displaced
            people and the communities hosting them.
          </Typography>
        </div>
        <Typography variant="h6" className="color-4" style={{ marginTop: 20 }}>
          This support includes:
        </Typography>
        <ol>
          <li>
            <Typography variant="h6">Deal flow</Typography>
            <Typography variant="body1">
              A geographically diversified portfolio of high-quality investment
              opportunities including deals that: (a) hire and source from
              refugees and forced-migrant populations; (b) provide goods and
              services to refugees and host communities; (c) expand the number
              and quality of refugee-owned micro-, small-, and medium-sized
              enterprises; (d) strengthen social enterprises that meet refugee
              and host community needs; or (e) utilize development impact bonds
            </Typography>
          </li>
          <li>
            <Typography variant="h6">Co-investment facilitation</Typography>
            <Typography variant="body1">
              Access to co-investment or partners to move deals up the funding
              ladder and fill specific investment gaps, particularly in blended
              finance and impact investment deals
            </Typography>
          </li>
          <li>
            <Typography variant="h6">Structuring assistance</Typography>
            <Typography variant="body1">
              Navigation and design of de-risking instruments, guarantees, or
              other innovative financial instruments often necessary in markets
              hosting refugees
            </Typography>
          </li>
        </ol>
      </Paper>
      <Paper className="padding-20 margin-20" id="policy">
        <Typography variant="h4">
          <i className="color-2 start-icon fas fa-gavel" />
          Policy and Advocacy:
        </Typography>
        <div className="p-heading">
          <div
            className="p-heading-image"
            style={{
              backgroundImage: "url(/imgs/about/3.jpeg)",
              backgroundPositionY: "60%"
            }}
          />
          <Typography variant="h6" className="color-3 p-heading-text">
            RIN bridges the gap between private investors, international donors,
            governments, and NGOs in the broader global development community.
          </Typography>
        </div>
        <Typography variant="h6" className="color-4" style={{ marginTop: 20 }}>
          These efforts focus on:
        </Typography>
        <ol>
          <li>
            <Typography variant="h6">Access and voice</Typography>
            <Typography variant="body1">
              Streamlined access between private investors, development finance
              institutions, and aid agencies to convey investor needs and market
              barriers that need to be mitigated to enhance capital entry and
              deal flow
            </Typography>
          </li>
          <li>
            <Typography variant="h6">National policy</Typography>
            <Typography variant="body1">
              Strategic influence to reshape national policies in target
              countries so they are more supportive to investment and economic
              opportunities for refugees
            </Typography>
          </li>
          <li>
            <Typography variant="h6">Changing the narrative</Typography>
            <Typography variant="body1">
              telling powerful stories of how refugees are investable and are
              significant contributors to local economies
            </Typography>
          </li>
        </ol>
      </Paper>
    </div>
  );
};
