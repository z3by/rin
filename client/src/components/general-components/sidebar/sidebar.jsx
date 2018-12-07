import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
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
  state = {
    toggled: false
  };

  toggleDrawer = () => () => {
    this.setState({
      toggled: !this.state.toggled
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          <Link to="/dashboard/projects">
            <ListItem button key={"projects"}>
              <ListItemIcon>
                <i class="fas fa-project-diagram" />
              </ListItemIcon>
              <ListItemText>Projects</ListItemText>
            </ListItem>
          </Link>
        </List>
      </div>
    );

    return (
      <div>
        <Button onClick={this.toggleDrawer()}>
          <i
            class="fas fa-bars"
            style={{ fontSize: "2rem", color: "var(--color-4)" }}
          />
        </Button>
        <Drawer open={this.state.toggled} onClose={this.toggleDrawer()}>
          <div className="logo">
            <img src="imgs/logo.png" alt="" style={{ width: "120px" }} />
          </div>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer()}
            onKeyDown={this.toggleDrawer()}
            style={{ paddingTop: "100px" }}
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
