import React from "react";
import useStyles from "../../styles/shippingFormStyles";
import TextFieldComponent from "./TextFieldComponent";
import DropdownCountry from "./DropdownCountry";
import {
  Hidden,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
} from "@material-ui/core";

export default function MobileCountryAndPostcode() {
  const classes = useStyles();
  const [country, setCountry] = React.useState("");

  const handleChangeSelect = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCountry(event.target.value as string);
  };

  return (
    <Hidden smUp>
      <DropdownCountry />
      <TextFieldComponent label="Postcode" />
    </Hidden>
  );
}
