import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Grid } from "@material-ui/core";

export default function Payment() {
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
  });

  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography className={classes.title}>Payment Page</Typography>
    </Container>
  );
}
