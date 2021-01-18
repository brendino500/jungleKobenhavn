import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
    },
    card: {
      width: "300",
      margin: 5,
    },
    details: {
      display: "flex",
      flexDirection: "column",
    },
    content: {
      flex: "1 0 auto",
    },
    image: {
      width: 75,
      height: 75,
    },
    plantName: {
      fontFamily: "Playfair Display",
      color: "#1A3400",
      fontSize: 12,
      [theme.breakpoints.between("xs", "sm")]: {
        width: 150
      },
    },
    link: {
      textDecoration: "none",
    },
    cardContent: {
      display: "flex",
      flexDirection: "row",
    },
    price: {
      fontFamily: "Playfair Display",
      fontSize: 12,
      color: "#365902",
    },
  })
);

export default useStyles