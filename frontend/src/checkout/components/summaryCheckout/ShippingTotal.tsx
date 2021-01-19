import React from "react";
import useStyles from "../../styles/summaryCheckoutStyles";
import { ShippingContext } from "../../../providers/ShippingContext";
import { Grid, Typography } from "@material-ui/core";

export default function ShippingTotal() {
  const classes = useStyles();
  const [shipping, setShipping] = React.useContext(ShippingContext);

  const shippingTotal = () => {
    if (!shipping) {
      return "FREE";
    } else {
      return `£${shipping}.00`;
    }
  };

  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="flex-start"
    >
      <Typography className={classes.text}>Shipping</Typography>
      <Typography className={classes.text}>{shippingTotal()}</Typography>
    </Grid>
  );
}
