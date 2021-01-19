import React from "react";
import PlantCardShipping from "./PlantCardShipping";
import { BasketContext } from "../providers/BasketContext";
import { getPlantsInBasket } from "../lib/api";
import { PlantType } from "../plants/PlantType";
import { totalCostOfBasket } from "../utils/methods";
import useStyles from "./styles/shippingSummaryStyles";
import PaymentButton from "./components/shippingSummary/PaymentButton";
import TotalCost from "./components/shippingSummary/TotalCost";

import {
  Container,
  Typography,
  Grid,
  Divider,
  Button,
} from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import { ShippingContext } from "../providers/ShippingContext";

export default function ShippingSummary() {
  const classes = useStyles();
  const [basketState, setBasketState] = React.useContext(BasketContext);
  const [shipping, setShipping] = React.useContext(ShippingContext);
  const [plantsInBasket, setPlantsInBasket] = React.useState<
    (PlantType | undefined)[]
  >([]);

  React.useEffect(() => {
    getPlantsInBasket(basketState as []).then(
      (plants: (PlantType | undefined)[]) => {
        setPlantsInBasket(plants);
      }
    );
  }, [basketState]);

  const shippingCost = typeof shipping === "number" ? shipping : 0;
  const basketCost = totalCostOfBasket(plantsInBasket);
  const totalCost = basketCost + shippingCost;

  return (
    <Container className={classes.root}>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Typography className={classes.title}>Summary</Typography>
        <div className={classes.content}>
          <PlantCardShipping />
          <Divider />
          <div>
            <Grid
              className={classes.summaryTotals}
              container
              direction="column"
              justify="space-between"
              alignItems="flex-start"
            >
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="flex-start"
              >
                <Typography className={classes.textSmall}>Subtotal</Typography>
                <Typography className={classes.textSmall}>
                  £{basketCost}.00
                </Typography>
              </Grid>

              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="flex-start"
              >
                <Typography className={classes.textSmall}>Shipping</Typography>
                <Typography className={classes.textSmall}>
                  £{shippingCost}.00
                </Typography>
              </Grid>
              <Divider />
              <TotalCost totalCost={totalCost} />
              <PaymentButton />
            </Grid>
          </div>
        </div>
      </Grid>
    </Container>
  );
}
