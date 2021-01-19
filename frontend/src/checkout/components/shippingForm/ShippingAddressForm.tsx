import React from "react";
import useStyles from "../../styles/shippingFormStyles";
import { Typography } from "@material-ui/core";
import DesktopCountryAndPostcode from "./DesktopCountryAndPostcode";
import DesktopFirstLastName from "./DesktopFirstLastName";
import MobileCountryAndPostcode from "./MobileCountryAndPostcode";
import MobileFirstLastName from "./MobileFirstLastName";
import MiddleForm from "./MiddleForm";

export default function ShippingAddressForm() {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.text}>Shipping Address</Typography>
      <form className={classes.form} autoComplete="off">
        <DesktopFirstLastName />
        <MobileFirstLastName />
        <div className={classes.middleForm}>
          <MiddleForm />
        </div>
        <DesktopCountryAndPostcode />
        <MobileCountryAndPostcode />
      </form>
    </>
  );
}
