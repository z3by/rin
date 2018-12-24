import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import "./Filter.css";
import FilterForm from "./FilterForm/FilterForm.component";

export default function Filter(props) {
  return (
    <Paper
      className="filter-modal"
      style={{
        display: props.shown ? "block" : "none",
        opacity: props.shown ? "1" : "0"
      }}
    >
      <span
        className="fas fa-times"
        id="close-filter"
        onClick={props.handleFilterToggle}
      />
      <Typography variant="h6" className="text-center">
        Filter project to reach out your exact needs
      </Typography>
      <FilterForm
        toggleFilter={props.handleFilterToggle}
        filterProjects={props.filterProjects}
        resetFilter={props.resetFilter}
      />
    </Paper>
  );
}
