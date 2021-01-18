import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      padding: 0,
    },
    card: {
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
      width: 100,
      height: 100,
    },
    plantName: {
      fontFamily: "Playfair Display",
      color: "#1A3400",
      [theme.breakpoints.between("xs", "sm")]: {
        width: 150
      },
    },
    link: {
      textDecoration: "none",
      width: "md",
      padding: 0,
    },
    cardContent: {
      display: "flex",
      flexDirection: "row",
    },
    price: {
      fontFamily: "Playfair Display",
      fontSize: 16,
      color: "#365902",
    },
  })
);

export default useStyles