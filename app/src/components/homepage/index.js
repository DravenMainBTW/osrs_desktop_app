import React, { Component } from "react";
import { Container, Paper, InputBase, Grid } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

export default class index extends Component {
  state = { search: "" };

  render() {
    return (
      <Container maxWidth="sm">
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Paper
              component="form"
              style={{
                marginTop: "20px",
                padding: "2px 4px",
                display: "flex",
              }}
            >
              <InputBase
                style={{ marginLeft: "20px" }}
                placeholder="Search Grand Exchange"
                inputProps={{ "aria-label": "search grand exchange" }}
                onChange={(e) => {
                  this.setState({ search: e.target.value });
                }}
              />
              <IconButton
                style={{ marginLeft: "auto" }}
                type="submit"
                aria-label="search"
                onClick={(e) => {
                  e.preventDefault();
                  console.log(this.state.search);
                }}
              >
                <SearchIcon />
              </IconButton>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    );
  }
}
