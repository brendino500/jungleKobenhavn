import React from "react";
import useStyles from "../../styles/summaryCheckoutStyles";
import { PlantType } from "../../../plants/PlantType";
import { totalCostOfBasket } from "../../../utils/methods";
import { Grid, Typography } from "@material-ui/core";

export default function SubtotalCost() {
  const classes = useStyles();
  const [plantsInBasket, setPlantsInBasket] = React.useState<
    (PlantType | undefined)[]
  >([]);

  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="flex-start"
    >
      <Typography className={classes.text}>Subtotal</Typography>
      <Typography className={classes.text}>
        £{totalCostOfBasket(plantsInBasket)}.00
      </Typography>
    </Grid>
  );
}
