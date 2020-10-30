import React, { ComponentPropsWithoutRef } from "react";
import { getAllPlants } from "../lib/api";
import { PlantType } from "./PlantType";
import PlantCard from "./PlantCard";

import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    padding: 10,
  },
  title: {
    fontFamily: "Playfair Display",
    fontWeight: "bold",
    fontSize: 35,
    letterSpacing: 7,
    textTransform: "uppercase",
    textAlign: "center",
    color: "#1A3400",
    marginBottom: "6%",
  },
});

export default function PlantIndex(props: ComponentPropsWithoutRef<any>) {
  const [data, setData] = React.useState([]);
  const classes = useStyles();

  const getData = async () => {
    const res = await getAllPlants();
    setData(res.data);
  };

  React.useEffect(() => {
    getData();
  }, []);

  const filtered = () => {
    const searchTerm = props.location.search.replace("?search=", "");
    const re = new RegExp(searchTerm, "i");
    return data.filter((plant: PlantType) => re.test(plant.name));
  };

  if (!data) return null;
  return (
    <div className={classes.root}>
      <Typography className={classes.title}>
        <b>House Plants</b>
      </Typography>
      <Container>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          {filtered().map((plant: PlantType) => (
            <PlantCard key={plant._id} {...plant} />
          ))}
        </Grid>
      </Container>
    </div>
  );
}
