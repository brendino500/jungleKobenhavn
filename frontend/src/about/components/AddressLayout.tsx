import React from "react";
import PropTypes, { InferProps } from "prop-types";
import { Typography } from "@material-ui/core";
import useStyles from "../styles/kobenhavenAddressStyles";

export default function AddressLayout({
  country,
  address1,
  address2,
  address3,
  emailLink,
  email,
  phoneNumber,
}: InferProps<typeof AddressLayout.propTypes>) {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.title}>{country}</Typography>
      <Typography className={classes.text}>
        {address1}
        {<br />}
        {address2}
        {<br />}
        {address3}
      </Typography>
      <br />
      <Typography className={classes.text2}>
        <a href={emailLink} className={classes.email}>
          {email}
        </a>
        {<br />}
        {phoneNumber}
      </Typography>
    </>
  );
}

AddressLayout.propTypes = {
  country: PropTypes.string.isRequired,
  address1: PropTypes.string.isRequired,
  address2: PropTypes.string.isRequired,
  address3: PropTypes.string.isRequired,
  emailLink: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
};
