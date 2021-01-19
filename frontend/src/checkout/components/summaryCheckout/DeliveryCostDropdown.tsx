import React from "react";
import useStyles from "../../styles/summaryCheckoutStyles";
import { ShippingContext } from "../../../providers/ShippingContext";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

export default function DeliveryCostDropdown() {
  const classes = useStyles();
  const [shipping, setShipping] = React.useContext(ShippingContext);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    (setShipping as Function)(event.target.value as string | undefined);
  };

  return (
    <FormControl
      variant="outlined"
      fullWidth
      className={classes.deliverySelect}
    >
      <InputLabel id="shipping" className={classes.selectText}>
        Delivery
      </InputLabel>
      <Select
        className={classes.selectButton}
        labelId="shipping"
        id="shipping"
        value={shipping}
        onChange={handleChange}
        label="shipping"
        fullWidth
      >
        <MenuItem className={classes.menuItems} value={7}>
          Delivery - £7.00
        </MenuItem>
        <MenuItem value={0} className={classes.menuItems}>
          Pickup in Store - FREE
        </MenuItem>
      </Select>
    </FormControl>
  );
}
