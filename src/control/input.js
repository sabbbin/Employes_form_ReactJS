import { TextField } from "@material-ui/core";
import React from "react";

function Input({ name, label, value, onChange, error = null, ...other }) {
  return (
    <TextField
      variant="outlined"
      name={name}
      label={label}
      value={value}
      onChange={onChange}
    {...other}
      {...(error && { error: true, helperText: error })}
    ></TextField>
  );
}

export default Input;
