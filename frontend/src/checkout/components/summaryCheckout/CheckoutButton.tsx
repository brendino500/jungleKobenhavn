import React from "react";
import useStyles from "../../styles/summaryCheckoutStyles";
import { FormControl, Button, Typography } from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import { Link } from "react-router-dom";

export default function CheckoutButton() {
  const classes = useStyles();

  return (
    <FormControl fullWidth>
      <Link to={`/shipping`} className={classes.link}>
        <Button className={classes.button} variant="contained" fullWidth>
          <LockIcon className={classes.lockIcon} />
          <Typography className={classes.buttonText}>Checkout</Typography>
        </Button>
      </Link>
    </FormControl>
  );
}
