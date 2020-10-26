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
    },
    card: {
      width: "sm",
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
    },
    link: {
      textDecoration: "none",
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

  console.log("plantcardcheckout", plantsInBasket);

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
                      <Typography className={classes.plantName}>
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
    // <Card className={classes.root}>
    //   <div className={classes.details}>
    //     <CardContent className={classes.content}>
    //       <Typography className={classes.plantName}>Live From Space</Typography>
    //       <Typography variant="subtitle1" color="textSecondary">
    //         Mac Miller
    //       </Typography>
    //     </CardContent>
    //     <div className={classes.controls}>
    //       <IconButton aria-label="previous">
    //         {theme.direction === "rtl" ? (
    //           <SkipNextIcon />
    //         ) : (
    //           <SkipPreviousIcon />
    //         )}
    //       </IconButton>
    //       <IconButton aria-label="play/pause">
    //         <PlayArrowIcon className={classes.playIcon} />
    //       </IconButton>
    //       <IconButton aria-label="next">
    //         {theme.direction === "rtl" ? (
    //           <SkipPreviousIcon />
    //         ) : (
    //           <SkipNextIcon />
    //         )}
    //       </IconButton>
    //     </div>
    //   </div>
    //   <CardMedia
    //     className={classes.cover}
    //     image="/static/images/cards/live-from-space.jpg"
    //     title="Live from space album cover"
    //   />
    // </Card>
  );
}
