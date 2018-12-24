import React from "react";

export default function SocialLinks() {
  return (
    <ul className="social-links">
      <li>
        <a
          href="https://www.linkedin.com/company/refugee-investment-network/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in" />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/refugeeinvest?lang=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter" />
        </a>
      </li>
    </ul>
  );
}
