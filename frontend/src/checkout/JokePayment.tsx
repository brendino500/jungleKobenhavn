import React from "react";
import useStyles from "./styles/jokePaymentStyles";
import ContactLinks from "./components/jokePayment/ContactLinks";
import AboutText from "./components/jokePayment/AboutText";
import NotARealSiteText from "./components/jokePayment/NotARealSiteText";

import {
  Container,
  Typography,
  List,
  ListItem,
  Button,
  Hidden,
  Grid,
} from "@material-ui/core";

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
              <List>
                <ListItem>
                  <a
                    href="https://www.cowellsgc.co.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.link}
                  >
                    <Button className={classes.button}>
                      Cowell's Garden Centre
                    </Button>
                  </a>
                </ListItem>
                <ListItem>
                  <a
                    href="https://www.houseofkojo.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.link}
                  >
                    <Button className={classes.button}>House of Kojo</Button>
                  </a>
                </ListItem>
                <ListItem>
                  <a
                    href="https://www.root-houseplants.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.link}
                  >
                    <Button className={classes.button}>Root Houseplants</Button>
                  </a>
                </ListItem>
                <ListItem>
                  <a
                    href="https://www.leafyhouse.co.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.link}
                  >
                    <Button className={classes.button}>Leafy House</Button>
                  </a>
                </ListItem>
              </List>
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
