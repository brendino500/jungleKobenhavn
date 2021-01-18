import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: 10,
    [theme.breakpoints.between("xs", "sm")]: {
      textAlign: "center",
    },
  },
  title: {
    fontFamily: "Playfair Display",
    fontWeight: "bold",
    fontSize: 18,
    color: "#848380",
    marginTop: "30%",
    textTransform: "uppercase",
    letterSpacing: 4,
  },
  text: {
    marginTop: "5%",
    fontFamily: "Open Sans",
    fontSize: 16,
    color: "#848380",
  },
  text2: {
    fontFamily: "Open Sans",
    fontSize: 12,
    color: "#848380",
  },
  email: {
    fontFamily: "Open Sans",
    fontSize: 12,
    color: "#848380",
    textDecoration: "none",
  },
}));

export default useStyles