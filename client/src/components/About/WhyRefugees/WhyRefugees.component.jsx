import React from "react";
import "./WhyRefugees.css";
import { Typography, div } from "@material-ui/core";

export default props => {
  return (
    <div className="">
      <Typography variant="h4" className="upper color-4 text-center">
        <i className="fab fa-accusoft start-icon color-2" />
        Why Refugees
      </Typography>
      <Typography variant="h6" className="color-3 text-center">
        Bridging the gap between the untapped potential of refugees and the
        capital markets.
      </Typography>
      <div className="margin-20 padding-20">
        <img
          src="/imgs/banners/8120063305_1b6cd86e1a_o.jpg"
          alt=""
          className="banner-img"
        />
        <Typography varian className="body-paragraph"t="body1">
          Today, nearly 70 million people have been forcibly displaced worldwide
          – 22 million of whom are refugees – the highest number in human
          history. Modern refugee crises are characterized by irregular, forced
          migration that is compounded by political and economic challenges like
          rising nationalism and slowdowns in job creation. Unfortunately,
          existing systems for short-term emergency response and productive
          integration have not kept up with these evolving trends and are both
          under-resourced and broken.
        </Typography>
      </div>
      <div className="margin-20 padding-20">
        <img
          src="/imgs/banners/15235731346_17138ddcae_o.jpg"
          alt=""
          className="banner-img"
        />
        <Typography varian className="body-paragraph"t="body1">
          The resulting dilemma represents the defining social crisis of our
          time and requires urgent, scalable, and economically sustainable
          solutions. While an increasing number of humanitarian efforts strive
          to create and expand economic growth for refugees in host countries,
          private investors and capital are often missing from the equation.
          Significant interest from across the capital continuum exists in the
          social and traditional investment community, but the investment
          landscape in forced migration settings remains highly fragmented:
          Bankable deals are few and far between.
        </Typography>
      </div>
      <div className="margin-20 padding-20">
        <img
          src="/imgs/banners/41266974685_502f1a640a_o.jpg"
          alt=""
          className="banner-img"
        />
        <Typography variant="body1" className="body-paragraph">
          We see both an enormous need and opportunity to increase deal flow by
          working with groups from all sides – investors, governments, donors,
          host and refugee populations – to improve our understanding of how to
          navigate the investment climate and mitigate associated risks to
          capital and the targeted populations. We believe the best way to do
          this is by building a robust and enabled network of impact investors
          and other stakeholders who, working together, can unlock private
          capital that spurs growth, creates jobs, and leads to social and
          economic prosperity.
        </Typography>
      </div>
      <p className="p-theme-1" />
    </div>
  );
};
