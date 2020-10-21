import React, { useEffect } from 'react';
import { showSinglePlant } from '../lib/api'

import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function PlantIndividual(props: any) {
  const [data, setData] = React.useState()
  const classes = useStyles();

  const getData = async () => {
    const res = await showSinglePlant(props.match.params.id)
    setData(res.data)
  }

  React.useEffect(() => {
    getData()
  }, [])

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Plant Name
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Description
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