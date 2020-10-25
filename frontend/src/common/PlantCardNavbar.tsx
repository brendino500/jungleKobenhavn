import React from "react";
import { PlantType } from "../plants/PlantType";
import { BasketContext } from "../providers/BasketContext";
import { getAllPlants } from "../lib/api";

import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    margin: 5,
  },
  image: {},
});

export default function PlantCardNavbar() {
  const [basketState, setBasketState] = React.useContext(BasketContext);
  const classes = useStyles();

  console.log("plantcardnav", basketState);

  if (!basketState) {
    return null;
  } else {
    return (
      <Container className={classes.root}>
        <Card>
          <CardMedia
            className={classes.image}
            // image={props.image}
            // title={props.name}
          />
          <CardContent>
            <Typography>Plant Name</Typography>
            <Typography>£</Typography>
          </CardContent>
        </Card>
      </Container>
    );
  }
}
