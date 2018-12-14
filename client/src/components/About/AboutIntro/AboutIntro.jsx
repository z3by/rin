import React from "react";
import { Typography, Paper } from "@material-ui/core";

export default () => {
  return (
    <Paper className="fadeInFast about-intro">
      <Typography variant="h6" className="color-4">
        What is The Refugee Investment Network (RIN) ?
      </Typography>
      <Typography variant="body1">
        is the first blended finance investment collaborative dedicated to
        creating long-term solutions to global forced migration. The RIN moves
        private capital from commitment to active investment by sourcing,
        structuring, and supporting the financing of projects and companies that
        benefit refugees and host communities. Ultimately, the RIN aims to
        bridge the gap between the untapped entrepreneurial potential of
        refugees and capital markets to spur economic growth, create jobs, and
        increase socio-economic stability among displaced people.
      </Typography>
    </Paper>
  );
};
