import React from "react";
import { BasketContext } from "../providers/BasketContext";
import { getPlantsInBasket } from "../lib/api";
import { PlantType } from "../plants/PlantType";
import useStyles from "./styles/plantCardNavbarStyles";

import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Snackbar,
} from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";

export default function PlantCardNavbar() {
  const [open, setOpen] = React.useState(false);
  const [basketState, setBasketState] = React.useContext(BasketContext);
  const [plantsInBasket, setPlantsInBasket] = React.useState<
    (PlantType | undefined)[]
  >([]);
  const classes = useStyles();

  React.useEffect(() => {
    getPlantsInBasket(basketState as []).then(
      (plants: (PlantType | undefined)[]) => {
        setPlantsInBasket(plants);
      }
    );
  }, [basketState]);

  const handleClickDelete = (plantID: string) => {
    setOpen(true);
    const newBasketState = [...(basketState as string[])];
    (newBasketState as string[]).splice(
      (newBasketState as string[]).indexOf(plantID),
      1
    );
    (setBasketState as Function)(newBasketState);
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Container className={classes.root}>
      {plantsInBasket.map(
        (plant: PlantType | undefined, plantIndex: number) => {
          if (plant === undefined) {
            console.log("Plant ID not found");
          } else {
            return (
              <>
                <Link
                  to={`/plants/${plant._id}`}
                  className={classes.link}
                  key={plantIndex}
                >
                  <Card className={classes.card} elevation={0}>
                    <div className={classes.cardContent}>
                      <CardMedia
                        className={classes.image}
                        image={plant.image}
                        title={plant.name}
                      />
                      <CardContent className={classes.content}>
                        <IconButton
                          className={classes.cancelIcon}
                          onClick={() => {
                            handleClickDelete(plant._id);
                          }}
                        >
                          <CancelIcon className={classes.cancelIcon} />
                        </IconButton>
                        <div>
                          <Typography className={classes.plantName} noWrap>
                            {plant.name}
                          </Typography>
                          <Typography className={classes.price}>
                            £{plant.price}
                          </Typography>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </Link>
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
                  message={`You have removed ${plant.name} from your basket`}
                />
              </>
            );
          }
        }
      )}
    </Container>
  );
}
