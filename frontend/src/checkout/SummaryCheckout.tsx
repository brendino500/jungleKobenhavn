import React from "react";
import { BasketContext } from "../providers/BasketContext";
import { ShippingContext } from "../providers/ShippingContext";
import { getPlantsInBasket } from "../lib/api";
import { PlantType } from "../plants/PlantType";
import { totalCostOfBasket } from "../utils/methods";
import ColorTheme from "../ColorTheme";

import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Typography,
  Grid,
  Select,
  Divider,
  FormControl,
  MenuItem,
  InputLabel,
  Button,
  ThemeProvider,
} from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 5,
    width: "auto",
  },
  title: {
    fontFamily: "Playfair Display",
    fontWeight: "bold",
    fontSize: 18,
    color: "#848380",
    marginTop: 12,
    letterSpacing: 3,
    [theme.breakpoints.between("lg", "xl")]: {
      fontSize: 28,
    },
  },
  text: {
    marginTop: "5%",
    fontFamily: "Open Sans",
    fontSize: 14,
    color: "#848380",
    [theme.breakpoints.between("lg", "xl")]: {
      fontSize: 17,
    },
  },
  smallText: {
    marginTop: "5%",
    fontFamily: "Open Sans",
    fontSize: 10,
    color: "#848380",
    [theme.breakpoints.between("lg", "xl")]: {
      fontSize: 14,
    },
  },
  deliverySelect: {
    marginTop: 10,
  },
  selectText: {
    fontFamily: "Open Sans",
    fontSize: 14,
    color: "#848380",
    [theme.breakpoints.between("lg", "xl")]: {
      fontSize: 15,
    },
  },
  selectButton: {
    color: "#848380",
    fontFamily: "Open Sans",
    fontSize: 14,
    [theme.breakpoints.between("lg", "xl")]: {
      fontSize: 16,
    },
  },
  menuItems: {
    fontFamily: "Open Sans",
    fontSize: 14,
  },
  button: {
    backgroundColor: "#25462e",
    marginTop: "5%",
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
  lockIcon: {
    color: "#EBE8E5",
    fontSize: 12,
    marginRight: "4%",
  },
  link: {
    textDecoration: "none",
  },
}));

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

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    (setShipping as Function)(event.target.value as string | undefined);
  };

  const shippingTotal = () => {
    if (!shipping) {
      return "FREE";
    } else {
      return `£${shipping}.00`;
    }
  };
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
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="flex-start"
        >
          <Typography className={classes.text}>Shipping</Typography>
          <Typography className={classes.text}>{shippingTotal()}</Typography>
        </Grid>
        <ThemeProvider theme={ColorTheme}>
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
        </ThemeProvider>
        <Divider />
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="flex-start"
        >
          <Typography className={classes.title}>Total</Typography>
          <Typography className={classes.title}>£{totalCost}.00</Typography>
        </Grid>
        <Typography className={classes.smallText}>
          Delivery details and secure payment on the next page
        </Typography>

        <FormControl fullWidth>
          <Link to={`/shipping`} className={classes.link}>
            <Button className={classes.button} variant="contained" fullWidth>
              <LockIcon className={classes.lockIcon} />
              <Typography className={classes.buttonText}>Checkout</Typography>
            </Button>
          </Link>
        </FormControl>
      </Grid>
    </Container>
  );
}
