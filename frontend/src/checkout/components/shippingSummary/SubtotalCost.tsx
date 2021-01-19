import React from "react";
import useStyles from "../../styles/shippingSummaryStyles";
import { Grid, Typography } from "@material-ui/core";
import PropTypes, { InferProps } from "prop-types";

export default function SubtotalCost({
  basketCost,
}: InferProps<typeof SubtotalCost.propTypes>) {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="flex-start"
    >
      <Typography className={classes.textSmall}>Subtotal</Typography>
      <Typography className={classes.textSmall}>£{basketCost}.00</Typography>
    </Grid>
  );
}

SubtotalCost.propTypes = {
  basketCost: PropTypes.number,
};
