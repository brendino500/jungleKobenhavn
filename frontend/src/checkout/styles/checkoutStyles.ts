import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0 auto",
  },
  basket: {
    flexGrow: 3,
    flexDirection: "column",
  },
  summary: {
    flexGrow: 1,
  },
  title: {
    fontFamily: "Playfair Display",
    fontSize: 30,
    letterSpacing: 6,
    fontWeight: "bold",
    color: "#1A3400",
    textTransform: "uppercase",
    textAlign: "center",
  },
  text: {
    fontFamily: "Open Sans",
    fontSize: 16,
    color: "#848380",
  },
}));

export default useStyles