import React from "react";
import useStyles from "../../styles/jokePaymentStyles";
import PropTypes, { InferProps } from "prop-types";
import { ListItem, SvgIcon, Typography } from "@material-ui/core";

export default function AboutLinks({
  link,
  socialMedia,
  icon,
}: InferProps<typeof AboutLinks.propTypes>) {
  const classes = useStyles();
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={classes.link}
    >
      <ListItem>
        {icon}
        <Typography className={classes.iconText}>{socialMedia}</Typography>
      </ListItem>
    </a>
  );
}

AboutLinks.propTypes = {
  link: PropTypes.string.isRequired,
  socialMedia: PropTypes.string.isRequired,
  icon: SvgIcon,
};
