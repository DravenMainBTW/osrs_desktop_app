import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Grid,
  Menu,
  MenuItem,
} from "@material-ui/core/";
import MenuIcon from "@material-ui/icons/Menu";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import { Link } from "react-router-dom";

export default class navbar extends Component {
  state = { openMenu: null, anchorEl: null, count: 0, setCount: 0 };

  handleClick = (event) => {
    this.setState({ openMenu: true, anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ openMenu: null, anchorEl: null });
  };

  render() {
    return (
      <AppBar position="fixed" color="default">
        <Toolbar>
          <Grid
            justifyContent="space-between"
            container
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Grid item>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={this.handleClick}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={this.state.anchorEl}
                keepMounted
                open={Boolean(this.state.openMenu)}
                onClose={() => {
                  this.handleClose();
                }}
              >
                <MenuItem
                  component={Link}
                  to="/"
                  onClick={() => {
                    this.handleClose();
                  }}
                >
                  Home
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/history"
                  onClick={() => {
                    this.handleClose();
                  }}
                >
                  Search History
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    window.close();
                  }}
                >
                  Exit App
                </MenuItem>
              </Menu>
            </Grid>
            <Grid item>
              <Typography variant="h5">OSRS App</Typography>
            </Grid>
            <Grid item>
              {this.props.theme === "light" ? (
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={() => this.props.toggle_theme()}
                >
                  <NightsStayIcon />
                </IconButton>
              ) : (
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={() => this.props.toggle_theme()}
                >
                  <WbSunnyIcon />
                </IconButton>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}
