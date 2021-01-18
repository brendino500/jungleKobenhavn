import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0 auto",
  },
  title: {
    fontFamily: "Playfair Display",
    fontWeight: "bold",
    fontSize: 18,
    color: "#848380",
    marginTop: 12,
    letterSpacing: 3,
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: 14,
      marginTop: 5,
    },
    [theme.breakpoints.between("lg", "xl")]: {
      fontSize: 28,
    },
  },
}));

export default useStyles