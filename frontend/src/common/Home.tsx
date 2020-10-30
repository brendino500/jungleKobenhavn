import React from "react";
import image from "../assets/zzplant.jpg";

import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Button, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundImage: `url(${image})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      height: "100%",
      [theme.breakpoints.between("xs", "sm")]: {},
    },
  },
  title: {
    fontFamily: "Playfair Display",
    fontWeight: "bold",
    letterSpacing: 9,
    fontSize: 50,
    marginTop: "10%",
    color: "#1A3400",
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: 10,
    },
  },
  button: {
    fontFamily: "Open Sans",
    marginTop: "2%",
    color: "#1A3400",
  },
  link: {
    textDecoration: "none",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Container>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="flex-start"
      >
        <Typography className={classes.title}>
          Jungle {<br />}København
        </Typography>
        <Link to={`/plants`} className={classes.link}>
          <Button className={classes.button} variant="outlined">
            Show me the plants
          </Button>
        </Link>
      </Grid>
    </Container>
  );
}
