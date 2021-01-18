import React from "react";
import useStyles from "./styles/jokePaymentStyles";
import ContactLinks from "./components/jokePayment/ContactLinks";
import AboutText from "./components/jokePayment/AboutText";
import NotARealSiteText from "./components/jokePayment/NotARealSiteText";
import PlantLinks from "./components/jokePayment/PlantLinks";

import { Container, Typography, Hidden, Grid } from "@material-ui/core";

export default function JokePayment() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Container className={classes.header}>
        <Typography className={classes.title}>Psyche!</Typography>
      </Container>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
      >
        <div>
          <Container maxWidth="sm" className={classes.textSection}>
            <NotARealSiteText />
            <br />
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="center"
            >
              <PlantLinks />
            </Grid>
          </Container>
        </div>
        <Hidden smUp>
          <Typography className={classes.elipsis}>____________</Typography>
        </Hidden>

        <Container className={classes.contactSection}>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="center"
          >
            <AboutText />
            <ContactLinks />
          </Grid>
        </Container>
      </Grid>
    </Container>
  );
}
