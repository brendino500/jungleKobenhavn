import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Grid } from "@material-ui/core";

export default function KobenhavnAddress() {
  const useStyles = makeStyles({
    container: {
      margin: 10,
    },
    title: {
      fontFamily: "Playfair Display",
      fontWeight: "bold",
      fontSize: 18,
      color: "#848380",
      marginTop: "30%",
    },
    text: {
      marginTop: "5%",
      fontFamily: "Open Sans",
      fontSize: 16,
      color: "#848380",
    },
  });

  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="lg">
      <Typography className={classes.title}>Location:</Typography>
      <Typography className={classes.text}>
        Fælledvej 14-18 {<br />}2200 København {<br />} Denmark
      </Typography>
    </Container>
  );
}
