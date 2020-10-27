import React from "react";
import { BasketContext } from "../providers/BasketContext";

import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
  Snackbar,
} from "@material-ui/core";
import { PlantType } from "./PlantType";

const useStyles = makeStyles({
  root: {
    margin: 20,
  },
  media: {
    height: 250,
    maxWidth: 300,
  },
  button: {
    color: "#365902",
    fontFamily: "Open Sans",
    fontWeight: "bold",
    marginBottom: "-10%",
    letterSpacing: 1,
  },
  text: {
    color: "#1A3400",
    fontFamily: "Playfair Display",
    fontSize: 20,
    width: 250,
  },
  price: {
    color: "#1A3400",
    fontFamily: "Playfair Display",
    fontWeight: "bold",
  },
  paper: {
    backgroundColor: "#EBE8E5",
    height: 80,
  },
  link: {
    textDecoration: "none",
  },
  snackbar: {
    color: "#EBE8E5",
    fontFamily: "Playfair Display",
    backgroundColor: "#497702",
    textAlign: "center",
  },
});

export default function PlantCard(props: PlantType) {
  const [basketState, setBasketState] = React.useContext(BasketContext);
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleAddToBasket = () => {
    (setBasketState as Function)((basketState as string[]).concat([props._id]));
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Link to={`/plants/${props._id}`} className={classes.link}>
          <CardMedia className={classes.media} image={props.image} />
          <CardContent className={classes.paper}>
            <Typography className={classes.text} gutterBottom>
              {props.name}
            </Typography>
            <Typography className={classes.price}>£{props.price}.00</Typography>
          </CardContent>
        </Link>
      </CardActionArea>
      <CardActions className={classes.paper}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Button
            fullWidth
            className={classes.button}
            size="small"
            onClick={handleAddToBasket}
          >
            Add to Basket
          </Button>
          <Snackbar
            ContentProps={{
              classes: {
                root: classes.snackbar,
              },
            }}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
            message={`You have added ${props.name} to your basket`}
          />
        </Grid>
      </CardActions>
    </Card>
  );
}
