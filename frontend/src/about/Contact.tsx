import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";

export default function Contact() {
  const useStyles = makeStyles({
    root: {
      margin: 10,
    },
    title: {
      fontFamily: "Playfair Display",
      fontSize: 30,
      letterSpacing: 6,
      fontWeight: "bold",
      textTransform: "uppercase",
      color: "#1A3400",
      textAlign: "center",
    },
  });

  const classes = useStyles();

  return (
    <>
      <Typography className={classes.title}>Visit us</Typography>
    </>
  );
}
