import React from "react";
import KobenhavenAddress from "./KobenhavenAddress";
import KobenhavnMap from "./KobenhavnMap";

import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Grid } from "@material-ui/core";

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
    <Container maxWidth="lg">
      <Typography className={classes.title}>Visit us</Typography>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <KobenhavenAddress />

        <KobenhavnMap />
      </Grid>
    </Container>
  );
}
