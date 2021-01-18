import React from "react";
import useStyles from "./styles/londonAddressStyles";

import { Container, Typography } from "@material-ui/core";

export default function LondonAddress() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography className={classes.title}>London</Typography>
      <Typography className={classes.text}>
        9 Morocco Street {<br />}Bermondsey, London {<br />} SE1 3HB
      </Typography>
      <br />
      <Typography className={classes.text2}>
        <a href="mailto:hello@junglekobenhavn.co.uk" className={classes.email}>
          hello@junglekobenhavn.co.uk
        </a>
        {<br />}
        +44 2087 342 900
      </Typography>
    </Container>
  );
}
