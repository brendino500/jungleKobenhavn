import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Grid, Box, Divider } from "@material-ui/core";

export default function BasketCheckout() {
  const useStyles = makeStyles({
    root: {
      margin: 5,
    },
    title: {
      fontFamily: "Playfair Display",
      fontWeight: "bold",
      fontSize: 18,
      color: "#848380",
      marginTop: "30%",
      letterSpacing: 4,
      textTransform: "uppercase",
    },
  });

  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography className={classes.title}>My Basket</Typography>
      <Divider />
    </Container>
  );
}
