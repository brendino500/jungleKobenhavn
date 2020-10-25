import React from "react";
import clsx from "clsx";

import { Link } from "react-router-dom";
import {
  fade,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import {
  Container,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Button,
  InputBase,
  Grid,
  IconButton,
  Badge,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { BasketContext } from "../providers/BasketContext";

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
    menuButton: {
      marginRight: theme.spacing(2),
    },
    drawerPaperLeft: {
      width: drawerWidth,
      backgroundColor: "#365902",
    },
    drawerPaperRight: {
      width: drawerWidth,
      backgroundColor: "#C1BFBB",
    },
    drawerText: {
      color: "#C1BFBB",
      fontFamily: "Open Sans",
      fontSize: 20,
      letterSpacing: 2,
    },
    drawerGrid: {
      flexGrow: 1,
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
      fontWeight: "bold",
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
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    basket: {
      position: "absolute",
      bottom: 0,
    },
    title: {
      fontFamily: "Playfair Display",
      fontSize: 17,
      color: "#1A3400",
      fontWeight: "bold",
      letterSpacing: 2,
      textTransform: "uppercase",
    },
    menuIcon: {
      color: "#1A3400",
    },
    link: {
      textDecoration: "none",
    },
    basketIcon: {
      position: "relative",
      marginLeft: 0,
    },
    cartIcon: {
      color: "#1A3400",
      position: "absolute",
    },
    basketList: {
      width: 250,
    },
    basketFullList: {
      width: "auto",
    },
    drawerTextRight: {
      color: "#365902",
      fontFamily: "Open Sans",
      fontSize: 20,
      letterSpacing: 2,
      textAlign: "right",
    },
    drawerLeftLayout: {
      flexGrow: 1,
    },
    basketButtons: {
      color: "#365902",
      margin: 5,
      fontFamily: "Open Sans",
      letterSpacing: 3,
    },
    basketButtonLayout: {
      position: "fixed",
      bottom: 0,
      width: 250,
    },
  })
);

type Anchor = "top" | "left" | "bottom" | "right";

export default function Navbar() {
  const classes = useStyles();
  const [basketState, setBasketState] = React.useContext(BasketContext);
  console.log("navbar", basketState);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes.basketList, {
        [classes.basketFullList]: anchor === "left" || anchor === "right",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List></List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        style={{
          backgroundColor: "#C1BFBB",
          boxShadow: "0px 0px 0px 0px",
        }}
      >
        <Toolbar>
          <Button onClick={toggleDrawer("left", true)}>
            <MenuIcon className={classes.menuIcon} />
          </Button>
          <Link to={`/`} className={classes.link}>
            <Typography className={classes.title} noWrap>
              Jungle København
            </Typography>
          </Link>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              className={classes.searchText}
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
          >
            <div>
              <IconButton
                aria-label="show cart items"
                color="inherit"
                onClick={toggleDrawer("right", true)}
              >
                <Badge
                  badgeContent={(basketState as []).length}
                  className={classes.cartIcon}
                  color="secondary"
                >
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
              <Drawer
                anchor={"right"}
                open={state["right"]}
                onClose={toggleDrawer("right", false)}
                classes={{
                  paper: classes.drawerPaperRight,
                }}
              >
                {list("right")}
                <ListItem className={classes.drawerTextRight}>Items</ListItem>
                <section className={classes.basketButtonLayout}>
                  <Link to={`/checkout`} className={classes.link}>
                    <Button
                      className={classes.basketButtons}
                      fullWidth
                      variant="outlined"
                    >
                      Checkout
                    </Button>
                  </Link>
                </section>
              </Drawer>

              <Drawer
                anchor={"left"}
                open={state["left"]}
                onClose={toggleDrawer("left", false)}
                classes={{
                  paper: classes.drawerPaperLeft,
                }}
              >
                {list("left")}
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  className={classes.drawerLeftLayout}
                >
                  <Link to={`/`} className={classes.link}>
                    <ListItem className={classes.drawerText} button>
                      Home
                    </ListItem>
                  </Link>
                  <Link to={`/plants`} className={classes.link}>
                    <ListItem className={classes.drawerText} button>
                      Plants
                    </ListItem>
                  </Link>
                  <Link to={`/contact`} className={classes.link}>
                    <ListItem className={classes.drawerText} button>
                      Contact
                    </ListItem>
                  </Link>
                </Grid>
              </Drawer>
            </div>
          </Grid>
        </Toolbar>
      </AppBar>
      <main className={clsx(classes.content)}>
        <div className={classes.drawerHeader} />
      </main>
    </div>
  );
}
