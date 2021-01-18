import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 5,
    width: "auto",
  },
  title: {
    fontFamily: "Playfair Display",
    fontWeight: "bold",
    fontSize: 18,
    color: "#848380",
    marginTop: 12,
    letterSpacing: 3,
    [theme.breakpoints.between("lg", "xl")]: {
      fontSize: 28,
    },
  },
  text: {
    marginTop: "5%",
    fontFamily: "Open Sans",
    fontSize: 14,
    color: "#848380",
    [theme.breakpoints.between("lg", "xl")]: {
      fontSize: 17,
    },
  },
  smallText: {
    marginTop: "5%",
    fontFamily: "Open Sans",
    fontSize: 10,
    color: "#848380",
    [theme.breakpoints.between("lg", "xl")]: {
      fontSize: 14,
    },
  },
  deliverySelect: {
    marginTop: 10,
  },
  selectText: {
    fontFamily: "Open Sans",
    fontSize: 14,
    color: "#848380",
    [theme.breakpoints.between("lg", "xl")]: {
      fontSize: 15,
    },
  },
  selectButton: {
    color: "#848380",
    fontFamily: "Open Sans",
    fontSize: 14,
    [theme.breakpoints.between("lg", "xl")]: {
      fontSize: 16,
    },
  },
  menuItems: {
    fontFamily: "Open Sans",
    fontSize: 14,
  },
  button: {
    backgroundColor: "#25462e",
    marginTop: "5%",
  },
  buttonText: {
    fontFamily: "Playfair Display",
    fontSize: 12,
    color: "#EBE8E5",
    letterSpacing: 2,
    [theme.breakpoints.between("lg", "xl")]: {
      fontSize: 15,
    },
  },
  lockIcon: {
    color: "#EBE8E5",
    fontSize: 12,
    marginRight: "4%",
  },
  link: {
    textDecoration: "none",
  },
}));

export default useStyles