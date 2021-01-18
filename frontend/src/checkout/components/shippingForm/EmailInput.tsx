import React from "react";
import { Typography, TextField } from "@material-ui/core";
import useStyles from "../../styles/shippingFormStyles";
import CheckboxAndText from "./CheckboxAndText";

export default function EmailInput() {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.text}>Contact Information</Typography>
      <TextField
        className={classes.input}
        fullWidth
        required
        id="outlined-basic"
        label="Email"
        variant="outlined"
        color="secondary"
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
      <div className={classes.newsCheckbox}>
        <CheckboxAndText />
      </div>
    </>
  );
}
