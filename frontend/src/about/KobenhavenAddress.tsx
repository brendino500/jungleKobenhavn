import React from "react";
import useStyles from "./styles/kobenhavenAddressStyles";

import { Container, Typography } from "@material-ui/core";

export default function KobenhavnAddress() {
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
