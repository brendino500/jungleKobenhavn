import React from "react";
import useStyles from "./styles/londonAddressStyles";
import AddressLayout from "./components/AddressLayout";

import { Container } from "@material-ui/core";

export default function LondonAddress() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <AddressLayout
        country="London"
        address1="9 Morocco Street"
        address2="Bermondsey, London"
        address3="SE1 3HB"
        emailLink="mailto:hello@junglekobenhavn.co.uk"
        email="hello@junglekobenhavn.co.uk"
        phoneNumber="+44 2087 342 900"
      />
    </Container>
  );
}
