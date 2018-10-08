import React, { Component } from "react";
import "./About.css";
import TeamComponent from "./Team/Team.component";
import * as steeringInfo from "./steering.json";
import * as teamInfo from "./team.json";

export default class About extends Component {
  constructor() {
    super();
    this.state = { pageNumber: 0 };
  }

  componentDidMount() {
    document.body.style.overflowY = "auto";
  }

  componentWillUnmount() {
    document.body.style.overflowY = "hidden";
  }
  // handle the onclick event on the down button
  onPageDown = () => {
    if (this.state.pageNumber < 1) {
      this.setState(
        {
          pageNumber: this.state.pageNumber + 1
        },
        () => {
          // animate the pages by one page down
          document.querySelector(".pages").style.top = `${-this.state
            .pageNumber * 100}vh`;
        }
      );
    }
  };

  // handle the onclick event on the up button
  onPageUp = () => {
    if (this.state.pageNumber > 0) {
      this.setState(
        {
          pageNumber: this.state.pageNumber - 1
        },
        () => {
          // animate the pages by one page up
          document.querySelector(".pages").style.top = `${-this.state
            .pageNumber * 100}vh`;
        }
      );
    }
  };

  render() {
    return (
      <div className="about fadeInFast">
        <header>
          <div className="header">
            <h1 className="header-text">
              {/* About <i className="fas fa-binoculars" /> */}
            </h1>
            <img src="/imgs/about1.jpg" className="header-img" alt="" />
          </div>
        </header>

        <main className="container">
          <div id="intro" data-aos="slide-up">
            <p className="p-theme-1">
              <b> The Refugee Investment Network (RIN)</b> is the first blended
              finance investment collaborative dedicated to creating long-term
              solutions to global forced migration. The RIN moves private
              capital from commitment to active investment by sourcing,
              structuring, and supporting the financing of projects and
              companies that benefit refugees and host communities. Ultimately,
              the RIN aims to bridge the gap between the untapped
              entrepreneurial potential of refugees and capital markets to spur
              economic growth, create jobs, and increase socio-economic
              stability among displaced people.
            </p>
          </div>

          <section id="strategy">
            <img
              src="/imgs/banners/2348401144_7e265721b8_o.jpg"
              className="banner-img"
              alt=""
            />
            <h2 className="heading-theme-2">
              <i class="fas fa-street-view" />
              The RIN strategy has three pillars:
            </h2>
            <p className="p-theme-1">
              <b>
                <i className="fab fa-searchengin" />
                Research:
              </b>
              {"  "}
              Create the first investor-centered knowledge hub targeting
              business opportunities that support refugee self-reliance <br />
            </p>
            <p className="p-theme-1">
              <b>
                <i className="fab fa-leanpub" />
                Facilitation:
              </b>
              {"  "}
              Build a pipeline of bankable deals that will speed and scale
              private investment in communities of displaced people <br />
            </p>
            <p className="p-theme-1">
              <b>
                <i className="fas fa-gavel" />
                Policy and Advocacy:
              </b>
              {"  "}
              Articulate and bridge investor needs to funders, governments, and
              the development community to drive catalytic investments and
              policies <br />
            </p>
            <img
              src="/imgs/Banners/8722766967_c125f17c97_o.jpg"
              alt=""
              className="banner-img"
            />
            <p className="p-theme-1">
              <b>
                <i className="far fa-calendar" /> By 2030,
              </b>{" "}
              the RIN aims to unlock at least $1 billion in investment deals
              that produce over one million new jobs and measurably improve the
              livelihood opportunities for refugees and their host communities.
            </p>
          </section>

          <section id="how-it-works">
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
                Driving economic prosperity through improved investor networks
                and increased capital investments. Drawing on deep domain
                expertise on impact investing, development finance, and
                migration issues, and enabled through the thoughtful application
                of data science, the RIN provides its members with three core
                offerings:
              </p>

              <p className="p-theme-1">
                <b>
                  <i className="fab fa-searchengin" />
                  Research{" "}
                </b>{" "}
                RIN creates the investment and impact proof points that serve as
                the foundation of a vibrant refugee investment market. RIN
                members benefit from:
              </p>

              <ul>
                <li>
                  <b> Market intelligence:</b> The first knowledge hub
                  containing investor-centric research on the current business,
                  investment, and regulatory context of emerging and frontier
                  markets that host large numbers of refugees or forced migrant
                  populations
                </li>
                <li>
                  <b>Expert insights:</b> Guidance on where and how to
                  incorporate displaced communities into investment strategies,
                  with a focus on understanding local realities, opportunities,
                  and how to effectively partner with governments and
                  international financial institutions
                </li>
                <li>
                  <b>Deal scorecards: </b>
                  Access to independent and unbiased evaluations of the impact
                  of investments on displaced and host communities designed in
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
                RIN helps investors put their capital to work supporting
                displaced people and the communities hosting them. This support
                includes:
              </p>

              <ul>
                <li>
                  <b>Deal flow:</b> A geographically diversified portfolio of
                  high-quality investment opportunities including deals that:
                  (a) hire and source from refugees and forced-migrant
                  populations; (b) provide goods and services to refugees and
                  host communities; (c) expand the number and quality of
                  refugee-owned micro-, small-, and medium-sized enterprises;
                  (d) strengthen social enterprises that meet refugee and host
                  community needs; or (e) utilize development impact bonds
                </li>
                <li>
                  <b>Co-investment facilitation:</b> Access to co-investment or
                  partners to move deals up the funding ladder and fill specific
                  investment gaps, particularly in blended finance and impact
                  investment deals
                </li>
                <li>
                  <b>Structuring assistance:</b> Navigation and design of
                  de-risking instruments, guarantees, or other innovative
                  financial instruments often necessary in markets hosting
                  refugees
                </li>
              </ul>
            </div>
            <div className="key-strategy">
              <p className="p-theme-1">
                <b>
                  <i className="fas fa-gavel" />
                  Policy and Advocacy:
                </b>{" "}
                RIN bridges the gap between private investors, international
                donors, governments, and NGOs in the broader global development
                community. These efforts focus on:
              </p>

              <ul>
                <li>
                  <b> Access and voice:</b> Streamlined access between private
                  investors, development finance institutions, and aid agencies
                  to convey investor needs and market barriers that need to be
                  mitigated to enhance capital entry and deal flow
                </li>
                <li>
                  <b>National policy:</b> Strategic influence to reshape
                  national policies in target countries so they are more
                  supportive to investment and economic opportunities for
                  refugees
                </li>
                <li>
                  <b>Changing the narrative:</b> telling powerful stories of how
                  refugees are investable and are significant contributors to
                  local economies
                </li>
              </ul>
            </div>
          </section>

          <section id="why-refugees">
            <img
              src="/imgs/banners/8120063305_1b6cd86e1a_o.jpg"
              alt=""
              className="banner-img"
            />
            <h1 className="heading-theme-2">
              <i className="fab fa-accusoft" />
              Why Refugees
            </h1>
            <h3 className="heading-theme-3">
              Bridging the gap between the untapped potential of refugees and
              the capital markets.
            </h3>

            <p className="p-theme-1">
              Today, nearly 70 million people have been forcibly displaced
              worldwide – 22 million of whom are refugees – the highest number
              in human history. Modern refugee crises are characterized by
              irregular, forced migration that is compounded by political and
              economic challenges like rising nationalism and slowdowns in job
              creation. Unfortunately, existing systems for short-term emergency
              response and productive integration have not kept up with these
              evolving trends and are both under-resourced and broken.
            </p>
            <p className="p-theme-1">
              The resulting dilemma represents the defining social crisis of our
              time and requires urgent, scalable, and economically sustainable
              solutions.
            </p>
            <p className="p-theme-1">
              While an increasing number of humanitarian efforts strive to
              create and expand economic growth for refugees in host countries,
              private investors and capital are often missing from the equation.
              Significant interest from across the capital continuum exists in
              the social and traditional investment community, but the
              investment landscape in forced migration settings remains highly
              fragmented: Bankable deals are few and far between.
            </p>
            <p className="p-theme-1">
              We see both an enormous need and opportunity to increase deal flow
              by working with groups from all sides – investors, governments,
              donors, host and refugee populations – to improve our
              understanding of how to navigate the investment climate and
              mitigate associated risks to capital and the targeted populations.
              We believe the best way to do this is by building a robust and
              enabled network of impact investors and other stakeholders who,
              working together, can unlock private capital that spurs growth,
              creates jobs, and leads to social and economic prosperity.
            </p>
          </section>
          <section id="who-we-are">
            <h1 className="heading-theme-2">
              <i className="fas fa-users" />
              Who We Are
            </h1>
            <h3 className="heading-theme-4 color-5">
              A commitment to courageous action, innovative economic solutions,
              and deep collaboration.
            </h3>
            <div className="grid-2">
              <div>
                <h1 className="heading-theme-4">
                  <i className="fas fa-users-cog" />
                  Operating Team
                </h1>
                <p className="p-theme-1">
                  RIN Members represent the full capital continuum: foundations
                  and philanthropists, impact, institutional, and commercial
                  investors--as well as international finance institutions,
                  policymakers, and humanitarians. RIN members all share a
                  commitment to courageous action, innovative economic
                  solutions, and deep collaboration.
                </p>
              </div>
              <div>
                <h1 className="heading-theme-4">
                  <i className="fas fa-user-friends" />
                  Key Partners
                </h1>
                <p className="p-theme-1">
                  Systems entrepreneurs John Kluge (Alight Fund & Toilet
                  Hackers) and Tim Docking (IBM & Millennium Challenge
                  Corporation) lead the RIN with support from the Global
                  Development Incubator (GDI), a non-profit that builds startups
                  and partnerships to address global development challenges.
                  GDI’s Founder and Executive Director Andrew Stern leads the
                  organization’s strategic and operational support for the RIN.
                </p>
              </div>
            </div>
          </section>
          <section id="team">
            <h1 className="heading-theme-2 capitalize">
              <i className="fas fa-users" />
              meet the team
            </h1>
            <TeamComponent info={teamInfo} />
          </section>
          <section id="steering">
            <TeamComponent info={steeringInfo} />
          </section>
        </main>
      </div>
    );
  }
}
