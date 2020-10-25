import React from "react";
import { BasketContext } from "../providers/BasketContext";
import { getAllPlants } from "../lib/api";
import { PlantType } from "../plants/PlantType";

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
  image: {
    height: 50,
  },
  plantName: {
    fontFamily: "Open Sans",
    fontSize: 10,
  },
  price: {
    fontFamily: "Playfair Display",
    fontSize: 10,
  },
});

export default function PlantCardNavbar() {
  const [basketState, setBasketState] = React.useContext(BasketContext);
  const [data, setData] = React.useState([]);
  const classes = useStyles();

  const getData = async () => {
    const res = await getAllPlants();
    setData(res.data);
  };

  React.useEffect(() => {
    getData();
  }, []);

  console.log("plantcardnav", basketState);

  const plantsInBasket: (PlantType | undefined)[] = (basketState as []).map(
    (plantID: string): PlantType | undefined => {
      return data.find((value: PlantType) => {
        return value._id === plantID;
      });
    }
  );

  return (
    <Container className={classes.root}>
      {plantsInBasket.map((plant: PlantType | undefined) => {
        if (plant === undefined) {
          console.log("Plant ID not found");
        } else {
          return (
            <Card key={plant.name}>
              <CardMedia
                className={classes.image}
                image={plant.image}
                title={plant.name}
              />
              <CardContent>
                <Typography className={classes.plantName}>
                  {plant.name}
                </Typography>
                <Typography className={classes.price}>
                  £{plant.price}
                </Typography>
              </CardContent>
            </Card>
          );
        }
      })}
    </Container>
  );
}
