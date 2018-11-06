import React from "react";
import "./Strategy.css";

export default props => {
  setTimeout(() => {
    document.body.scrollTo(0, window.innerHeight);
  }, 200);
  return (
    <div className="strategy">
      <img
        src="/imgs/banners/lidya-nada-638295-unsplash.jpg"
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
        Create the first investor-centered knowledge hub targeting business
        opportunities that support refugee self-reliance <br />
      </p>
      <p className="p-theme-1">
        <b>
          <i className="fab fa-leanpub" />
          Facilitation:
        </b>
        {"  "}
        Build a pipeline of bankable deals that will speed and scale private
        investment in communities of displaced people <br />
      </p>
      <p className="p-theme-1">
        <b>
          <i className="fas fa-gavel" />
          Policy and Advocacy:
        </b>
        {"  "}
        Articulate and bridge investor needs to funders, governments, and the
        development community to drive catalytic investments and policies <br />
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
        the RIN aims to unlock at least $1 billion in investment deals that
        produce over one million new jobs and measurably improve the livelihood
        opportunities for refugees and their host communities.
      </p>
    </div>
  );
};
