import React from "react";
import { Hidden } from "@material-ui/core";

import TextFieldComponent from "./TextFieldComponent";

export default function MobileFirstLastName() {
  return (
    <Hidden smUp>
      <TextFieldComponent label="First Name" />
      <TextFieldComponent label="Last Name" />
    </Hidden>
  );
}
