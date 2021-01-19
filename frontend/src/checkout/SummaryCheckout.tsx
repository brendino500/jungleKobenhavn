import React from "react";
import { BasketContext } from "../providers/BasketContext";
import { ShippingContext } from "../providers/ShippingContext";
import { getPlantsInBasket } from "../lib/api";
import { PlantType } from "../plants/PlantType";
import { totalCostOfBasket } from "../utils/methods";
import ColorTheme from "../ColorTheme";
import useStyles from "./styles/summaryCheckoutStyles";
import DeliveryCostDropdown from "./components/summaryCheckout/DeliveryCostDropdown";
import CheckoutButton from "./components/summaryCheckout/CheckoutButton";
import TotalCost from "./components/summaryCheckout/TotalCost";
import ShippingTotal from "./components/summaryCheckout/ShippingTotal";
import SubtotalCost from "./components/summaryCheckout/SubtotalCost";

import {
  Container,
  Typography,
  Grid,
  Divider,
  ThemeProvider,
} from "@material-ui/core";

export default function SummaryCheckout() {
  const classes = useStyles();
  const [shipping, setShipping] = React.useContext(ShippingContext);
  const [basketState, setBasketState] = React.useContext(BasketContext);
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
  const totalCost = totalCostOfBasket(plantsInBasket) + shippingCost;

  return (
    <Container className={classes.root}>
      <Typography className={classes.title}>Order Summary</Typography>
      <Divider />
      <br />
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="flex-start"
      >
        <SubtotalCost />
        <ShippingTotal />
        <ThemeProvider theme={ColorTheme}>
          <DeliveryCostDropdown />
        </ThemeProvider>
        <Divider />
        <TotalCost totalCost={totalCost} />
        <Typography className={classes.smallText}>
          Delivery details and secure payment on the next page
        </Typography>
        <CheckoutButton />
      </Grid>
    </Container>
  );
}
