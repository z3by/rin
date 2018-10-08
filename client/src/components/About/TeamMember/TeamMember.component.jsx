import React from "react";
import "./TeamMember.css";

export default props => {
  const info = props.teamMemberInfo;

  return (
    <div className="team-member">
      <img src={info.img} alt={info.name} />
      <h2 className="heading-theme-2">{info.name}</h2>
      <h3 className="heading-theme-3">{info.title}</h3>
      <p className="p-theme-1">{info.description}</p>
    </div>
  );
};
