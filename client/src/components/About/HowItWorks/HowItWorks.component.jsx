import React from "react";
import "./HowItWorks.css";

export default props => {
  return (
    <div className="">
      <div className="key-strategy">
        <img
          src="/imgs/banners/5320649067_67a0728f12_o.jpg"
          alt=""
          className="banner-img"
        />
        <h1 className="heading-theme-2">
          <i className="far fa-sun" />
          How it works
        </h1>
        <p className="p-theme-1">
          Driving economic prosperity through improved investor networks and
          increased capital investments. Drawing on deep domain expertise on
          impact investing, development finance, and migration issues, and
          enabled through the thoughtful application of data science, the RIN
          provides its members with three core offerings:
        </p>

        <p className="p-theme-1">
          <b>
            <i className="fab fa-searchengin" />
            Research{" "}
          </b>{" "}
          RIN creates the investment and impact proof points that serve as the
          foundation of a vibrant refugee investment market. RIN members benefit
          from:
        </p>

        <ul>
          <li>
            <b> Market intelligence:</b> The first knowledge hub containing
            investor-centric research on the current business, investment, and
            regulatory context of emerging and frontier markets that host large
            numbers of refugees or forced migrant populations
          </li>
          <li>
            <b>Expert insights:</b> Guidance on where and how to incorporate
            displaced communities into investment strategies, with a focus on
            understanding local realities, opportunities, and how to effectively
            partner with governments and international financial institutions
          </li>
          <li>
            <b>Deal scorecards: </b>
            Access to independent and unbiased evaluations of the impact of
            investments on displaced and host communities designed in
            collaboration with investment and humanitarian partners
          </li>
        </ul>
      </div>
      <div className="key-strategy">
        <p className="p-theme-1">
          <b>
            <i className="fab fa-leanpub" />
            Facilitation:{" "}
          </b>
          RIN helps investors put their capital to work supporting displaced
          people and the communities hosting them. This support includes:
        </p>

        <ul>
          <li>
            <b>Deal flow:</b> A geographically diversified portfolio of
            high-quality investment opportunities including deals that: (a) hire
            and source from refugees and forced-migrant populations; (b) provide
            goods and services to refugees and host communities; (c) expand the
            number and quality of refugee-owned micro-, small-, and medium-sized
            enterprises; (d) strengthen social enterprises that meet refugee and
            host community needs; or (e) utilize development impact bonds
          </li>
          <li>
            <b>Co-investment facilitation:</b> Access to co-investment or
            partners to move deals up the funding ladder and fill specific
            investment gaps, particularly in blended finance and impact
            investment deals
          </li>
          <li>
            <b>Structuring assistance:</b> Navigation and design of de-risking
            instruments, guarantees, or other innovative financial instruments
            often necessary in markets hosting refugees
          </li>
        </ul>
      </div>
      <div className="key-strategy">
        <p className="p-theme-1">
          <b>
            <i className="fas fa-gavel" />
            Policy and Advocacy:
          </b>{" "}
          RIN bridges the gap between private investors, international donors,
          governments, and NGOs in the broader global development community.
          These efforts focus on:
        </p>

        <ul>
          <li>
            <b> Access and voice:</b> Streamlined access between private
            investors, development finance institutions, and aid agencies to
            convey investor needs and market barriers that need to be mitigated
            to enhance capital entry and deal flow
          </li>
          <li>
            <b>National policy:</b> Strategic influence to reshape national
            policies in target countries so they are more supportive to
            investment and economic opportunities for refugees
          </li>
          <li>
            <b>Changing the narrative:</b> telling powerful stories of how
            refugees are investable and are significant contributors to local
            economies
          </li>
        </ul>
      </div>
    </div>
  );
};
