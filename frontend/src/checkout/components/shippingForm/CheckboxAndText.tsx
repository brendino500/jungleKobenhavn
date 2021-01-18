import React from "react";
import { Checkbox, Typography } from "@material-ui/core";
import useStyles from "../../styles/shippingFormStyles";

export default function CheckboxAndText() {
  const [checked, setChecked] = React.useState(true);
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      <Typography className={classes.smallText}>
        Keep me up to date on news and exclusive offers
      </Typography>
    </>
  );
}
