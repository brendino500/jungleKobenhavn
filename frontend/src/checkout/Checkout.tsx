import React from "react";
import BasketCheckout from "./BasketCheckout";
import SummaryCheckout from "./SummaryCheckout";

import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Grid, Box } from "@material-ui/core";

export default function Checkout() {
  const useStyles = makeStyles({
    root: {
      margin: 2,
    },
    basket: {
      flexGrow: 3,
    },
    summary: {
      flexGrow: 1,
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
    text: {
      fontFamily: "Open Sans",
      fontSize: 16,
      color: "#848380",
    },
  });

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
