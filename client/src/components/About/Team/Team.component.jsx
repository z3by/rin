import React, { Component } from "react";
import "./Team.css";
import TeamMember from "./TeamMember.component";

export default class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        {this.props.info.map((guy, i) => {
          return <TeamMember {...this.props} key={i} bio={guy} />;
        })}
      </React.Fragment>
    );
  }
}
