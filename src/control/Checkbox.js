import { Checkbox, FormControl, FormControlLabel } from "@material-ui/core";
import React from "react";

function Checkboxe({ name, label, value, onChange }) {
  const convertToDefEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <div>
      <FormControl>
        <FormControlLabel
          control={
            <Checkbox
              checked={value}
              name={name}
              onChange={(e) =>
                onChange(convertToDefEventPara(name, e.target.checked))
              }
            />
          }
          label={label}
        />
      </FormControl>
    </div>
  );
}

export default Checkboxe;
