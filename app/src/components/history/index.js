import React, { Component } from "react";
import { Grid, Container, Typography } from "@material-ui/core";

export default class index extends Component {
  render() {
    return (
      <Container maxWidth="sm">
        <Typography variant="h6">Search History</Typography>
        <Grid
          justifyContent="space-between"
          container
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        ></Grid>
      </Container>
    );
  }
}
