import React, { Component } from "react";
import Axios from "axios";
import {
  Card,
  CardContent,
  Typography,
  CardActionArea
} from "@material-ui/core";
import { Link } from "react-router-dom";

export default class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = { results: [] };
  }

  componentDidMount() {
    this.getSearchResult();
  }

  getSearchResult = () => {
    const keyword = this.props.match.params.keyword;
    Axios.get("/api/dashboardsearch", { params: { input: keyword } }).then(
      result => {
        this.setState({ results: result.data });
      }
    );
  };

  render() {
    return (
      <div className="container">
        {!this.state.results.length ? (
          <Typography className="text-center bg-2 padding-20" variant="h4">
            No Results Please Try Another Keyword
          </Typography>
        ) : null}
        {this.state.results.map((result, i) => {
          return (
            <Card style={{ margin: 5 }} key={i} className="role-card">
              <CardActionArea>
                <Link to={`/dashboard/${result.section}/${result.id}`}>
                  <CardContent className="flex justify-content-between">
                    <Typography variant="body-1" className="color-2">
                      <span className="color-3"> Item Name:</span> {result.name}
                    </Typography>
                    <Typography variant="body-1" className="color-2">
                      <span className="color-3"> Type:</span> {result.section}
                    </Typography>
                  </CardContent>
                </Link>
              </CardActionArea>
            </Card>
          );
        })}
      </div>
    );
  }
}
