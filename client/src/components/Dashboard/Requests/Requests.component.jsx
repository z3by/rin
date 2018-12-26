import React from "react";
import "./requests.css";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Axios from "axios";
import RequestList from "./RequsetList.component";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

class Requests extends React.Component {
  state = {
    value: 0,
    projectRequests: [],
    articleRequests: []
  };

  componentDidMount() {
    this.fetchArticlesRequests();
    this.fetchProjectsRequests();
  }

  fetchArticlesRequests = () => {
    Axios.get("/api/requests/articles").then(res => {
      this.setState({ articleRequests: res.data.rows });
    });
  };

  fetchProjectsRequests = () => {
    Axios.get("/api/requests/projects").then(res => {
      this.setState({ projectRequests: res.data.rows });
    });
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={this.handleChange}
            className="flex-centerd bg-5"
          >
            <Tab label="Project Requests" />
            <Tab label="Article Requests" />
          </Tabs>
        </AppBar>

        {value === 0 && (
          <TabContainer>
            {
              <RequestList
                {...this.props}
                fetchReqCount={() => {
                  this.props.fetchReqCount();
                  this.fetchArticlesRequests();
                  this.fetchProjectsRequests();
                }}
                itemName="project"
                requests={this.state.projectRequests}
              />
            }
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            {
              <RequestList
                {...this.props}
                itemName="article"
                fetchReqCount={() => {
                  this.props.fetchReqCount();
                  this.fetchArticlesRequests();
                  this.fetchProjectsRequests();
                }}
                requests={this.state.articleRequests}
              />
            }
          </TabContainer>
        )}
      </div>
    );
  }
}

Requests.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Requests);
