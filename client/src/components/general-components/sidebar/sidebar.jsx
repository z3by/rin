import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

export default props => {
  return (
    <nav id="ml-menu" className="sidebar">
      <div className="admin-logo">
        <Link to={"/"}>
          <img src="/imgs/old-logo.png" alt="" className="logo-img" />
        </Link>
      </div>
      <ul>
        <li>
          <Link to={"/dashboard/projects/list"}>
            <i className="fas fa-building" /> Projects
          </Link>
        </li>
        <li>
          <Link to={"/dashboard/stories/list"}>
            <i className="fas fa-user-check" />
            Stories
          </Link>
        </li>
        <li>
          <Link to={"/dashboard/users/list"}>
            <i className="fas fa-users" />
            Users
          </Link>
        </li>
      </ul>
    </nav>
  );
};
