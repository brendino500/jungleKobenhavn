import React from "react";
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
    fontFamily: "Rubik",
    fontWeight: "bold",
    marginBottom: "-10%",
  },
  text: {
    color: "#1A3400",
    fontFamily: "Old Standard TT",
    fontSize: 20,
    width: 250,
  },
  price: {
    color: "#1A3400",
    fontFamily: "Rubik",
  },
  paper: {
    backgroundColor: "#EBE8E5",
    height: 80,
  },
  link: {
    textDecoration: "none",
  },
});

export default function PlantCard(props: PlantType) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <a href={`/plants/${props._id}`} className={classes.link}>
          <CardMedia className={classes.media} image={props.image} />
          <CardContent className={classes.paper}>
            <Typography className={classes.text} gutterBottom>
              {props.name}
            </Typography>
            <Typography className={classes.price}>£{props.price}.00</Typography>
          </CardContent>
        </a>
      </CardActionArea>
      <CardActions className={classes.paper}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Button fullWidth className={classes.button} size="small">
            Add to Cart
          </Button>
        </Grid>
      </CardActions>
    </Card>
  );
}
