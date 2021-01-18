import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 2,
    padding: 0,
    [theme.breakpoints.between("xs", "sm")]: {
      marginTop: 10,
    },
  },
  content: {
    width: 400,
    [theme.breakpoints.between("xs", "sm")]: {
      width: 330,
    },
  },
  title: {
    fontFamily: "Playfair Display",
    fontSize: 18,
    color: "#1A3400",
    letterSpacing: 2,
    [theme.breakpoints.between("lg", "xl")]: {
      fontSize: 22,
    },
  },
  largeText: {
    fontFamily: "Open Sans",
    color: "#1A3400",
    fontSize: 20,
    marginTop: "3%",
    [theme.breakpoints.between("lg", "xl")]: {
      fontSize: 22,
    },
  },
  textSmall: {
    fontFamily: "Open Sans",
    color: "#1A3400",
    fontSize: 12,
    [theme.breakpoints.between("lg", "xl")]: {
      fontSize: 16,
    },
  },
  summaryTotals: {
    marginTop: 5,
  },
  button: {
    backgroundColor: "#1A3400",
    marginTop: "5%",
    width: "400",
    flexGrow: 1,
    [theme.breakpoints.between("xs", "sm")]: {
      width: 330,
    },
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
  buttonSection: {
    display: "flex",
    flexGrow: 1,
    alignItems: "center",
  },
  lockIcon: {
    color: "#EBE8E5",
    fontSize: 12,
    marginRight: "4%",
    [theme.breakpoints.between("lg", "xl")]: {
      fontSize: 15,
    },
  },
  link: {
    textDecoration: "none",
    width: 400,
  },
}));

export default useStyles