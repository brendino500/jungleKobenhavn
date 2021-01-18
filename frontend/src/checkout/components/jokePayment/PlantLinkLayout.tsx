import React from "react";
import useStyles from "../../styles/jokePaymentStyles";
import PropTypes, { InferProps } from "prop-types";
import { ListItem, Button } from "@material-ui/core";

export default function PlantLinkLayout({
  link,
  plantShop,
}: InferProps<typeof PlantLinkLayout.propTypes>) {
  const classes = useStyles();
  return (
    <ListItem>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={classes.link}
      >
        <Button className={classes.button}>{plantShop}</Button>
      </a>
    </ListItem>
  );
}

PlantLinkLayout.propTypes = {
  link: PropTypes.string.isRequired,
  plantShop: PropTypes.string.isRequired,
};
