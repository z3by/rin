import React from "react";
import "./Team.css";
import TeamMember from "../TeamMember/TeamMember.component";

export default () => {
  return (
    <div className="team-members">
      <TeamMember teamMemberInfo={{ name: "john" }} />
    </div>
  );
};
