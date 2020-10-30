import React from "react";
import { BasketContext } from "../providers/BasketContext";
import { showSinglePlant } from "../lib/api";

import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  Typography,
  Button,
  Snackbar,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.between("xs", "sm")]: {
      marginLeft: "7%",
      marginTop: "-7%"
    },
  },
  image: {
    height: 400,
    [theme.breakpoints.between("xs", "sm")]: {
      height: 275,
    },
  },
  plantName: {
    fontFamily: "Playfair Display",
    fontSize: 26,
    letterSpacing: 2,
    fontWeight: "bold",
    textTransform: "uppercase",
    width: 300,
    color: "#25462e",
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: 16
    },
  },

  text: {
    fontFamily: "Open Sans",
    fontSize: 16,
    width: 300,
    color: "#25462e",
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: 13,
      width: 275
    },
  },
  price: {
    fontFamily: "Playfair Display",
    fontWeight: "bold",
    letterSpacing: 2,
    color: "#25462e",
    fontSize: 20,
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: 14
    },
  },
  button: {
    color: "#EBE8E5",
    fontFamily: "Playfair Display",
    backgroundColor: "#365902",
    fontWeight: "bold",
    letterSpacing: 2,
    [theme.breakpoints.between("xs", "sm")]: {
      width: 275
    },
  },
  numbers: {
    fontFamily: "Open Sans",
    fontSize: 14,
    color: "#25462e",
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: 12
    },
  },
  plantInfo: {
    marginLeft: 50,
    color: "#25462e",
    [theme.breakpoints.between("xs", "sm")]: {
      marginLeft: 0,
      marginTop: 5
    },
  },
  snackbar: {
    color: "#EBE8E5",
    fontFamily: "Playfair Display",
    backgroundColor: "#497702",
    textAlign: "center",
  },
}));

export default function PlantIndividual(props: any) {
  const [data, setData] = React.useState();
  const [basketState, setBasketState] = React.useContext(BasketContext);
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  React.useEffect(() => {
    const getData = async () => {
      const res = await showSinglePlant(props.match.params.id);
      setData(res.data);
    };
    getData();
  }, [props.match.params.id]);

  const handleAddToBasket = () => {
    (setBasketState as Function)(
      (basketState as string[]).concat([props.match.params.id])
    );
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  if (!data) return null;
  return (
    <Container maxWidth="md" className={classes.root}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <img src={data.image} alt={data.name} className={classes.image} />
        <div className={classes.plantInfo}>
          <Typography className={classes.plantName}>{data.name}</Typography>
          <br />
          <Typography className={classes.price}>£{data.price}.00</Typography>
          <br />
          <Typography className={classes.text}>{data.description}</Typography>
          <br />
          <Typography className={classes.numbers}>
            Pot Size: {data.potSize}cm
          </Typography>
          <Typography className={classes.numbers}>
            Approx Height: {data.approxHeight}cm
          </Typography>
          <br />
          <Button
            className={classes.button}
            variant="contained"
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
            message={`You have added ${data.name} to your basket`}
          />
        </div>
      </Grid>
    </Container>
  );
}
