import React from "react";
import PlantCardCheckout from "./PlantCardCheckout";

import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Grid, Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 5,
  },
  title: {
    fontFamily: "Playfair Display",
    fontWeight: "bold",
    fontSize: 18,
    color: "#848380",
    marginTop: 12,
    letterSpacing: 3,
  },
  [theme.breakpoints.between("xs", "sm")]: {
    fontSize: 14,
    marginTop: 5
  },
}));

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
