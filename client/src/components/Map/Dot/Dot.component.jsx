import React from "react";
import "./Dot.css";
import Typography from "@material-ui/core/Typography";
import { Avatar } from "@material-ui/core";

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

  return (
    <div
      className="dot"
      style={{ background: color }}
      onMouseEnter={() => {
        props.onHover(props.location.ProjectId, props.location);
      }}
      onMouseLeave={() => {
        props.onOutHover();
      }}
    >
      {/* basic info */}
      <div className="project-info">
        <div className="project-info-popup">
          <div className="flex-centerd">
            <Avatar src={props.project.logo} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="subtitle1"
                className="color-1 capitalize"
                style={{ marginLeft: 10 }}
              >
                {props.project.organization}
              </Typography>
              <Typography
                variant="body1"
                className="color-3 capitalize"
                style={{ marginLeft: 10 }}
              >
                {props.project.sector.name}
              </Typography>
            </div>
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
            variant="subtitle1"
            style={{ marginTop: 20 }}
            className="color-2 capitalize text-center"
          >
            {props.project.name}
          </Typography>

          <Typography
            variant="subtitle1"
            style={{ marginTop: 20 }}
            className="color-2 capitalize"
          >
            countries:
          </Typography>
          <Typography
            variant="subtitle1"
            style={{ marginTop: 20 }}
            className="color-2 capitalize"
          >
            {props.project.Countries.map((country, i) => {
              return (
                <Typography
                  key={i}
                  variant="body1"
                  className="color-2 capitalize"
                >
                  - {country.name} -{" "}
                  <img
                    src={country.flag}
                    style={{
                      height: 30,
                      width: 30,
                      marginLeft: 10,
                      borderRadius: 20
                    }}
                    alt=""
                  />
                </Typography>
              );
            })}
          </Typography>
          <Typography
            variant="subtitle1"
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
            variant="subtitle1"
            style={{ marginTop: 20 }}
            className="color-2 capitalize"
          >
            Refugee Investment Type
          </Typography>
          <div className="flex-centerd">
            <Avatar
              src={props.project.refugeeInvestmentType.img}
              style={{ margin: "0 10px" }}
            />
            <Typography
              variant="subtitle1"
              className="color-3 capitalize"
              style={{ margin: "0 20px" }}
            >
              {props.project.refugeeInvestmentType.name}
            </Typography>
          </div>
          <Typography
            variant="subtitle1"
            style={{ marginTop: 20 }}
            className="color-2 capitalize"
          >
            Sustainable Ddevelopment Goals
          </Typography>

          <div className="" style={{ display: "flex", margin: "10px 0" }}>
            {props.project.Sdgs.map((sdg, i) => {
              return (
                <Avatar src={sdg.logo} key={i} style={{ margin: "0 10px" }} />
              );
            })}
          </div>
        </div>

        {/* contact info */}
        <div className="project-info-popup">
          <a
            href={"tel:" + props.project.contact.phone1}
            className="contact-field"
          >
            <i className="fas fa-phone" />
            {props.project.contact.phone1}
          </a>
          <a
            href={"tel:" + props.project.contact.phone2}
            className="contact-field"
          >
            <i className="fas fa-mobile" />
            {props.project.contact.phone2}
          </a>
          <a
            href={"mailto:" + props.project.contact.email1}
            className="contact-field"
          >
            <i
              style={{ fontSize: "1.5rem" }}
              className="color-2 fas fa-envelope"
            />
            {props.project.contact.email1}
          </a>
          {!props.project.contact.email2 ? null : (
            <a
              href={"mailto:" + props.project.contact.email2}
              className="contact-field"
            >
              <i
                style={{ fontSize: "1.5rem" }}
                className="color-2 far fa-envelope"
              />
              {props.project.contact.email2}
            </a>
          )}

          <a
            target="_blank"
            href={props.project.contact.website}
            className="contact-field"
          >
            <i
              style={{ fontSize: "1.5rem" }}
              className="color-2 fas fa-globe"
            />
            visit the project website
          </a>
          {!props.project.contact.facebook ? null : (
            <a
              target="_blank"
              href={props.project.contact.facebook}
              className="contact-field"
            >
              <i
                style={{ fontSize: "1.5rem" }}
                className="color-2 fab fa-facebook"
              />
              facebook contact
            </a>
          )}
          {!props.project.contact.twitter ? null : (
            <a
              target="_blank"
              href={props.project.contact.twitter}
              className="contact-field"
            >
              <i
                style={{ fontSize: "1.5rem" }}
                className="color-2 fab fa-twitter"
              />
              twitter contact
            </a>
          )}
          {!props.project.contact.instagram ? null : (
            <a
              target="_blank"
              href={props.project.contact.instagram}
              className="contact-field"
            >
              <i
                style={{ fontSize: "1.5rem" }}
                className="color-2 fab fa-instagram"
              />
              instagram contact
            </a>
          )}
          {!props.project.contact.fax ? null : (
            <a
              target="_blank"
              href={props.project.contact.fax}
              className="contact-field"
            >
              <i
                style={{ fontSize: "1.5rem" }}
                className="color-2 fas fa-fax"
              />
              Fax: {props.project.contact.fax}
            </a>
          )}
          {!props.project.contact.address ? null : (
            <address className="contact-field">
              <i
                style={{ fontSize: "1.5rem" }}
                className="color-2 fas fa-address-card"
              />
              Address: {props.project.contact.address}
            </address>
          )}
        </div>
        {/* full info */}
        <div className="project-info-popup">
          <Typography
            variant="subtitle1"
            style={{ marginTop: 20 }}
            className="color-2 capitalize"
          >
            Thesis
          </Typography>
          <Typography variant="body1" className="color-1">
            {props.project.thesis}
          </Typography>
          <Typography
            variant="subtitle1"
            style={{ marginTop: 20 }}
            className="color-2 capitalize"
          >
            Structure
          </Typography>
          <Typography variant="body1" className="color-1">
            {props.project.structure}
          </Typography>
          <Typography
            variant="subtitle1"
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
