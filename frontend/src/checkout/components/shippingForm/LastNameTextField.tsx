import React from "react";
import useStyles from "../../styles/shippingFormStyles";
import { TextField } from "@material-ui/core";

export default function FirstNameTextField() {
  const classes = useStyles();
  return (
    <TextField
      className={classes.input}
      fullWidth
      required
      id="outlined-basic"
      label="Last Name"
      variant="outlined"
      color="primary"
      InputProps={{
        classes: {
          input: classes.inputText,
        },
      }}
      InputLabelProps={{
        classes: {
          root: classes.inputText,
          focused: classes.inputText,
        },
      }}
    />
  );
}
