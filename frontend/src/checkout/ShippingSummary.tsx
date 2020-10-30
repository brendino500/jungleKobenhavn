import React from "react";
import PlantCardShipping from "./PlantCardShipping";
import { BasketContext } from "../providers/BasketContext";
import { getPlantsInBasket } from "../lib/api";
import { PlantType } from "../plants/PlantType";
import { totalCostOfBasket } from "../utils/methods";

import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Typography,
  Grid,
  Divider,
  Button,
} from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import { ShippingContext } from "../providers/ShippingContext";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 2,
    padding: 0,
    [theme.breakpoints.between("xs", "sm")]: {
      marginTop: 10,
    },
  },
  content: {
    width: 400,
    [theme.breakpoints.between("xs", "sm")]: {
      width: 330,
    },
  },
  title: {
    fontFamily: "Playfair Display",
    fontSize: 18,
    color: "#1A3400",
    letterSpacing: 2,
    [theme.breakpoints.between("lg", "xl")]: {
      fontSize: 22,
    },
  },
  largeText: {
    fontFamily: "Open Sans",
    color: "#1A3400",
    fontSize: 20,
    marginTop: "3%",
    [theme.breakpoints.between("lg", "xl")]: {
      fontSize: 22,
    },
  },
  textSmall: {
    fontFamily: "Open Sans",
    color: "#1A3400",
    fontSize: 12,
    [theme.breakpoints.between("lg", "xl")]: {
      fontSize: 16,
    },
  },
  summaryTotals: {
    marginTop: 5,
  },
  button: {
    backgroundColor: "#1A3400",
    marginTop: "5%",
    width: "400",
    flexGrow: 1,
    [theme.breakpoints.between("xs", "sm")]: {
      width: 330,
    },
  },
  buttonText: {
    fontFamily: "Playfair Display",
    fontSize: 12,
    color: "#EBE8E5",
    letterSpacing: 2,
    [theme.breakpoints.between("lg", "xl")]: {
      fontSize: 15,
    },
  },
  buttonSection: {
    display: "flex",
    flexGrow: 1,
    alignItems: "center",
  },
  lockIcon: {
    color: "#EBE8E5",
    fontSize: 12,
    marginRight: "4%",
    [theme.breakpoints.between("lg", "xl")]: {
      fontSize: 15,
    },
  },
  link: {
    textDecoration: "none",
    width: 400,
  },
}));

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
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="flex-start"
              >
                <Typography className={classes.largeText}>Total</Typography>
                <Typography className={classes.largeText}>
                  £{totalCost}.00
                </Typography>
              </Grid>

              <Link to={`/payment`} className={classes.link}>
                <Button
                  fullWidth
                  variant="contained"
                  className={classes.button}
                >
                  <LockIcon className={classes.lockIcon} />
                  <Typography className={classes.buttonText}>
                    Continue to secure payment
                  </Typography>
                </Button>
              </Link>
            </Grid>
          </div>
        </div>
      </Grid>
    </Container>
  );
}
