import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 10,
  },
  title: {
    fontFamily: "Playfair Display",
    fontWeight: "bold",
    fontSize: 35,
    letterSpacing: 7,
    textTransform: "uppercase",
    textAlign: "center",
    color: "#1A3400",
    marginBottom: "6%",
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: 25,
    },
  },
}));

export default useStyles