import React from "react";

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
} from "@material-ui/core";
import { PlantType } from "./PlantType";

const useStyles = makeStyles({
  root: {
    margin: 20,
  },
  media: {
    height: 250,
    width: 250,
  },
  button: {
    color: "#f2e5c6",
    fontFamily: "Rubik",
    fontWeight: "bold",
  },
  text: {
    color: "#f2e5c6",
    fontFamily: "Rubik",
    fontWeight: "bold",
    fontSize: 13,
  },
  price: {
    color: "#f2e5c6",
    fontFamily: "Old Standard TT",
  },
  paper: {
    backgroundColor: "#2a5034",
  },
});

export default function PlantCard(props: PlantType) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={props.image} />
        <CardContent className={classes.paper}>
          <Typography className={classes.text} gutterBottom>
            {props.name}
          </Typography>
          <Typography className={classes.price}>£{props.price}.00</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.paper}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Button className={classes.button} size="small">
            View
          </Button>
          <Button className={classes.button} size="small">
            Add to Cart
          </Button>
        </Grid>
      </CardActions>
    </Card>
  );
}
