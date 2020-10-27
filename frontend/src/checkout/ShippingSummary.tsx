import React from "react";
import PlantCardCheckout from "./PlantCardCheckout";
import { BasketContext } from "../providers/BasketContext";
import { getPlantsInBasket } from "../lib/api";
import { PlantType } from "../plants/PlantType";

import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Typography,
  Grid,
  Divider,
  Button,
} from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";

const useStyles = makeStyles({
  root: {
    margin: 2,
  },
  title: {
    fontFamily: "Playfair Display",
    fontSize: 18,
    color: "#1A3400",
    letterSpacing: 2,
  },
  textSmall: {
    fontFamily: "Open Sans",
    color: "#1A3400",
    fontSize: 12,
  },
  summaryTotals: {
    marginTop: 5,
  },
  button: {
    backgroundColor: "#1A3400",
    marginTop: "5%",
  },
  buttonText: {
    fontFamily: "Playfair Display",
    fontSize: 12,
    color: "#EBE8E5",
    letterSpacing: 2,
  },
  lockIcon: {
    color: "#EBE8E5",
    fontSize: 12,
    marginRight: "4%",
  },
});

export default function ShippingSummary() {
  const classes = useStyles();
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

  return (
    <Container className={classes.root} maxWidth="sm">
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Typography className={classes.title}>Summary</Typography>
        <PlantCardCheckout />
        <Divider />
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
            <Typography className={classes.textSmall}>£.00</Typography>
          </Grid>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
          >
            <Typography className={classes.textSmall}>Shipping</Typography>
            <Typography className={classes.textSmall}>£.00</Typography>
          </Grid>
          <Divider />
          <Button variant="contained" fullWidth className={classes.button}>
            <LockIcon className={classes.lockIcon} />
            <Typography className={classes.buttonText}>
              Continue to secure payment
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
