import React from "react";
import TextFieldComponent from "./TextFieldComponent";
import DropdownCountry from "./DropdownCountry";
import useStyles from "../../styles/shippingFormStyles";

import { Hidden } from "@material-ui/core";

export default function DesktopCountryAndPostcode() {
  const classes = useStyles();
  return (
    <Hidden smDown>
      <div className={classes.doubleField}>
        <DropdownCountry />
        <TextFieldComponent label="Postcode" />
      </div>
    </Hidden>
  );
}
