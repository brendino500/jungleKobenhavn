import React from "react";
import { Hidden } from "@material-ui/core";

import FirstNameTextField from "./FirstNameTextField";
import LastNameTextField from "./LastNameTextField";

export default function MobileFirstLastName() {
  return (
    <Hidden smUp>
      <FirstNameTextField />
      <LastNameTextField />
    </Hidden>
  );
}
