import React from "react";
import Paper from "@material-ui/core/Paper";
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
      <FilterForm
        toggleFilter={props.handleFilterToggle}
        filterProjects={props.filterProjects}
        resetFilter={props.resetFilter}
      />
    </Paper>
  );
}
