import React from "react";
import ShippingForm from "./ShippingForm";
import ShippingSummary from "./ShippingSummary";
import useStyles from "./styles/shippingAddressStyles";

import { Container, Hidden, Grid } from "@material-ui/core";

export default function ShippingAddress() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid
        container
        direction="row"
        justify="center"
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
