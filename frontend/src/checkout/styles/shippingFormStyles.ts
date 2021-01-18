import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: 2,
      width: "75ch",
    },
  },
  form: {
    fontFamily: "Playfair Display",
    [theme.breakpoints.between("xs", "sm")]: {
      maxWidth: 340,
    },
  },
  title: {
    fontFamily: "Playfair Display",
    fontSize: 30,
    letterSpacing: 6,
    fontWeight: "bold",
    color: "#1A3400",
    textTransform: "uppercase",
    textAlign: "center",
    [theme.breakpoints.between("lg", "xl")]: {
      fontSize: 33,
    },
  },
  middleForm: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    margin: 4,
    fontFamily: "Playfair Display",
    letterSpacing: 1,
    color: "#848380",
    fontSize: 13,
    [theme.breakpoints.between("xs", "sm")]: {
      width: 350,
    },
    [theme.breakpoints.between("lg", "xl")]: {
      fontSize: 15,
    },
  },
  inputText: {
    fontFamily: "Playfair Display",
    letterSpacing: 1,
    color: "#848380",
    fontSize: 13,
    [theme.breakpoints.between("lg", "xl")]: {
      fontSize: 15,
    },
  },
  text: {
    fontFamily: "Playfair Display",
    letterSpacing: 1,
    color: "#1A3400",
    fontSize: 18,
    margin: 2,
    [theme.breakpoints.between("lg", "xl")]: {
      fontSize: 22,
    },
  },
  smallText: {
    fontFamily: "Open Sans",
    color: "#848380",
    fontSize: 12,
    [theme.breakpoints.between("lg", "xl")]: {
      fontSize: 14,
    },
  },
  newsCheckbox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  shippingAddress: {
    display: "flex",
    flexDirection: "column",
    marginTop: "5%",
    [theme.breakpoints.between("xs", "sm")]: {
      marginLeft: 110,
    },
  },
  doubleField: {
    display: "flex",
    flexDirection: "row",
    marginRight: -8,
  },
  emailInfo: {
    margin: 5,
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.between("xs", "sm")]: {
      marginLeft: 110,
    },
  },
}));

export default useStyles