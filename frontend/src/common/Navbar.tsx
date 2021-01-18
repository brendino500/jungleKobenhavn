import React, { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import { PlantType } from "../plants/PlantType";
import { getPlantsInBasket } from "../lib/api";
import { totalCostOfBasket } from "../utils/methods";
import useStyles from "./styles/NavbarStyles";

import { Link, withRouter } from "react-router-dom";
import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Button,
  InputBase,
  Grid,
  Hidden,
  IconButton,
  Badge,
  FormControl,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PlantCardNavbar from "./PlantCardNavbar";
import { BasketContext } from "../providers/BasketContext";

type Anchor = "top" | "left" | "bottom" | "right";

function Navbar(props: ComponentPropsWithoutRef<any>) {
  const classes = useStyles();

  const [search, setSearch] = React.useState("");
  const [basketState, setBasketState] = React.useContext(BasketContext);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [plantsInBasket, setPlantsInBasket] = React.useState<
    (PlantType | undefined)[]
  >([]);

  React.useEffect(() => {
    getPlantsInBasket(basketState as []).then(
      (plants: (PlantType | undefined)[]) => {
        setPlantsInBasket(plants);
      }
    );
  }, [basketState]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (
      event.type === "keydown" &&
      (event as React.KeyboardEvent).key === "Enter"
    ) {
      props.history.push(`/plants?search=${search}`);
    }
  };

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
            <Hidden smDown>
              <Typography className={classes.title} noWrap>
                Jungle København
              </Typography>
            </Hidden>
            <Hidden smUp>
              <Typography className={classes.titleMobile} noWrap>
                JK
              </Typography>
            </Hidden>
          </Link>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <FormControl>
              <InputBase
                className={classes.searchText}
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
                onChange={handleChange}
                onKeyDown={onKeyDown}
              />
            </FormControl>
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
                <PlantCardNavbar />
                <section className={classes.basketButtonLayout}>
                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="flex-start"
                  >
                    <Typography className={classes.drawerTotal}>
                      Total
                    </Typography>
                    <Typography className={classes.drawerTotal}>
                      £{totalCostOfBasket(plantsInBasket)}.00
                    </Typography>
                  </Grid>

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

export default withRouter(Navbar);
