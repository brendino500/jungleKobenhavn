import React from "react";
import PlantCardCheckout from "./PlantCardCheckout";

import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    margin: 2,
  },
});

export default function ShippingSummary() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
      >
        <PlantCardCheckout />
      </Grid>
    </Container>
  );
}
