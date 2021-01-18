import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      margin: 5,
    },
    title: {
      fontFamily: "Playfair Display",
      fontSize: 30,
      letterSpacing: 6,
      fontWeight: "bold",
      textTransform: "uppercase",
      color: "#1A3400",
      textAlign: "center",
    },
    box: {
      marginTop: "-5%",
      [theme.breakpoints.between("xs", "sm")]: {
        marginTop: "-20%",
      },
    },
  }));

  export default useStyles