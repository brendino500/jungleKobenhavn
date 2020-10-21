import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import { PlantType } from './PlantType';

const useStyles = makeStyles({
  root: {
    margin: 20
  },
  media: {
    height: 250,
  },
});

export default function PlantCard(props: PlantType) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
        />
        <CardContent>
          <Typography gutterBottom>
            {props.name}
          </Typography>
          <Typography>
            £{props.price}.00
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          View 
        </Button>
        <Button size="small" color="primary">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}