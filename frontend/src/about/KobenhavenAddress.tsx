import React from "react";
import useStyles from "./styles/kobenhavenAddressStyles";
import AddressLayout from "./components/AddressLayout";

import { Container } from "@material-ui/core";

export default function KobenhavnAddress() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <AddressLayout
        country="Denmark"
        address1="Fælledvej 14-18"
        address2="2200 København"
        address3="Denmark"
        emailLink="mailto:hej@junglekobenhavn.dk"
        email="hej@junglekobenhavn.dk"
        phoneNumber="+45 60 34 66 12"
      />
    </Container>
  );
}
