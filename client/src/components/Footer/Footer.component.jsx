import React from "react";
import "./footer.css";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

export default () => {
  return (
    <footer>
      <div className="footer-col">
        <img src="/imgs/logo.png" className="footer-logo" alt="" />
      </div>
      <div className="footer-col">
        <Typography variant="h6" className="footer-col-title upper color-2">
          Fast Links
        </Typography>
        <ul className="footer-contact-links">
          <li>
            <Link className="navbar-link" to={"/stories"}>
              Success Stories
            </Link>
          </li>

          <li>
            <Link className="navbar-link" to={"/map"}>
              Projects Map
            </Link>
          </li>
          <li>
            <Link className="navbar-link" to={"/data"}>
              Data
            </Link>
          </li>

          <li>
            <Link className="navbar-link" to={"/members"}>
              Members Area
            </Link>
          </li>
          <li>
            <Link className="navbar-link" to={"/about"}>
              About us
            </Link>
          </li>

          <li>
            <Link className="navbar-link" to={"/news"}>
              News
            </Link>
          </li>
          <li>
            <Link className="navbar-link" to={"/blog"}>
              Blog
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-col">
        <Typography variant="h6" className="footer-col-title upper color-2">
          contact us
        </Typography>
        <ul className="footer-contact-links">
          <li>
            <i className="fab fa-linkedin-in" />
            <a
              href="https://www.linkedin.com/company/refugee-investment-network/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </li>
          <li>
            <i className="fab fa-twitter" />
            <a
              href="https://twitter.com/refugeeinvest?lang=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-col">
        <Typography variant="h6" className="footer-col-title upper color-2">
          Made With <i className="fas fa-heart" /> By Refugees Hands At{" "}
          <a href="" className="color-1">
            <strong>@359</strong>
          </a>
        </Typography>
      </div>
    </footer>
  );
};
