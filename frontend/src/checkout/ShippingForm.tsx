import React from "react";
import ColorTheme from "../ColorTheme";
import useStyles from "./styles/shippingFormStyles";
import EmailInput from "./components/shippingForm/EmailInput";

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
              <Hidden smDown>
                <div className={classes.doubleField}>
                  <TextField
                    className={classes.input}
                    fullWidth
                    required
                    id="outlined-basic"
                    label="First Name"
                    variant="outlined"
                    color="primary"
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
                  <TextField
                    className={classes.input}
                    fullWidth
                    required
                    id="outlined-basic"
                    label="Last Name"
                    variant="outlined"
                    color="primary"
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
                <TextField
                  className={classes.input}
                  fullWidth
                  required
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  color="primary"
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
                <TextField
                  className={classes.input}
                  fullWidth
                  required
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  color="primary"
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
              <div className={classes.middleForm}>
                <TextField
                  className={classes.input}
                  fullWidth
                  required
                  id="outlined-basic"
                  label="Address"
                  variant="outlined"
                  color="primary"
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
                <TextField
                  className={classes.input}
                  fullWidth
                  id="outlined-basic"
                  label="Apartment, suite, etc (optional)"
                  variant="outlined"
                  color="primary"
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
                <TextField
                  className={classes.input}
                  fullWidth
                  required
                  id="outlined-basic"
                  label="City"
                  variant="outlined"
                  color="primary"
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
