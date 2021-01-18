import React from "react";
import PlantCardCheckout from "./PlantCardCheckout";
import useStyles from "./styles/basketCheckoutStyles";

import { Container, Typography, Grid, Divider } from "@material-ui/core";

export default function BasketCheckout() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography className={classes.title}>My Basket</Typography>
      <Divider />
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
