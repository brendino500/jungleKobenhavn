import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Typography,
  List,
  ListItem,
  Button,
  Divider,
  Hidden,
  Grid,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import LinkIcon from "@material-ui/icons/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 2,
  },
  textSection: {
    marginTop: "3%",
  },
  title: {
    fontFamily: "Playfair Display",
    fontSize: 50,
    color: "#497702",
    letterSpacing: 5,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  text: {
    fontFamily: "Open Sans",
    color: "#848380",
    fontSize: 14,
  },
  list: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    color: "#497702",
  },
  link: {
    textDecoration: "none",
  },
  contactText: {
    fontFamily: "Open Sans",
    color: "#848380",
    fontSize: 14,
    [theme.breakpoints.between("xs", "sm")]: {
      marginTop: 50
    },
  },
  header: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  iconText: {
    fontFamily: "Open Sans",
    color: "#365902",
    fontSize: 14,
    marginLeft: "15%",
  },
  contactSection: {
    display: "flex",
    flexDirection: "row",
    maxWidth: 400,
    marginTop: "1%",
  },
  icons: {
    color: "#365902",
    fontSize: 27,
  },
  contactList: {
    marginTop: "3%",
    [theme.breakpoints.between("xs", "sm")]: {
      marginLeft: -50
    },
  },
  elipsis: {
    color: "#497702",
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: "25%",
    marginTop: 30
  }
}));

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
            <Typography className={classes.text}>
              Unfortunately this isn't a real site (but I hope I fooled you!).
              {<br />}
              However, here is a list of some online plant shops if you do want
              to buy some.
            </Typography>
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
            <Typography className={classes.contactText}>
              Hi, I'm Brenda and I made this site all by myself after 3 months
              of coding.
              {<br />}
              {<br />}
              I'm currently looking for a front end developer role as I want to
              learn from others and share my creativity.
              {<br />}
              {<br />}
              If you would like to see more of my projects or even give me a
              stalk, please check out these links below:
            </Typography>
            <List className={classes.contactList}>
              <a
                href="https://github.com/brendino500"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.link}
              >
                <ListItem>
                  <GitHubIcon className={classes.icons} />
                  <Typography className={classes.iconText}>GitHub</Typography>
                </ListItem>
              </a>
              <a
                href="https://www.linkedin.com/in/brendaty/"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.link}
              >
                <ListItem>
                  <LinkedInIcon className={classes.icons} />
                  <Typography className={classes.iconText}>LinkedIn</Typography>
                </ListItem>
              </a>
              <a
                href="https://brendaty.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.link}
              >
                <ListItem>
                  <LinkIcon className={classes.icons} />
                  <Typography className={classes.iconText}>Website</Typography>
                </ListItem>
              </a>
            </List>
          </Grid>
        </Container>
      </Grid>
    </Container>
  );
}
