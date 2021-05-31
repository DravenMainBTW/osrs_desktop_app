import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Grid,
} from "@material-ui/core/";
import MenuIcon from "@material-ui/icons/Menu";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import WbSunnyIcon from "@material-ui/icons/WbSunny";

export default class navbar extends Component {
  render() {
    return (
      <AppBar position="fixed" color="default">
        <Toolbar>
          <Grid
            justify="space-between"
            container
            spacing={24}
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Grid item>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography variant="h6">OSRS App</Typography>
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
