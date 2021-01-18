import React from "react";
import PropTypes, { InferProps } from "prop-types";
import useStyles from "../../styles/shippingFormStyles";
import { TextField } from "@material-ui/core";

export default function TextFieldComponent({
  label,
}: InferProps<typeof TextFieldComponent.propTypes>) {
  const classes = useStyles();
  return (
    <TextField
      className={classes.input}
      fullWidth
      required
      id="outlined-basic"
      label={label}
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

TextFieldComponent.propTypes = {
  label: PropTypes.string.isRequired,
};
