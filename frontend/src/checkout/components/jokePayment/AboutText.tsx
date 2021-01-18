import React from "react";
import useStyles from "../../styles/jokePaymentStyles";
import { Typography } from "@material-ui/core";

const AboutText = () => {
  const classes = useStyles();
  return (
    <Typography className={classes.contactText}>
      Hi, I'm Brenda and I made this site all by myself after 3 months of
      coding.
      {<br />}
      {<br />}
      I'm currently looking for a front end developer role as I want to learn
      from others and share my creativity.
      {<br />}
      {<br />}
      If you would like to see more of my projects or even give me a stalk,
      please check out these links below:
    </Typography>
  );
};

export default AboutText;
