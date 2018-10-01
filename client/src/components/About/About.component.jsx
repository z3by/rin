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
            <h1 className="header-text">
              About <i className="fas fa-binoculars" />
            </h1>
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
          <section id="steering">
            <div className="grid-2">
              <div className="team-member">
                <img
                  src="/imgs/steering/carolyn-campbell-1-neiuert1jrmq7ofyth17p8zhssyo3i1smcd3mj8pmg.png"
                  alt="John"
                  style={{ width: "100%" }}
                />
                <h2 className="heading-theme-2">CAROLYN CAMPBELL</h2>
                <h3 className="heading-theme-3">Managing Director, ECP </h3>
                <p className="p-theme-1">
                  Carolyn Campbell is a Managing Director and Founding Partner
                  of Emerging Capital Partners (ECP), where she provides
                  management oversight of the firm’s operations and investments.
                  Carolyn is also a member of ECP’s Executive Committee and of
                  the Funds’ investment committees. Prior to joining ECP in
                  2000, Ms. Campbell was a Senior Associate at White & Case LLP
                  in the firm’s Warsaw, London, and Washington, DC offices. She
                  was also an Associate Professor at George Washington
                  University National Law Center, lecturing on international
                  negotiations. Dr. Campbell holds a JD from the University of
                  Virginia School of Law and a Ph.D. in Politics from Oxford
                  University.
                </p>
              </div>

              <div className="team-member">
                <img
                  src="/imgs/steering/Lara+Driscoe.png"
                  alt="John"
                  style={{ width: "100%" }}
                />
                <h2 className="heading-theme-2">LARA DRISCOE</h2>
                <h3 className="heading-theme-3">Managing Director, OPIC</h3>
                <p className="p-theme-1">
                  Lara Driscoe serves as Managing Director in the Office of
                  External Affairs at the Overseas Private Investment
                  Corporation, the U.S. Government’s Development Finance
                  Institution. In this role, Lara is responsible for identifying
                  emerging market investment opportunities, developing public
                  and private sector partnerships and catalyzing private capital
                  through innovative financial products to achieve development
                  goals. Prior to OPIC, Lara was the Senior Director, Government
                  Relations at the Managed Funds Association, an association
                  representing the alternative investment industry. Lara
                  received her J.D. from the Catholic University of America in
                  Washington D.C. and B.A. from the University of Maryland.
                </p>
              </div>

              <div className="team-member">
                <img
                  src="/imgs/steering/Humaira.png"
                  alt="John"
                  style={{ width: "100%" }}
                />
                <h2 className="heading-theme-2">HUMAIRA FAIZ</h2>
                <h3 className="heading-theme-3">
                  VP Global Sustainable Finance, Morgan Stanley
                </h3>
                <p className="p-theme-1">
                  Humaira Faiz is a member of the Global Sustainable Finance
                  team at Morgan Stanley where she works to bring sustainable
                  investing products and solutions across the firm, and in
                  particular for the Investing with Impact platform in the
                  wealth management channel. Before Morgan Stanley, Humaira was
                  at Arabella Advisors advising foundations, family offices, and
                  individuals to develop and deploy customized impact investing
                  strategies. She started her career at Bank of America Merrill
                  Lynch alternative investments platform, where she originated
                  hedge fund and private equity funds. Humaira holds an MBA from
                  NYU Stern and an undergraduate degree from Rutgers University.
                </p>
              </div>

              <div className="team-member">
                <img
                  src="/imgs/steering/CD.png"
                  alt="John"
                  style={{ width: "100%" }}
                />
                <h2 className="heading-theme-2">President and CEO</h2>
                <h3 className="heading-theme-3">
                  U.S. African Development Foundation C.D.{" "}
                </h3>
                <p className="p-theme-1">
                  Glin is the President and CEO of the U.S. African Development
                  Foundation (USADF) since September 2016. From 2011-2016 Glin
                  was based in Nairobi, Kenya as the Associate Director for
                  Africa for the Rockefeller Foundation. Prior to Rockefeller,
                  Glin served as a White House appointee at the U.S. Peace Corps
                  as the first Director of Intergovernmental Affairs and Global
                  Partnerships, and was Vice President for Business Development
                  at PYXERA Global. He is a life member of the Council on
                  Foreign Relations and in 2011, was designated by the White
                  House as a “Champion of Change” for his commitment and
                  contributions to international service and civic
                  participation.
                </p>
              </div>

              <div className="team-member">
                <img
                  src="/imgs/steering/Rahul.png"
                  alt="John"
                  style={{ width: "100%" }}
                />
                <h2 className="heading-theme-2">RAHUL KESHAP</h2>
                <h3 className="heading-theme-3">
                  Head of Investments Foundations Program, CFA Institute
                </h3>
                <p className="p-theme-1">
                  Rahul Keshap is Head of the Investment Foundations Program at
                  CFA Institute, where he is helping deliver investment industry
                  literacy. He joined CFA in 2002 as an Associate General
                  Counsel and later spent more than two years based in Hong Kong
                  as Director of Asia Pacific Strategy & Operations. Prior to
                  his tenure at CFA, Mr. Keshap worked as an attorney at a
                  business law firm in Virginia and a communications law firm in
                  Washington, DC. He earned a Bachelor of Arts in Philosophy and
                  Government as an Echols Scholar at the University of Virginia,
                  and he also received a Juris Doctor from the University of
                  Virginia.
                </p>
              </div>

              <div className="team-member">
                <img
                  src="/imgs/steering/Michael+levett.png"
                  alt="John"
                  style={{ width: "100%" }}
                />
                <h2 className="heading-theme-2">MICHAEL LEVETT</h2>
                <h3 className="heading-theme-3">Senior Associate, CSIS</h3>
                <p className="p-theme-1">
                  Michael Levett is an expert on international economic
                  development and an experienced deal maker of public-private
                  partnerships that promote local economic opportunity and
                  economic growth while strengthening the building blocks of
                  private sector development. He supports multinational
                  corporations’ strategies in emerging markets by implementing
                  programs and practices that increase local companies’ capacity
                  to compete for and capture supply chain contracts, creating
                  new national and family wealth, spreading prosperity, and
                  increasing nation’s ability to participate in the global
                  economy.
                </p>
              </div>

              <div className="team-member">
                <img
                  src="/imgs/steering/Christine+Mahoney.png"
                  alt="John"
                  style={{ width: "100%" }}
                />
                <h2 className="heading-theme-2">DR. CHRISTINE MAHONEY</h2>
                <h3 className="heading-theme-3">
                  Professor of Politics & Public Policy and Director of Social
                  Entrepreneurship, University of Virginia
                </h3>
                <p className="p-theme-1">
                  Christine Mahoney is a Professor of Politics & Public Policy
                  and Director of Social Entrepreneurship at the University of
                  Virginia. Her landmark book Failure and Hope: Fighting for the
                  Rights of the Forcibly Displaced, which examines the failures
                  of global advocacy on behalf of the displaced and calls for a
                  new, investment-based approach to forced migration solutions,
                  inspired the design of the RIN. She has been a Fulbright
                  Fellow, Visiting Scholar at Oxford, a National Science
                  Foundation grant recipient, and recipient of the Emerging
                  Scholar award from the American Political Science Association.
                  Christine holds a B.A. in International Relations, an M.A. in
                  Comparative Politics, and a Ph.D. in Political Science from
                  Pennsylvania State University.
                </p>
              </div>

              <div className="team-member">
                <img
                  src="/imgs/steering/Gideon.png"
                  alt="John"
                  style={{ width: "100%" }}
                />
                <h2 className="heading-theme-2">GIDEON MALTZ</h2>
                <h3 className="heading-theme-3">
                  Executive Director, Tent Foundation
                </h3>
                <p className="p-theme-1">
                  Gideon Maltz is the Executive Director of the Tent Foundation.
                  He previously served as Deputy Chief of Staff to Ambassador
                  Samantha Power at the U.S. Mission to the United Nations, and
                  Director of Human Rights and Multilateral Affairs on the
                  National Security Council. Prior to government service, Gideon
                  worked as an attorney in the International Trade practice of
                  Hogan Lovells and a consultant at McKinsey & Company. He has
                  also served as a Junior Fellow at the Carnegie Endowment for
                  International Peace and a Pre-Doctoral Fellow at Stanford’s
                  Center for Democracy, Development, and the Rule of Law.
                </p>
              </div>

              <div className="team-member">
                <img
                  src="/imgs/steering/Michell+McMahon.png"
                  alt="John"
                  style={{ width: "100%" }}
                />
                <h2 className="heading-theme-2">MICHELLE MCMAHON </h2>
                <h3 className="heading-theme-3">
                  Legal Counsel, Innovest Advisory
                </h3>
                <p className="p-theme-1">
                  Michelle McMahon is a US lawyer with 25 years of legal and
                  corporate finance experience. She was Senior Partner of a US
                  law firm, specializing in financial transactions, and Chief
                  Executive of the Jersey, UK subsidiary of a global financial
                  services firm for capital markets clients. Michelle has served
                  as an advisor and fiduciary of non-profits and social finance
                  initiatives, primarily focused on education and children. In
                  2016 Michelle joined Innovest Advisory to draw on her
                  experience to facilitate the strategic deployment of
                  philanthropic and social investment capital to achieve social
                  change.
                </p>
              </div>

              <div className="team-member">
                <img
                  src="/imgs/steering/Montgomery.png"
                  alt="John"
                  style={{ width: "100%" }}
                />
                <h2 className="heading-theme-2">KATE MONTGOMERY </h2>
                <h3 className="heading-theme-3">
                  Associate Director Strategic Partnerships, Acumen
                </h3>
                <p className="p-theme-1">
                  Kate Montgomery is Associate Director, Strategic Partnerships
                  at Acumen. She leads business development and partner
                  engagement for the Pioneer Energy Investment Initiative and
                  Africa. Prior to joining Acumen, she was d.light’s Director of
                  Global Partnerships for five years, developing d.light’s
                  strategy for engaging with the public sector and other key
                  partners globally. A key part of her work at d.light was to
                  institutionalize strategy and to measure and communicate
                  social impact across the enterprise. She holds a BA with
                  honors in Political Science and East Asian Studies from
                  Colgate University and a MS in Conflict Studies from the
                  London School of Economics and Political Science.
                </p>
              </div>

              <div className="team-member">
                <img
                  src="/imgs/steering/Ciyota.png"
                  alt="John"
                  style={{ width: "100%" }}
                />
                <h2 className="heading-theme-2">JOSEPH MUNYAMBANZA </h2>
                <h3 className="heading-theme-3">Executive Director, CIYOTA</h3>
                <p className="p-theme-1">
                  Displaced from his home in the DRC at the age of six, Joseph
                  grew up in the Kyangwali Refugee Camp in Uganda. At the age of
                  14, Joseph founded COBURWAS International Youth Organization
                  to Transform Africa (CIYOTA) an NGO empowering young leaders
                  through education, and which he continues to lead. Based on
                  these early accomplishments, Joseph was selected to attend the
                  African Leadership Academy, a pan-African leadership school
                  based in Johannesburg, where he graduated. He also holds a
                  degree in biochemistry from Westminster College (2015) in the
                  U.S., where he received the school’s highest honor, the
                  Outstanding Senior Award.
                </p>
              </div>

              <div className="team-member">
                <img
                  src="/imgs/steering/sandy_osborne_125_125_c1_c_c.jpg"
                  alt="John"
                  style={{ width: "100%" }}
                />
                <h2 className="heading-theme-2">SANDRA OSBORNE</h2>
                <h3 className="heading-theme-3">
                  Director of Investments, ImpactAssets
                </h3>
                <p className="p-theme-1">
                  Sandra Osborne is the Director of Investments at ImpactAssets.
                  She oversees investment management for the Giving Fund
                  including sourcing, due diligence and investment selection.
                  Prior to joining ImpactAssets, Sandra served as a Risk Officer
                  at Developing World Markets, an impact investment asset
                  manager focused on linking the capital markets and financial
                  institutions serving the bottom of the pyramid in emerging and
                  frontier economies. She also worked at Keefe Bruyette & Woods,
                  a boutique investment bank.
                </p>
              </div>

              <div className="team-member">
                <img
                  src="/imgs/steering/Lev2.JPG"
                  alt="John"
                  style={{ width: "100%" }}
                />
                <h2 className="heading-theme-2">LEV PLAVES </h2>
                <h3 className="heading-theme-3">
                  Senior Investment Manager for Refugees & Displaced
                  Populations, Kiva
                </h3>
                <p className="p-theme-1">
                  Lev Plaves is Kiva’s Senior Investment Manager for Refugees &
                  Displaced Populations, leading Kiva’s efforts to provide
                  economic opportunities to displaced populations around the
                  world. In 2017, Lev spearheaded the launch of the World
                  Refugee Fund, an innovative effort to utilize Kiva’s
                  crowdfunding platform to extend access to financial services
                  to forcibly displaced populations. Kiva, the world’s largest
                  crowdfunding platform for social good, has facilitated over $8
                  million in loans to refugees and IDPs in the Middle East,
                  Latin America, and Africa since 2016.
                </p>
              </div>

              <div className="team-member">
                <img
                  src="/imgs/steering/Amy+Slaughter+headshot.png"
                  alt="John"
                  style={{ width: "100%" }}
                />
                <h2 className="heading-theme-2">AMY SLAUGHTER </h2>
                <h3 className="heading-theme-3">
                  Chief Strategy Officer, RefugePoint
                </h3>
                <p className="p-theme-1">
                  Amy Slaughter is Chief Strategy Officer of RefugePoint – an
                  NGO with a dual mission of state- of-the-art direct services
                  and systems change in the refugee solutions sector. Since the
                  early 1990s, Amy has worked and consulted for a variety of
                  refugee NGOs as well as UNHCR and the International
                  Organization for Migration, working in refugee situations in
                  the Balkans, Africa, and the Middle East. With a Master’s
                  degree in human rights from Columbia University and a
                  Bachelor’s in English from the University of Florida, Amy is a
                  frequent panelist at refugee conferences and has published
                  several articles on refugee protection.
                </p>
              </div>

              <div className="team-member">
                <img
                  src="/imgs/steering/suma.png"
                  alt="John"
                  style={{ width: "100%" }}
                />
                <h2 className="heading-theme-2">SUMA SWAMINATHAN </h2>
                <h3 className="heading-theme-3">
                  Associate, Developing World Markets
                </h3>
                <p className="p-theme-1">
                  Suma Swaminathan joined the DWM private equity team in 2017.
                  Suma previously worked at Empire Valuation Consultants, a
                  boutique consulting firm in New York City. Suma started her
                  career in data analysis at Infosys Ltd where she worked with
                  clients like Capital One Auto Finance on loss forecasting and
                  data governance. She also has experience working with partner
                  weaver cooperative societies in the handloom industry in India
                  to promote strategies for financial self- sufficiency.
                </p>
              </div>

              <div className="team-member">
                <img
                  src="/imgs/steering/Justin+Sykes.jpeg"
                  alt="John"
                  style={{ width: "100%" }}
                />
                <h2 className="heading-theme-2">JUSTIN SYKES</h2>
                <h3 className="heading-theme-3">
                  CEO & Founder, Innovest Advisory
                </h3>
                <p className="p-theme-1">
                  Justin is a social investment specialist with over 15 years of
                  experience in the structuring and implementation of innovative
                  and large-scale impact investments, which have positively
                  impacted hundreds of thousands of lives across a diverse range
                  countries in Africa and the Middle East. He serves as a board
                  member and adviser to several international charities, and
                  local grassroots financial institutions, that are engaged in
                  supporting the livelihoods of low-income communities.
                </p>
              </div>

              <div className="team-member">
                <img
                  src="/imgs/steering/Warren+Valdmanis-0014+-+preferred-+square.jpg"
                  alt="John"
                  style={{ width: "100%" }}
                />
                <h2 className="heading-theme-2">WARREN VALDMANIS </h2>
                <h3 className="heading-theme-3">
                  Managing Director, Bain Capital Double Impact
                </h3>
                <p className="p-theme-1">
                  Warren Valdmanis joined Bain Capital Double Impact in 2017
                  after working for the firm’s private equity business for over
                  11 years. During his tenure with Bain Capital Private Equity,
                  Mr. Valdmanis spent five years in Asia and Australia where he
                  helped to extend the Asia Fund’s capabilities and opened the
                  Bain Capital Sydney office. Prior to joining Bain Capital, Mr.
                  Valdmanis was a Manager at Bain & Company covering a wide
                  variety of industries across Bain Capital’s North American,
                  European and South African operations, with a particular focus
                  on private equity clients.
                </p>
              </div>

              <div className="team-member">
                <img
                  src="/imgs/steering/diana.png"
                  alt="John"
                  style={{ width: "100%" }}
                />
                <h2 className="heading-theme-2">DIANA WON</h2>
                <h3 className="heading-theme-3">
                  Program Manager, Pershing Square Foundation
                </h3>
                <p className="p-theme-1">
                  Diana Won is the Program Manager for the Pershing Square
                  Foundation, where she is responsible for program management,
                  grant administration and communications. Diana joined the
                  Foundation from Seoul, South Korea where she was a Henry Luce
                  Foundation Scholar at MYSC, a social impact consulting
                  company. At MYSC, she helped manage a program to train
                  entrepreneurs in Southeast Asia, lectured at universities on
                  Design Thinking, and helped adapt frameworks to measure social
                  impact.
                </p>
              </div>

              <div className="team-member">
                <img
                  src="/imgs/steering/david.jpeg"
                  alt="John"
                  style={{ width: "100%" }}
                />
                <h2 className="heading-theme-2">DAVID YOUNG</h2>
                <h3 className="heading-theme-3">
                  Senior Partner & Managing Director, BCG
                </h3>
                <p className="p-theme-1">
                  David Young works closely with the leaders of BCG’s Social
                  Impact Practice to help clients navigate opportunities and
                  challenges at the intersection of social impact, the firm’s
                  Public Sector Practice, and the private sector. He also
                  engages with BCG’s Grow Africa Team, tapping the vast
                  experience he gained in that region during his time at World
                  Vision and his exposure to Africa since 1976. At World Vision,
                  David served as COO, leading a comprehensive transformation
                  effort and overseeing the organization’s global field
                  operations, emergency response, technical support teams,
                  microfinance, and strategic support functions.
                </p>
              </div>

              <div className="team-member">
                <img
                  src="/imgs/steering/Zeiger.jpeg"
                  alt="John"
                  style={{ width: "100%" }}
                />
                <h2 className="heading-theme-2">MATTHEW ZIEGER </h2>
                <h3 className="heading-theme-3">
                  Senior Director Impact Investing, Catholic Charities
                </h3>
                <p className="p-theme-1">
                  Matt Zieger joined Catholic Charities USA in August of 2016 as
                  senior director of impact investing and social
                  entrepreneurship. As a past foundation president, senior state
                  policy official, early stage investor and small business
                  owner, Zieger worked for more than 15 years to use market
                  forces to drive positive social outcomes. Most recently, he
                  served as vice president of The Forbes Funds, a regional
                  philanthropy focused on social innovation and capacity
                  building.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}
