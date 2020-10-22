import React from "react";
import image from "../assets/zzplant.jpg";

import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Button } from "@material-ui/core";

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
  button: {
    fontFamily: "Open Sans",
    marginTop: "2%",
    color: "#1A3400",
  },
  link: {
    textDecoration: "none",
  },
});

export default function Home() {
  const classes = useStyles();

  return (
    <Container>
      <Typography className={classes.title}>
        Jungle {<br />}København
      </Typography>
      <Link to={`/plants`} className={classes.link}>
        <Button className={classes.button} variant="outlined">
          Show me the plants
        </Button>
      </Link>
    </Container>
  );
}
