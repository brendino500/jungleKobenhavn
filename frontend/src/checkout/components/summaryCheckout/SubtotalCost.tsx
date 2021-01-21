import React from 'react'
import useStyles from '../../styles/summaryCheckoutStyles'
import PropTypes, { InferProps } from 'prop-types'
import { Grid, Typography } from '@material-ui/core'

export default function SubtotalCost({
  subtotal,
}: InferProps<typeof SubtotalCost.propTypes>) {
  const classes = useStyles()

  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="flex-start"
    >
      <Typography className={classes.text}>Subtotal</Typography>
      <Typography className={classes.text}>£{subtotal}.00</Typography>
    </Grid>
  )
}

SubtotalCost.propTypes = {
  subtotal: PropTypes.number,
}
