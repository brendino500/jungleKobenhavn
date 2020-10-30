import React from "react";
import { BasketContext } from "../providers/BasketContext";
import { getPlantsInBasket } from "../lib/api";
import { PlantType } from "../plants/PlantType";

import { Link } from "react-router-dom";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      padding: 0,
    },
    card: {
      margin: 5,
    },
    details: {
      display: "flex",
      flexDirection: "column",
    },
    content: {
      flex: "1 0 auto",
    },
    image: {
      width: 100,
      height: 100,
    },
    plantName: {
      fontFamily: "Playfair Display",
      color: "#1A3400",
      [theme.breakpoints.between("xs", "sm")]: {
        width: 150
      },
    },
    link: {
      textDecoration: "none",
      width: "md",
      padding: 0,
    },
    cardContent: {
      display: "flex",
      flexDirection: "row",
    },
    price: {
      fontFamily: "Playfair Display",
      fontSize: 16,
      color: "#365902",
    },
  })
);

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
                      <div>
                        <Typography className={classes.plantName} noWrap>
                          {plant.name}
                        </Typography>
                      </div>

                      <div>
                        <Typography className={classes.price}>
                          £{plant.price}
                        </Typography>
                      </div>
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
