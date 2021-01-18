import { makeStyles } from "@material-ui/core/styles";
import image from "../../assets/zzplant.jpg";

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundImage: `url(${image})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      height: "100%",
    },
  },
  title: {
    fontFamily: "Playfair Display",
    fontWeight: "bold",
    letterSpacing: 9,
    fontSize: 50,
    marginTop: "10%",
    color: "#1A3400",
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: 30,
      marginTop: "5%"
    },
  },
  button: {
    fontFamily: "Open Sans",
    marginTop: "2%",
    color: "#1A3400",
  },
  link: {
    textDecoration: "none",
  },
}));

export default useStyles