import React from 'react'
import { showSinglePlant } from '../lib/api'

import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    margin: 10
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
    <Container>
      
    </Container>
  )
}