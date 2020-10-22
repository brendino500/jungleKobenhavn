import React from "react";
import { showSinglePlant } from "../lib/api";
// import { PlantType } from "./PlantType";

import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    margin: 10,
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
  },
  text: {
    fontFamily: "Rubik",
    fontSize: 12,
  },
  price: {
    fontFamily: "Old Standard TT",
    fontWeight: "bold",
    letterSpacing: 3,
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
    <Container>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
      >
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="flex-start"
        >
          <img src={data.image} alt={data.name} className={classes.image} />
        </Grid>

        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="flex-start"
        >
          <Typography className={classes.plantName}>{data.name}</Typography>
          <br />
          <Typography className={classes.price}>£{data.price}.00</Typography>
          <br />
          <Typography className={classes.text}>{data.description}</Typography>
          <br />
          <Typography className={classes.text}>
            Pot Size: {data.potSize}cm
          </Typography>
          <Typography className={classes.text}>
            Approx Height: {data.approxHeight}cm
          </Typography>
        </Grid>
        {/* </Grid> */}
      </Grid>
    </Container>
  );
}
