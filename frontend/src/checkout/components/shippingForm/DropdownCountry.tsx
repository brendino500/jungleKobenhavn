import React from "react";
import useStyles from "../../styles/shippingFormStyles";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

export default function DropdownCountry() {
  const classes = useStyles();
  const [country, setCountry] = React.useState("");

  const handleChangeSelect = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCountry(event.target.value as string);
  };

  return (
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
        <MenuItem className={classes.inputText} value={"United Kingdom"}>
          United Kingdom
        </MenuItem>
        <MenuItem className={classes.inputText} value={"Denmark"}>
          Denmark
        </MenuItem>
      </Select>
    </FormControl>
  );
}
