import React from "react";
import TextFieldComponent from "./TextFieldComponent";
import DropdownCountry from "./DropdownCountry";

import { Hidden } from "@material-ui/core";

export default function DesktopCountryAndPostcode() {
  return (
    <Hidden smUp>
      <DropdownCountry />
      <TextFieldComponent label="Postcode" />
    </Hidden>
  );
}
