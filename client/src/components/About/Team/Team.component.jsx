import React from "react";
import "./Team.css";
import TeamMember from "../TeamMember/TeamMember.component";

export default props => {
  return (
    <div className="grid-4 team-grid">
      {props.info.map((ele, id) => {
        return <TeamMember key={id} teamMemberInfo={ele} />;
      })}
    </div>
  );
};
