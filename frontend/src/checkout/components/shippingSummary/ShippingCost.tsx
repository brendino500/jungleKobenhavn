import React from "react";
import useStyles from "../../styles/shippingSummaryStyles";
import { Grid, Typography } from "@material-ui/core";
import PropTypes, { InferProps } from "prop-types";

export default function ShippingCost({
  shippingCost,
}: InferProps<typeof ShippingCost.propTypes>) {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="flex-start"
    >
      <Typography className={classes.textSmall}>Shipping</Typography>
      <Typography className={classes.textSmall}>£{shippingCost}.00</Typography>
    </Grid>
  );
}

ShippingCost.propTypes = {
  shippingCost: PropTypes.number,
};
