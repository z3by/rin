import React, { Component } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

const tabsData = [
  {
    icon: "building",
    title: "Projects",
    path: "/dashboard/projects/list"
  },
  {
    title: "Stories",
    icon: "user-check",
    path: "/dashboard/stories/list"
  },
  {
    title: "Articles",
    icon: "newspaper",
    path: "/dashboard/articles/list"
  },
  {
    title: "Users",
    icon: "users",
    path: "/dashboard/users/list"
  },
  {
    title: "Library",
    icon: "book-open",
    path: "/dashboard/library/list"
  }
];
export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0
    };
  }

  activateTab = id => {
    this.setState({
      currentTab: id
    });
  };

  render() {
    return (
      <nav id="ml-menu" className="sidebar">
        <div className="admin-logo">
          <Link to={"/"}>
            <img src="/imgs/old-logo.png" alt="" className="logo-img" />
          </Link>
        </div>
        <ul>
          {tabsData.map((tab, id) => {
            return (
              <li
                key={id}
                onClick={() => {
                  this.activateTab(id);
                }}
                className={this.state.currentTab === id ? "tab-active" : ""}
              >
                <Link to={tab.path}>
                  <i className={"fas fa-" + tab.icon} />
                  {tab.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}
