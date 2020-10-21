import React from 'react'
import { getAllPlants } from '../lib/api'
import PlantCard from './PlantCard'

import { makeStyles } from '@material-ui/core/styles';
import { PlantType } from './PlantType';

export default function PlantIndex() {

  const useStyles = makeStyles({
  root: {
    padding: 10
  }
  });

  const [data, setData] = React.useState([])
  const classes = useStyles();

  const getData = async () => {
    const res = await getAllPlants()

    setData(res.data)
  }

  React.useEffect(() => {
    getData()
  }, [])

  if (!data) return null
  return (

    <>
      <div>
      {data.map((plant : PlantType) => (
        <PlantCard key={plant._id} {...plant} />
      ))}
      </div>
    </>
    // <PlantCard />
  )
}


