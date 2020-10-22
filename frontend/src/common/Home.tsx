import React from "react";
import image from "../assets/zzplant.jpg";

import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  "@global": {
    body: {
      backgroundImage: `url(${image})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      height: "100%",
    },
  },
  title: {
    fontFamily: "Playfair Display",
    fontWeight: "bold",
    letterSpacing: 9,
    fontSize: 50,
    marginTop: "10%",
    color: "#1A3400",
  },
});

export default function Home() {
  const classes = useStyles();

  return (
    <Container>
      <Typography className={classes.title}>
        Jungle {<br />}København
      </Typography>
    </Container>
  );
}
