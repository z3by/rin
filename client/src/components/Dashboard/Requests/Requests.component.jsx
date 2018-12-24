import React from "react";
import "./requests.css";
import RequestList from "./RequestList.component";

export default function Requests() {
  return (
    <div>
      <RequestList itemName={"project"} />
      <RequestList itemName={"article"} />
    </div>
  );
}
