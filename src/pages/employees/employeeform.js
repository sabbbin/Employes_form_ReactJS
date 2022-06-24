import { Grid, makeStyles, TextField } from "@material-ui/core";
import React, { useState, useEffect } from "react";

import { Form, Useform } from "../../component/useform.js";
import Buttons from "../../control/buttons.js";
import Checkboxe from "../../control/Checkbox.js";
import Datepick from "../../control/datepick.js";
import Input from "../../control/input.js";
import Radiobtn from "../../control/Radio.js";
import SelectO from "../../control/Select.js";

const initialValues = {
  id: 0,
  fullname: "",
  email: "",
  mobile: "",
  city: "",
  gender: "female",
  departmentId: "",
  hireDate: new Date(),
  isPermanent: false,
};

function Employeeform() {
  const { values, setValues, handlechange, error, reset, handlesubmit } =
    Useform(initialValues);
  const Genders = [
    { id: "1", value: "male", label: "Male" },
    { id: "2", value: "female", label: "Female" },
    { id: "3", value: "other", label: "other" },
  ];

  const department = [
    { id: "1", value: "Development", label: "Development" },
    { id: "2", value: "Marketing", label: "Marketing" },
    { id: "3", value: "Accounting", label: "Accounting" },
    { id: "3", value: "HR", label: "HR" },
  ];

  return (
    <Form onSubmit={handlesubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Input
            variant="outlined"
            label="Fullname"
            name="fullname"
            value={values.fullname}
            onChange={handlechange}
            error={error.fullname}
          />

          <Input
            variant="outlined"
            label="email"
            name="email"
            value={values.email}
            onChange={handlechange}
            error={error.email}
          />
          <Input
            variant="outlined"
            label="mobile"
            name="mobile"
            value={values.mobile}
            onChange={handlechange}
            error={error.mobile}
          />
          <Input
            variant="outlined"
            label="city"
            name="city"
            value={values.city}
            onChange={handlechange}
          />
        </Grid>
        <Grid item xs={6}>
          <Radiobtn
            variant="outlined"
            label="Gender"
            name="gender"
            value={values.gender}
            onChange={handlechange}
            Genders={Genders}
          />

          <SelectO
            variant="outlined"
            label="Department"
            name="departmentId"
            value={values.departmentId}
            onChange={handlechange}
            items={department}
            error={error.departmentId}
          />

          <Datepick
            variant="outlined"
            label="Hiredate"
            name="hireDate"
            value={values.hireDate}
            onChange={handlechange}
          />
          <Checkboxe
            variant="outlined"
            label="Permanent"
            name="isPermanent"
            value={values.isPermanent}
            onChange={handlechange}
          />

          <Buttons text="submit" type="submit" />
          <Buttons text="Reset" color="default" onClick={reset} />
        </Grid>
      </Grid>
    </Form>
  );
}

export default Employeeform;
