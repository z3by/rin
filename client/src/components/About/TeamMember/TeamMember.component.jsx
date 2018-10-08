import React from "react";
import "./TeamMember.css";

export default props => {
  const info = props.teamMemberInfo;

  return (
    <div className="team-member">
      <figure class="effect-chico">
        <img src={info.img} alt="img15" />
        <figcaption>
          <h2>{info.name}</h2>
          <p>
            {info.title}
            <a className="read-more">read more..</a>
          </p>
        </figcaption>
      </figure>
      <p className="team-description">{info.description}</p>
    </div>
  );
};
