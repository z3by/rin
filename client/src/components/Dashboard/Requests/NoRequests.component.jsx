import React from "react";
import Typography from "@material-ui/core/Typography";

export default props => {
  return (
    props.show && (
      <div className="no-requests">
        <Typography variant="h6" className="color-2">
          No requests yet
        </Typography>
        <img
          src="http://icons.iconarchive.com/icons/iconsmind/outline/256/Inbox-Empty-icon.png"
          alt=""
        />
      </div>
    )
  );
};
