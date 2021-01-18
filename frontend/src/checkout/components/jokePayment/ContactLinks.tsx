import React from "react";
import useStyles from "../../styles/jokePaymentStyles";
import { List } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import LinkIcon from "@material-ui/icons/Link";
import AboutLinks from "./AboutLinks";

const ContactLinks = () => {
  const classes = useStyles();
  const github = <GitHubIcon className={classes.icons} />;
  const website = <LinkIcon className={classes.icons} />;
  const linkedIn = <LinkedInIcon className={classes.icons} />;
  return (
    <List className={classes.contactList}>
      <AboutLinks
        link="https://github.com/brendino500"
        socialMedia="GitHub"
        icon={github}
      />
      <AboutLinks
        link="https://www.linkedin.com/in/brendaty/"
        socialMedia="LinkedIn"
        icon={linkedIn}
      />
      <AboutLinks
        link="https://brendaty.com/"
        socialMedia="Website"
        icon={website}
      />
    </List>
  );
};

export default ContactLinks;
