import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { Link } from "react-router-dom";

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
};

class Sidebar extends React.Component {
  state = {};

  toggleDrawer = () => () => {
    this.props.toggleDrawer();
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          <Link to="/dashboard">
            <ListItem button key={"home"} style={{ padding: 15 }}>
              <ListItemIcon
                style={{
                  margin: 0,
                  color: "var(--color-2)",
                  fontSize: "1.3rem"
                }}
              >
                <i className="fas fa-home" />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItem>
          </Link>
          <Link to="/dashboard/projects">
            <ListItem button key={"projects"} style={{ padding: 15 }}>
              <ListItemIcon
                style={{
                  margin: 0,
                  color: "var(--color-2)",
                  fontSize: "1.3rem"
                }}
              >
                <i className="fas fa-project-diagram" />
              </ListItemIcon>
              <ListItemText>Projects</ListItemText>
            </ListItem>
          </Link>
          <Link to="/dashboard/stories">
            <ListItem button key={"stories"} style={{ padding: 15 }}>
              <ListItemIcon
                style={{
                  margin: 0,
                  color: "var(--color-2)",
                  fontSize: "1.3rem"
                }}
              >
                <i className="fas fa-bookmark" />
              </ListItemIcon>
              <ListItemText>Stories</ListItemText>
            </ListItem>
          </Link>
          <Link to="/dashboard/articles">
            <ListItem button key={"blog"} style={{ padding: 15 }}>
              <ListItemIcon
                style={{
                  margin: 0,
                  color: "var(--color-2)",
                  fontSize: "1.3rem"
                }}
              >
                <i className="fas fa-newspaper" />
              </ListItemIcon>
              <ListItemText>Blog</ListItemText>
            </ListItem>
          </Link>
          <Link to="/dashboard/users">
            <ListItem button key={"users"} style={{ padding: 15 }}>
              <ListItemIcon
                style={{
                  margin: 0,
                  color: "var(--color-2)",
                  fontSize: "1.3rem"
                }}
              >
                <i className="fas fa-users" />
              </ListItemIcon>
              <ListItemText>Users</ListItemText>
            </ListItem>
          </Link>
        </List>
      </div>
    );

    return (
      <div>
        <Drawer open={this.props.toggled} onClose={this.toggleDrawer()}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer()}
            onKeyDown={this.toggleDrawer()}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Sidebar);
