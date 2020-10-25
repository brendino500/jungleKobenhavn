import React from "react";
import { BasketContext } from "../providers/BasketContext";
import { getAllPlants } from "../lib/api";
import { PlantType } from "../plants/PlantType";

import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    margin: 5,
    // display: "flex",
  },
  image: {
    height: 75,
    width: 75,
  },
  plantName: {
    fontFamily: "Open Sans",
    fontSize: 10,
    color: "#365902",
  },
  price: {
    fontFamily: "Playfair Display",
    fontSize: 10,
    color: "#365902",
  },
  content: {
    backgroundColor: "#C1BFBB",
    display: "flex",
  },
  card: {
    elevation: 0,
    margin: 2,
  },
  cardContent: {
    display: "flex",
    flexDirection: "row",
  },
  link: {
    textDecoration: "none",
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
            <Link to={`/plants/${plant._id}`} className={classes.link}>
              <Card key={plant.name} className={classes.card} elevation={0}>
                <div className={classes.cardContent}>
                  <CardMedia
                    className={classes.image}
                    image={plant.image}
                    title={plant.name}
                  />
                  <CardContent className={classes.content}>
                    <Typography className={classes.plantName}>
                      {plant.name}
                    </Typography>
                    <Typography className={classes.price}>
                      £{plant.price}
                    </Typography>
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
