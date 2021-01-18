import { makeStyles } from "@material-ui/core/styles";
import PlantIndividual from "../PlantIndividual";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.between("xs", "sm")]: {
      marginLeft: "7%",
      marginTop: "-7%",
    },
  },
  image: {
    height: 400,
    [theme.breakpoints.between("xs", "sm")]: {
      height: 275,
    },
  },
  plantName: {
    fontFamily: "Playfair Display",
    fontSize: 26,
    letterSpacing: 2,
    fontWeight: "bold",
    textTransform: "uppercase",
    width: 300,
    color: "#25462e",
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: 16,
    },
  },

  text: {
    fontFamily: "Open Sans",
    fontSize: 16,
    width: 300,
    color: "#25462e",
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: 13,
      width: 275,
    },
  },
  price: {
    fontFamily: "Playfair Display",
    fontWeight: "bold",
    letterSpacing: 2,
    color: "#25462e",
    fontSize: 20,
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: 14,
    },
  },
  button: {
    color: "#EBE8E5",
    fontFamily: "Playfair Display",
    backgroundColor: "#365902",
    fontWeight: "bold",
    letterSpacing: 2,
    [theme.breakpoints.between("xs", "sm")]: {
      width: 275,
    },
  },
  numbers: {
    fontFamily: "Open Sans",
    fontSize: 14,
    color: "#25462e",
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: 12,
    },
  },
  plantInfo: {
    marginLeft: 50,
    color: "#25462e",
    [theme.breakpoints.between("xs", "sm")]: {
      marginLeft: 0,
      marginTop: 5,
    },
  },
  snackbar: {
    color: "#EBE8E5",
    fontFamily: "Playfair Display",
    backgroundColor: "#497702",
    textAlign: "center",
  },
}));

export default useStyles