import React from "react";
import KobenhavenAddress from "./KobenhavenAddress";
import KobenhavnMap from "./KobenhavnMap";
import LondonAddress from "./LondonAddress";
import LondonMap from "./LondonMap";
import useStyles from "./styles/contactStyles";

import { Container, Typography, Grid, Box } from "@material-ui/core";

export default function Contact() {
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
