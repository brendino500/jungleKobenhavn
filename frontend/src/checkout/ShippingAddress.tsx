import React from "react";
import PaymentForm from "./ShippingForm";
import ShippingSummary from "./ShippingSummary";

import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Grid } from "@material-ui/core";

export default function ShippingAddress() {
  const useStyles = makeStyles({
    root: {
      margin: 2,
    },
    shippingAddress: {
      margin: 2,
      flexGrow: 3,
      flexDirection: "column",
    },
    orderSummary: {
      flexGrow: 1,
    },
  });

  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="flex-start"
      >
        <div className={classes.shippingAddress}>
          <PaymentForm />
        </div>
        <div className={classes.orderSummary}>
          <ShippingSummary />
        </div>
      </Grid>
    </Container>
  );
}
