import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";

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
      textTransform: "uppercase",
      letterSpacing: 4,
    },
    text: {
      marginTop: "5%",
      fontFamily: "Open Sans",
      fontSize: 16,
      color: "#848380",
    },
    text2: {
      fontFamily: "Open Sans",
      fontSize: 12,
      color: "#848380",
    },
    email: {
      fontFamily: "Open Sans",
      fontSize: 12,
      color: "#848380",
      textDecoration: "none",
    },
  });

  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography className={classes.title}>Denmark</Typography>
      <Typography className={classes.text}>
        Fælledvej 14-18 {<br />}2200 København {<br />} Denmark
      </Typography>
      <br />
      <Typography className={classes.text2}>
        <a href="mailto:hej@junglekobenhavn.dk" className={classes.email}>
          hej@junglekobenhavn.dk
        </a>
        {<br />}
        +45 60 34 66 12
      </Typography>
    </Container>
  );
}
