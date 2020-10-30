import React from "react";
import ShippingForm from "./ShippingForm";
import ShippingSummary from "./ShippingSummary";

import { makeStyles } from "@material-ui/core/styles";
import { Container, Hidden, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 2,
  },
  shippingAddress: {
    margin: 2,
    display: "flex",
    flexGrow: 3,
    flexDirection: "column",
  },
  orderSummary: {
    flexGrow: 1,
    display: "flex",
  },
  grid: {
    display: "flex",
    flexWrap: "nowrap",
  },
}));

export default function ShippingAddress() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="flex-start"
        className={classes.grid}
      >
        <div className={classes.shippingAddress}>
          <ShippingForm />
        </div>
        <Hidden smDown>
        <div className={classes.orderSummary}>
          <ShippingSummary />
        </div>
        </Hidden>
      </Grid>
      <Hidden smUp>
        <ShippingSummary />
      </Hidden>
    </Container>
  );
}
