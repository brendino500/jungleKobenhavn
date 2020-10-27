import React from "react";
import PaymentForm from "./ShippingForm";

import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Grid } from "@material-ui/core";

export default function ShippingAddress() {
  const useStyles = makeStyles({
    root: {
      margin: 2,
    },
    title: {
      fontFamily: "Playfair Display",
      fontSize: 30,
      letterSpacing: 6,
      fontWeight: "bold",
      color: "#1A3400",
      textTransform: "uppercase",
      textAlign: "center",
    },
    shippingAddress: {
      margin: 2,
      flexGrow: 3,
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
          <Typography>Order summary</Typography>
        </div>
      </Grid>
    </Container>
  );
}
