import React from "react";
import useStyles from "../../styles/shippingSummaryStyles";
import { Button, Typography } from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import { Link } from "react-router-dom";

export default function PaymentButton() {
  const classes = useStyles();

  return (
    <Link to={`/payment`} className={classes.link}>
      <Button fullWidth variant="contained" className={classes.button}>
        <LockIcon className={classes.lockIcon} />
        <Typography className={classes.buttonText}>
          Continue to secure payment
        </Typography>
      </Button>
    </Link>
  );
}
