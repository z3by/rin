import React from "react";
import "./Dot.css";
import Typography from "@material-ui/core/Typography";
import { Avatar } from "@material-ui/core";
import refugeeInvestmentTypes from "../../../config/refugeeInvestmentTypes";

const Dot = props => {
  const colors = {
    housing: "#E83338",
    education: "#ff9068",
    agriculture: "#FFB75E",
    health: "#8DC26F",
    water: "#64b3f4",
    nutrition: "#6441A5",
    infancy: "#fc67fa"
  };

  let sector = props.location.sector;
  let color = colors[sector];
  let refugeeInvestmentType = {};
  refugeeInvestmentTypes.forEach(rft => {
    if (rft.name === props.project.refugeeInvestmentType) {
      refugeeInvestmentType = rft;
    }
  });

  return (
    <div
      className="dot"
      style={{ background: color }}
      onMouseEnter={() => {
        props.onHover(props.location.ProjectId);
      }}
    >
      {/* basic info */}
      <div className="project-info">
        <div className="project-info-popup">
          <div className="flex-centerd">
            <Avatar src={props.project.logo} />
            <Typography
              variant="subtitle1"
              className="color-1 capitalize"
              style={{ marginLeft: 10 }}
            >
              {props.project.organization}
            </Typography>
            <Typography
              style={{ marginLeft: 20 }}
              variant="subtitle2"
              className="color-3 capitalize"
            >
              {props.project.sector}
            </Typography>
          </div>
          <div
            style={{
              margin: "10px 0",
              backgroundImage: "url(" + props.project.img + ")",
              backgroundSize: "cover",
              height: 100,
              width: "100%"
            }}
          />

          <Typography
            variant="h6"
            style={{ marginTop: 20 }}
            className="color-2 capitalize text-center"
          >
            {props.project.name}
          </Typography>

          <Typography
            variant="h6"
            style={{ marginTop: 20 }}
            className="color-2 capitalize"
          >
            countries:
          </Typography>
          <Typography
            variant="h6"
            style={{ marginTop: 20 }}
            className="color-2 capitalize"
          >
            {props.project.Countries.map(country => {
              return (
                <Typography variant="body1" className="color-2 capitalize">
                  - {country.name} -
                </Typography>
              );
            })}
          </Typography>
          <Typography
            variant="h6"
            style={{ marginTop: 20 }}
            className="color-2 capitalize"
          >
            Refugee Investment size
          </Typography>
          <div className="flex-centerd">
            <Typography
              variant="subtitle1"
              className="color-3 capitalize"
              style={{ margin: "0 20px" }}
            >
              {props.project.investmentSize} $
            </Typography>
          </div>
          <Typography
            variant="h6"
            style={{ marginTop: 20 }}
            className="color-2 capitalize"
          >
            Refugee Investment Type
          </Typography>
          <div className="flex-centerd">
            <Avatar
              src={refugeeInvestmentType.img}
              style={{ margin: "0 10px" }}
            />
            <Typography
              variant="subtitle1"
              className="color-3 capitalize"
              style={{ margin: "0 20px" }}
            >
              {refugeeInvestmentType.name}
            </Typography>
          </div>
          <Typography
            variant="h6"
            style={{ marginTop: 20 }}
            className="color-2 capitalize"
          >
            Sustainable Ddevelopment Goals
          </Typography>

          <div
            className=""
            style={{ display: "inline-flex", margin: "10px 0" }}
          >
            {props.project.Sdgs.map(sdg => {
              return <Avatar src={sdg.logo} style={{ margin: "0 10px" }} />;
            })}
          </div>
        </div>

        {/* contact info */}
        <div className="project-info-popup">
          <Typography
            variant="h6"
            style={{ marginTop: 20 }}
            className="color-1 capitalize"
          >
            {/* {props.project.contact.webiste} */}
          </Typography>
        </div>
        {/* full info */}
        <div className="project-info-popup">
          <Typography
            variant="h6"
            style={{ marginTop: 20 }}
            className="color-2 capitalize"
          >
            Thesis
          </Typography>
          <Typography variant="body1" className="color-1">
            {props.project.thesis}
          </Typography>
          <Typography
            variant="h6"
            style={{ marginTop: 20 }}
            className="color-2 capitalize"
          >
            Structure
          </Typography>
          <Typography variant="body1" className="color-1">
            {props.project.structure}
          </Typography>
          <Typography
            variant="h6"
            style={{ marginTop: 20 }}
            className="color-2 capitalize"
          >
            Impact
          </Typography>
          <Typography variant="body1" className="color-1">
            {props.project.impact}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Dot;
