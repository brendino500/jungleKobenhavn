import React from "react";
import useStyles from "../../styles/jokePaymentStyles";
import { Typography } from "@material-ui/core";

const NotARealSiteText = () => {
  const classes = useStyles();
  return (
    <Typography className={classes.text}>
      Unfortunately this isn't a real site (but I hope I fooled you!).
      {<br />}
      However, here is a list of some online plant shops if you do want to buy
      some.
    </Typography>
  );
};

export default NotARealSiteText;
