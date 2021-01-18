import React from "react";
import BasketCheckout from "./BasketCheckout";
import SummaryCheckout from "./SummaryCheckout";
import useStyles from "./styles/checkoutStyles";

import { Container, Typography, Grid } from "@material-ui/core";

export default function Checkout() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography className={classes.title}>My Basket</Typography>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="flex-start"
      >
        <div className={classes.basket}>
          <BasketCheckout />
        </div>
        <div className={classes.summary}>
          <SummaryCheckout />
        </div>
      </Grid>
    </Container>
  );
}
