import React from "react";
import useStyles from "../../styles/summaryCheckoutStyles";
import { Grid, Typography } from "@material-ui/core";
import PropTypes, { InferProps } from "prop-types";

export default function TotalCost({
  totalCost,
}: InferProps<typeof TotalCost.propTypes>) {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="flex-start"
    >
      <Typography className={classes.title}>Total</Typography>
      <Typography className={classes.title}>£{totalCost}.00</Typography>
    </Grid>
  );
}

TotalCost.propTypes = {
  totalCost: PropTypes.number,
};
