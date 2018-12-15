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
          return (
            <TeamMember
              showMemberInfo={() => {
                this.props.showMemberInfo(guy);
              }}
              {...this.props}
              imgHeight={this.props.imgHeight}
              key={i}
              bio={guy}
            />
          );
        })}
      </React.Fragment>
    );
  }
}
