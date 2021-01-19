import React from "react";
import ColorTheme from "../ColorTheme";
import useStyles from "./styles/shippingFormStyles";
import EmailInput from "./components/shippingForm/EmailInput";
import ShippingAddressForm from "./components/shippingForm/ShippingAddressForm";

import { Container, Grid, ThemeProvider } from "@material-ui/core";

export default function ShippingForm() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={ColorTheme}>
      <Container className={classes.root}>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Container className={classes.emailInfo}>
            <EmailInput />
          </Container>
          <Container className={classes.shippingAddress}>
            <ShippingAddressForm />
          </Container>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
