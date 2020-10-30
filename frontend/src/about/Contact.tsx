import React from "react";
import KobenhavenAddress from "./KobenhavenAddress";
import KobenhavnMap from "./KobenhavnMap";
import LondonAddress from "./LondonAddress";
import LondonMap from "./LondonMap";

import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Grid, Box } from "@material-ui/core";

export default function Contact() {
  const useStyles = makeStyles((theme) => ({
    root: {
      margin: 5,
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
    box: {
      marginTop: "-5%",
      [theme.breakpoints.between("xs", "sm")]: {
        marginTop: "-20%"
      },
    },
  }));

  const classes = useStyles();

  return (
    <Container>
      <Typography className={classes.title}>Visit us</Typography>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Box className={classes.box}>
          <div>
            <KobenhavenAddress />
          </div>
          <div>
            <KobenhavnMap />
          </div>
        </Box>
        <Box className={classes.box}>
          <div>
            <LondonAddress />
          </div>
          <div>
            <LondonMap />
          </div>
        </Box>
      </Grid>
    </Container>
  );
}
