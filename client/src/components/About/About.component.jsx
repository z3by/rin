import React, { Component } from "react";
import "./About.css";

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
            <h1 className="header-text">About</h1>
            <img src="/imgs/about1.jpg" className="header-img" alt="" />
          </div>
        </header>

        <main className="container">
          <div id="intro">
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
              The RIN strategy has three pillars:
            </h2>
            <p className="p-theme-1">
              <b>Research:</b> Create the first investor-centered knowledge hub
              targeting business opportunities that support refugee
              self-reliance <br />
              <b>Facilitation:</b> Build a pipeline of bankable deals that will
              speed and scale private investment in communities of displaced
              people <br />
              <b>Policy and Advocacy:</b> Articulate and bridge investor needs
              to funders, governments, and the development community to drive
              catalytic investments and policies <br />
            </p>
            <img
              src="/imgs/Banners/8722766967_c125f17c97_o.jpg"
              alt=""
              className="banner-img"
            />
            <p className="p-theme-1">
              <b> By 2030,</b> the RIN aims to unlock at least $1 billion in
              investment deals that produce over one million new jobs and
              measurably improve the livelihood opportunities for refugees and
              their host communities.
            </p>
          </section>

          <section id="how-it-works">
            <div className="key-strategy">
              <img
                src="/imgs/banners/5320649067_67a0728f12_o.jpg"
                alt=""
                className="banner-img"
              />
              <h1 className="heading-theme-2">How it works</h1>
              <p className="p-theme-1">
                Driving economic prosperity through improved investor networks
                and increased capital investments. Drawing on deep domain
                expertise on impact investing, development finance, and
                migration issues, and enabled through the thoughtful application
                of data science, the RIN provides its members with three core
                offerings:
              </p>

              <p className="p-theme-1">
                <b>Research </b> RIN creates the investment and impact proof
                points that serve as the foundation of a vibrant refugee
                investment market. RIN members benefit from:
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
                <b>Facilitation: </b>
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
                <b> Policy and Advocacy:</b> RIN bridges the gap between private
                investors, international donors, governments, and NGOs in the
                broader global development community. These efforts focus on:
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
            <h1 className="heading-theme-2">Why Refugees</h1>
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
            <h1 className="heading-theme-2">Who We Are</h1>
            <h3 className="heading-theme-3">
              A commitment to courageous action, innovative economic solutions,
              and deep collaboration.
            </h3>
            <div className="grid-2">
              <div>
                <h1 className="heading-theme-4">Operating Team</h1>
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
                <h1 className="heading-theme-4">Key Partners</h1>
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
          <section className="team">
            <h1 className="heading-theme-2">meet the team</h1>
            <div className="team-members">
              <div className="team-member">
                <img
                  src="/imgs/team/JohnKlugeRIN.jpg"
                  alt="Jane"
                  style={{ width: "100%" }}
                />
                <h2 className="heading-theme-2">JOHN W. KLUGE</h2>
                <h3 className="heading-theme-3">Founder + Managing Director</h3>
                <p className="p-theme-1">
                  John W. Kluge is a systems entrepreneur and committed social
                  justice activist. He is the Co-Founder and Managing Partner of
                  the Alight Fund, an investment and financing company for
                  refugee and host country entrepreneurs. Previously, he
                  co-founded Eirene, a multi-family-office impact investing
                  fund, Toilet Hackers, a social enterprise dedicated to scaling
                  access to dignified sanitation for the 2.5 billion people
                  without a toilet. Kluge currently serves as a Trustee of
                  Babson College, as a member of the Center for Strategic
                  International Studies' Taskforce on Global Forced Migration,
                  as a Director of the Fonderie 47 Foundation, as the Co-Chair
                  of the Virginia Policy Entrepreneurship Lab, and as a member
                  of the Human Rights Commission of Charlottesville. He is the
                  co-author of the book, Charity & Philanthropy for Dummies
                  (Wylie, 2013), the author of John Kluge: Stories (Columbia
                  University Press, 2008) and has written about the intersection
                  of business and social impact for Forbes and Conscious Company
                  Magazine. Kluge holds a B.A. from Columbia University and an
                  MBA from the Babson F.W. Olin Graduate School of Business.
                </p>
              </div>

              <div className="team-member">
                <img
                  src="/imgs/team/Tim+Docking+RIN.jpeg"
                  alt="Mike"
                  style={{ width: "100%" }}
                />
                <h2 className="heading-theme-2">TIMOTHY W. DOCKING, Ph.D</h2>
                <h3 className="heading-theme-3">Managing Director</h3>
                <p className="p-theme-1">
                  Timothy W. Docking, Ph.D. is a Washington, D.C.-based business
                  executive with twenty years of emerging market and public
                  sector experience. As an intrapreneur, he worked at the
                  intersection of business, technology and development and built
                  a new $100M revenue stream at IBM; as a public sector
                  executive and manager, he helped start up the MCC (U.S.
                  government agency); and as a scholar, he directed Africa
                  research at a D.C. think tank. Docking has testified before
                  Congress, published and commented widely in the media, is a
                  member of multiple national and international boards including
                  the current co-Chair of the Private Sector Advisory Council at
                  the Millennium Challenge Corporation, and has helped form and
                  implement policy at highest levels of government as a White
                  House Fellow. Docking holds a Ph.D. in comparative politics
                  from Boston University and has lived and worked in more than
                  40 countries.
                </p>
              </div>
              <div className="team-member">
                <img
                  src="/imgs/team/Andrew+headshot.jpg"
                  alt="John"
                  style={{ width: "100%" }}
                />
                <h2 className="heading-theme-2">ANDREW STERN</h2>
                <h3 className="heading-theme-3">Strategic Advisor</h3>
                <p className="p-theme-1">
                  Andrew Stern is the Founder, President and Executive Director
                  of the Global Development Incubator (GDI) and a member of the
                  GDI U.S. and Hong Kong boards. He leads the team across focus
                  areas and crafts unconventional perspectives to drive the
                  global development sector forward. Stern has played many roles
                  within GDI initiatives, including Interim CEO of Convergence,
                  the global network for Blended Finance, and serves on the
                  governance or advisory boards of Emerging Public Leaders,
                  citiesRise and Tendrel. Prior to founding GDI, Stern was a
                  Global Operating Partner at Dalberg Global Advisors. During
                  that time, he helped design and launch the Aspen Network of
                  Entrepreneurs (ANDE) and served as the founding chairman of
                  mothers2mothers. Stern holds a joint MBA/MPP from Harvard
                  Business School and Harvard Kennedy School and a BA in
                  Economics from Princeton University.
                </p>
              </div>

              <div className="team-member">
                <img
                  src="/imgs/team/Sara+Beatty+headshot.jpg"
                  alt="John"
                  style={{ width: "100%" }}
                />
                <h2 className="heading-theme-2">SARA BEATTY</h2>
                <h3 className="heading-theme-3">Communications Manager</h3>
                <p className="p-theme-1">
                  Sara is the Communications Manager at GDI. She guides
                  communications efforts across all focus areas, advances GDI
                  thought leadership in external media, and oversees the
                  branding process for new initiatives. Before joining GDI, Sara
                  was part of the communications team at Dalberg Global
                  Development Advisors and supported communications +
                  fundraising at AppleTree Institute for Education Innovation.
                  She has also worked at an array of journalism outlets
                  including Media Matters for America, Philadelphia Magazine,
                  and the Olive Press in Andalucía, Spain. Sara holds a BA in
                  Sociology from Princeton University.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}
