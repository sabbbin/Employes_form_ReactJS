import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import React from "react";

function SelectO({ name, label, items, value, error = null, onChange }) {
  return (
    <FormControl>
      <InputLabel>{label}</InputLabel>
      <Select
        name={name}
        value={value}
        onChange={onChange}
        {...(error && { error: true })}
      >
        {items.map((item) => (
          <MenuItem key={item.id} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
      {error && (
        <FormHelperText style={{ color: "red" }}>{error}</FormHelperText>
      )}
    </FormControl>
  );
}

export default SelectO;
