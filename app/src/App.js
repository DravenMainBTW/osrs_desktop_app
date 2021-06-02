import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import Navbar from "./components/common/navbar";

import Home from "./components/homepage";
import History from "./components/history";
import ViewItem from "./components/view_item_page";

import "./main.css";

export default class App extends Component {
  state = {
    theme: createMuiTheme({
      palette: {
        type: "dark",
      },
    }),
    theme_type: "dark",
  };

  componentDidMount() {
    let cached_theme = localStorage.getItem("cached_theme");
    if (cached_theme === null) {
      this.setState({
        theme: createMuiTheme({
          palette: {
            type: "dark",
          },
        }),
        theme_type: "dark",
      });

      localStorage.setItem("cached_theme", "dark");
    } else {
      this.setState({
        theme: createMuiTheme({
          palette: {
            type: cached_theme,
          },
        }),
        theme_type: cached_theme,
      });
    }
  }

  toggle_theme = () => {
    this.setState({
      theme:
        this.state.theme_type === "dark"
          ? createMuiTheme({
              palette: {
                type: "light",
              },
            })
          : createMuiTheme({
              palette: {
                type: "dark",
              },
            }),
      theme_type: this.state.theme_type === "dark" ? "light" : "dark",
    });

    localStorage.setItem(
      "cached_theme",
      this.state.theme_type === "dark" ? "light" : "dark"
    );
  };

  render() {
    return (
      <React.Fragment>
        <ThemeProvider theme={this.state.theme}>
          <CssBaseline>
            <Navbar
              theme={this.state.theme.palette}
              toggle_theme={() => {
                this.toggle_theme();
              }}
            />
            <div className="content">
              <Switch>
                <Route exact path={"/"} component={Home} />
                <Route path={"/history"} component={History} />
                <Route path={"/view_item/:id"} component={ViewItem} />
              </Switch>
            </div>
          </CssBaseline>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
