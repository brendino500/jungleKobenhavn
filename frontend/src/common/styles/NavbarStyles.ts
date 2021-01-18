import {
  fade,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexGrow: 1,
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 4),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    drawerPaperLeft: {
      width: drawerWidth,
      backgroundColor: "#365902",
    },
    drawerPaperRight: {
      width: drawerWidth + 100,
      backgroundColor: "#C1BFBB",
      [theme.breakpoints.between("xs", "sm")]: {
        width: 250
      },
    },
    drawerText: {
      color: "#C1BFBB",
      fontFamily: "Open Sans",
      fontSize: 20,
      letterSpacing: 2,
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#1A3400",
    },
    searchText: {
      fontFamily: "Playfair Display",
      letterSpacing: 1,
      color: "#1A3400",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
    title: {
      fontFamily: "Playfair Display",
      fontSize: 24,
      color: "#1A3400",
      fontWeight: "bold",
      letterSpacing: 2,
      textTransform: "uppercase",
    },
    titleMobile: {
      fontFamily: "Playfair Display",
      fontSize: 17,
      color: "#1A3400",
      fontWeight: "bold",
      letterSpacing: 2,
      textTransform: "uppercase",
      marginRight: 10
    },
    menuIcon: {
      color: "#1A3400",
    },
    link: {
      textDecoration: "none",
    },
    cartIcon: {
      color: "#1A3400",
      position: "absolute",
      fontSize: 30
    },
    basketList: {
      width: 200,
    },
    basketFullList: {
      width: "auto",
    },
    drawerTextRight: {
      color: "#365902",
      fontFamily: "Open Sans",
      fontSize: 24,
      letterSpacing: 2,
      [theme.breakpoints.between("xs", "sm")]: {
        fontSize: 20
      },
    },
    drawerLeftLayout: {
      flexGrow: 1,
    },
    drawerTotal: {
      color: "#365902",
      fontFamily: "Open Sans",
      fontSize: 20,
      letterSpacing: 2,
      marginLeft: 10,
    },
    basketButtons: {
      color: "#365902",
      margin: 5,
      fontFamily: "Open Sans",
      letterSpacing: 3,
      fontSize: 20
    },
    basketButtonLayout: {
      position: "fixed",
      bottom: 0,
      width: drawerWidth + 80,
      [theme.breakpoints.between("xs", "sm")]: {
        width: 240
      },
    },
    basketTotalPrice: {
      display: "flex",
      flexDirection: "row",
      marginLeft: 5,
    },
  })
);

export default useStyles