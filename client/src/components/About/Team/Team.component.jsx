import React from "react";
import "./Team.css";
import TeamMember from "../TeamMember/TeamMember.component";

export default props => {
  return (
    <div className={`${props.info.length > 5 ? "grid-6" : "grid-5"} team-grid`}>
      {props.info.map((ele, id) => {
        return <TeamMember key={id} teamMemberInfo={ele} />;
      })}
    </div>
  );
};
