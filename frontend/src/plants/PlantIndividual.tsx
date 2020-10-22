import React from "react";
import { showSinglePlant } from "../lib/api";
// import { PlantType } from "./PlantType";

import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    margin: 10,
    backgroundColor: "#25462e",
  },
  image: {
    height: 400,
  },
  plantName: {
    fontFamily: "Old Standard TT",
    fontSize: 20,
    letterSpacing: 3,
    fontWeight: "bold",
    textTransform: "uppercase",
    width: 300,
  },
  text: {
    fontFamily: "Rubik",
    fontSize: 14,
    width: 300,
  },
  price: {
    fontFamily: "Old Standard TT",
    fontWeight: "bold",
    letterSpacing: 3,
  },
  button: {
    color: "#C1BFBB",
    fontFamily: "Old Standard TT",
    backgroundColor: "#365902",
    fontWeight: "bold",
    letterSpacing: 2,
  },
  numbers: {
    fontFamily: "Rubik",
    fontSize: 12,
  },
  plantInfo: {
    marginLeft: 50,
  },
});

export default function PlantIndividual(props: any) {
  const [data, setData] = React.useState();
  const classes = useStyles();

  const getData = async () => {
    const res = await showSinglePlant(props.match.params.id);
    setData(res.data);
  };

  React.useEffect(() => {
    getData();
  });

  if (!data) return null;
  return (
    <Container maxWidth="md">
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
            href={`/basket`}
          >
            Add to Basket
          </Button>
        </div>
      </Grid>
    </Container>
  );
}
