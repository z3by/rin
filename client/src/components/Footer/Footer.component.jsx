import React from "react";
import "./footer.css";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

export default () => {
  return <footer>
      <div className="footer-grid">
        <div className="footer-col">
          <img src="/imgs/logo.png" className="footer-logo" alt="" />
          <Typography variant="body1" className="footer-col-title capitalize text-center color-4">
            Refugee investment network
            {"  "}
            <span className="color-1">{new Date().getFullYear()}</span>
          </Typography>
        </div>
        <div className="footer-col">
          <Typography variant="h6" className="footer-col-title upper color-4">
            Fast Links
          </Typography>
          <ul className="footer-contact-links">
            <li>
              <Link className="footer-link" to={"/stories"}>
                <i className="fas fa-angle-double-right" /> Success Stories
              </Link>
            </li>

            <li>
              <Link className="footer-link" to={"/map"}>
                <i className="fas fa-angle-double-right" /> Projects Map
              </Link>
            </li>
            <li>
              <Link className="footer-link" to={"/data"}>
                <i className="fas fa-angle-double-right" /> Data
              </Link>
            </li>

            <li>
              <Link className="footer-link" to={"/members"}>
                <i className="fas fa-angle-double-right" /> Members Area
              </Link>
            </li>
            <li>
              <Link className="footer-link" to={"/about"}>
                <i className="fas fa-angle-double-right" /> About us
              </Link>
            </li>

            <li>
              <Link className="footer-link" to={"/news"}>
                <i className="fas fa-angle-double-right" /> News
              </Link>
            </li>
            <li>
              <Link className="footer-link" to={"/blog"}>
                <i className="fas fa-angle-double-right" /> Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <Typography variant="h6" className="footer-col-title upper color-4">
            contact us
          </Typography>
          <ul className="footer-contact-links">
            <li>
              <i className="fab fa-linkedin-in" />
              <a href="https://www.linkedin.com/company/refugee-investment-network/" target="_blank" rel="noopener noreferrer">
                Linkedin
              </a>
            </li>
            <li>
              <i className="fab fa-twitter" />
              <a href="https://twitter.com/refugeeinvest?lang=en" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <Typography variant="overline" className="color-4">
          Made With <i className="fas fa-heart" /> By Refugees Hands At <a href="" className="color-1">
            <strong>@359</strong>
          </a>
        </Typography>
        <Typography variant="overline" className="color-4">
          Copyright © {new Date().getFullYear()} Refugee Investment Network. All rights reserved.
        </Typography>
      </div>
    </footer>;
};
