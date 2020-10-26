import React from "react";

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
} from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";

export default function SummaryCheckout() {
  const useStyles = makeStyles({
    root: {
      margin: 5,
    },
    title: {
      fontFamily: "Playfair Display",
      fontWeight: "bold",
      fontSize: 18,
      color: "#848380",
      marginTop: 12,
      // textTransform: "uppercase",
      letterSpacing: 3,
    },
    text: {
      marginTop: "5%",
      fontFamily: "Open Sans",
      fontSize: 14,
      color: "#848380",
    },
    smallText: {
      marginTop: "5%",
      fontFamily: "Open Sans",
      fontSize: 10,
      color: "#848380",
    },
    deliverySelect: {
      marginTop: 10,
    },
    selectText: {
      fontFamily: "Open Sans",
      fontSize: 14,
      color: "#848380",
    },
    selectButton: {
      color: "#848380",
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
    },
    lockIcon: {
      color: "#EBE8E5",
      fontSize: 12,
      marginRight: "4%",
    },
  });

  const classes = useStyles();

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
          <Typography className={classes.text}>£</Typography>
        </Grid>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="flex-start"
        >
          <Typography className={classes.text}>Shipping</Typography>
          <Typography className={classes.text}>£</Typography>
        </Grid>
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
            // value={shipping}
            // onChange={handleChange}
            label="Age"
            fullWidth
          >
            <MenuItem value="" className={classes.menuItems}>
              <em>None</em>
            </MenuItem>
            <MenuItem className={classes.menuItems}>Delivery - £6.99</MenuItem>
            <MenuItem className={classes.menuItems}>Pickup in Store</MenuItem>
          </Select>
        </FormControl>
        <Divider />
        <Typography className={classes.title}>Total</Typography>
        <Typography className={classes.smallText}>
          Delivery details and secure payment on the next page
        </Typography>
        <Button className={classes.button} fullWidth variant="contained">
          <LockIcon className={classes.lockIcon} />
          <Typography className={classes.buttonText}>Checkout</Typography>
        </Button>
      </Grid>
    </Container>
  );
}
