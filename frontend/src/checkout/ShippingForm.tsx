import React from "react";
import ColorTheme from "../ColorTheme";

import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Typography,
  Grid,
  TextField,
  ThemeProvider,
  Checkbox,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    margin: 2,
  },
  form: {
    margin: 2,
    fontFamily: "Playfair Display",
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
  input: {
    fontFamily: "Playfair Display",
    letterSpacing: 1,
    color: "#1A3400",
    margin: 4,
  },
  text: {
    fontFamily: "Playfair Display",
    letterSpacing: 1,
    color: "#1A3400",
  },
  smallText: {
    fontFamily: "Open Sans",
    color: "#848380",
    fontSize: 12,
  },
  newsCheckbox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  shippingAddress: {
    display: "flex",
    flexDirection: "column",
    marginTop: "5%",
  },
  doubleField: {
    display: "flex",
    flexDirection: "row",
  },
  emailInfo: {
    margin: 5,
    display: "flex",
    flexDirection: "column",
  },
});

export default function ShippingForm() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);
  const [country, setCountry] = React.useState("");

  const handleChangeSelect = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCountry(event.target.value as string);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <ThemeProvider theme={ColorTheme}>
      <Container className={classes.root} maxWidth="md">
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="center"
        >
          <Container className={classes.emailInfo}>
            <Typography className={classes.text}>
              Contact Information
            </Typography>
            <TextField
              className={classes.input}
              fullWidth
              id="outlined-basic"
              label="Email"
              variant="outlined"
              color="secondary"
            />
            <div className={classes.newsCheckbox}>
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <Typography className={classes.smallText}>
                Keep me up to date on news and exlusive offers
              </Typography>
            </div>
          </Container>

          <div className={classes.shippingAddress}>
            <Typography className={classes.text}>Shipping Address</Typography>
            <form className={classes.form} autoComplete="off">
              <div className={classes.doubleField}>
                <TextField
                  className={classes.input}
                  fullWidth
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  color="primary"
                />
                <TextField
                  className={classes.input}
                  fullWidth
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  color="primary"
                />
              </div>
              <TextField
                className={classes.input}
                fullWidth
                id="outlined-basic"
                label="Address"
                variant="outlined"
                color="primary"
              />
              <TextField
                className={classes.input}
                fullWidth
                id="outlined-basic"
                label="Apartment, suite, etc (optional)"
                variant="outlined"
                color="primary"
              />
              <TextField
                className={classes.input}
                fullWidth
                id="outlined-basic"
                label="City"
                variant="outlined"
                color="primary"
              />
              <div className={classes.doubleField}>
                <FormControl variant="outlined" fullWidth>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Country
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={country}
                    onChange={handleChangeSelect}
                    label="Country"
                    // fullWidth
                    className={classes.input}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"United Kingdom"}>United Kingdom</MenuItem>
                    <MenuItem value={"Denmark"}>Denmark</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  className={classes.input}
                  fullWidth
                  id="outlined-basic"
                  label="Postcode"
                  variant="outlined"
                  color="primary"
                />
              </div>
            </form>
          </div>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
