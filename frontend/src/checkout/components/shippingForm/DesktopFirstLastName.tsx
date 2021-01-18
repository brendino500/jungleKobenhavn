import React from "react";
import { Hidden } from "@material-ui/core";

import useStyles from "../../styles/shippingFormStyles";
import TextFieldComponent from "./TextFieldComponent";

export default function DesktopFirstLastName() {
  const classes = useStyles();
  return (
    <Hidden smDown>
      <div className={classes.doubleField}>
        <TextFieldComponent label="First Name" />
        <TextFieldComponent label="Last Name" />
      </div>
    </Hidden>
  );
}
