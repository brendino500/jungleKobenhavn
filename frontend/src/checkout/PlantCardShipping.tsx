import React from "react";
import { BasketContext } from "../providers/BasketContext";
import { getPlantsInBasket } from "../lib/api";
import { PlantType } from "../plants/PlantType";
import useStyles from "./styles/plantCardShippingStyles";

import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";

export default function PlantCardCheckout() {
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
  }, []);

  return (
    <Container className={classes.root}>
      {plantsInBasket.map((plant: PlantType | undefined) => {
        if (plant === undefined) {
          console.log("Plant ID not found");
        } else {
          return (
            <Link
              to={`/plants/${plant._id}`}
              className={classes.link}
              key={plant.name}
            >
              <Card className={classes.card} elevation={0}>
                <div className={classes.cardContent}>
                  <CardMedia
                    className={classes.image}
                    image={plant.image}
                    title={plant.name}
                  />
                  <CardContent className={classes.content}>
                    <Grid
                      container
                      direction="row"
                      justify="space-between"
                      alignItems="center"
                    >
                      <Typography className={classes.plantName} noWrap>
                        {plant.name}
                      </Typography>

                      <Typography className={classes.price}>
                        £{plant.price}
                      </Typography>
                    </Grid>
                  </CardContent>
                </div>
              </Card>
            </Link>
          );
        }
      })}
    </Container>
  );
}
