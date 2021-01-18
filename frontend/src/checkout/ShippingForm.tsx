import React from "react";
import ColorTheme from "../ColorTheme";
import useStyles from "./styles/shippingFormStyles";
import EmailInput from "./components/shippingForm/EmailInput";
import MobileFirstLastName from "./components/shippingForm/MobileFirstLastName";
import DesktopFirstLastName from "./components/shippingForm/DesktopFirstLastName";
import MiddleForm from "./components/shippingForm/MiddleForm";

import {
  Container,
  Typography,
  Grid,
  TextField,
  ThemeProvider,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Hidden,
} from "@material-ui/core";

export default function ShippingForm() {
  const classes = useStyles();
  const [country, setCountry] = React.useState("");

  const handleChangeSelect = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCountry(event.target.value as string);
  };

  return (
    <ThemeProvider theme={ColorTheme}>
      <Container className={classes.root}>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Container className={classes.emailInfo}>
            <EmailInput />
          </Container>

          <Container className={classes.shippingAddress}>
            <Typography className={classes.text}>Shipping Address</Typography>
            <form className={classes.form} autoComplete="off">
              <DesktopFirstLastName />
              <MobileFirstLastName />
              <div className={classes.middleForm}>
                <MiddleForm />
              </div>
              <Hidden smDown>
                <div className={classes.doubleField}>
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel
                      id="demo-simple-select-outlined-label"
                      className={classes.input}
                      required
                    >
                      Country
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={country}
                      onChange={handleChangeSelect}
                      label="Country"
                      className={classes.input}
                    >
                      <MenuItem value="" className={classes.inputText}>
                        <em>None</em>
                      </MenuItem>
                      <MenuItem
                        className={classes.inputText}
                        value={"United Kingdom"}
                      >
                        United Kingdom
                      </MenuItem>
                      <MenuItem className={classes.inputText} value={"Denmark"}>
                        Denmark
                      </MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    className={classes.input}
                    fullWidth
                    required
                    id="outlined-basic"
                    label="Postcode"
                    variant="outlined"
                    InputProps={{
                      classes: {
                        input: classes.inputText,
                      },
                    }}
                    InputLabelProps={{
                      classes: {
                        root: classes.inputText,
                        focused: classes.inputText,
                      },
                    }}
                  />
                </div>
              </Hidden>
              <Hidden smUp>
                <FormControl variant="outlined" fullWidth>
                  <InputLabel
                    id="demo-simple-select-outlined-label"
                    className={classes.input}
                    required
                  >
                    Country
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={country}
                    onChange={handleChangeSelect}
                    label="Country"
                    className={classes.input}
                  >
                    <MenuItem value="" className={classes.inputText}>
                      <em>None</em>
                    </MenuItem>
                    <MenuItem
                      className={classes.inputText}
                      value={"United Kingdom"}
                    >
                      United Kingdom
                    </MenuItem>
                    <MenuItem className={classes.inputText} value={"Denmark"}>
                      Denmark
                    </MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  className={classes.input}
                  fullWidth
                  required
                  id="outlined-basic"
                  label="Postcode"
                  variant="outlined"
                  InputProps={{
                    classes: {
                      input: classes.inputText,
                    },
                  }}
                  InputLabelProps={{
                    classes: {
                      root: classes.inputText,
                      focused: classes.inputText,
                    },
                  }}
                />
              </Hidden>
            </form>
          </Container>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
