import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0 auto",
    [theme.breakpoints.between("xs", "sm")]: {
      width: 350,
    },
  },
  shippingAddress: {
    margin: 2,
    display: "flex",
    flexGrow: 3,
    flexDirection: "column",
  },
  orderSummary: {
    flexGrow: 1,
    display: "flex",
  },
  grid: {
    display: "flex",
    flexWrap: "nowrap",
  },
}));

export default useStyles