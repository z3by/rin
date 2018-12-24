import React from "react";
import Typography from "@material-ui/core/Typography";
import Request from "./RequestCard.component";
import NoRequests from "./NoRequests.component";

export default props => {
  return (
    <div className="container requests-list">
      <Typography variant="h4" className="upper text-center">
        {props.itemName + "s Requests"}
      </Typography>
      <hr color="lightgray" style={{ marginBottom: 50 }} />
      {!props.requests.length ? (
        <NoRequests show={true} />
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {props.requests.map((request, i) => {
            return (
              <li key={i}>
                <Request
                  request={request}
                  handleAccept={props.handleAccept}
                  itemName={props.itemName}
                />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
