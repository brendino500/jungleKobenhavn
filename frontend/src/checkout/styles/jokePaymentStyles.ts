import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0 auto",
  },
  textSection: {
    marginTop: "3%",
  },
  title: {
    fontFamily: "Playfair Display",
    fontSize: 50,
    color: "#497702",
    letterSpacing: 5,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  text: {
    fontFamily: "Open Sans",
    color: "#848380",
    fontSize: 14,
    [theme.breakpoints.between("lg", "xl")]: {
      fontSize: 18,
    },
  },
  list: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    color: "#497702",
  },
  link: {
    textDecoration: "none",
  },
  contactText: {
    fontFamily: "Open Sans",
    color: "#848380",
    fontSize: 14,
    [theme.breakpoints.between("xs", "sm")]: {
      marginTop: 50,
    },
    [theme.breakpoints.between("lg", "xl")]: {
      fontSize: 16,
    },
  },
  header: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  iconText: {
    fontFamily: "Open Sans",
    color: "#365902",
    fontSize: 14,
    marginLeft: "15%",
    [theme.breakpoints.between("lg", "xl")]: {
      fontSize: 17,
    },
  },
  contactSection: {
    display: "flex",
    flexDirection: "row",
    maxWidth: 400,
    marginTop: "1%",
  },
  icons: {
    color: "#365902",
    fontSize: 27,
    [theme.breakpoints.between("lg", "xl")]: {
      fontSize: 32,
    },
  },
  contactList: {
    marginTop: "3%",
    [theme.breakpoints.between("xs", "sm")]: {
      marginLeft: -50,
    },
  },
  elipsis: {
    color: "#497702",
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: "25%",
    marginTop: 30,
    [theme.breakpoints.between("lg", "xl")]: {
      fontSize: 24,
    },
  },
}));

export default useStyles