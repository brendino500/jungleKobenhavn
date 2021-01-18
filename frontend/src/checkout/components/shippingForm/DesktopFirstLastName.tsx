import React from "react";
import { Hidden } from "@material-ui/core";

import useStyles from "../../styles/shippingFormStyles";
import FirstNameTextField from "./FirstNameTextField";
import LastNameTextField from "./LastNameTextField";

export default function DesktopFirstLastName() {
  const classes = useStyles();
  return (
    <Hidden smDown>
      <div className={classes.doubleField}>
        <FirstNameTextField />
        <LastNameTextField />
      </div>
    </Hidden>
  );
}
