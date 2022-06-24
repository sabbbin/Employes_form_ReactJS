import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import * as employeeservice from "../service/employee";


function Useform(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState({});

  const handlechange = (e) => {
    const { name, value } = e.target;
    setValues((values) => ({ ...values, [name]: value }));

    handlevalidate({ [name]: value });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    if (handlevalidate()) {
      employeeservice.insertEmployee(values);
      reset();
    }
  };

  const handlevalidate = (fieldvalues = values) => {
    let temp = { ...error };
    if ("fullname" in fieldvalues)
      temp.fullname = fieldvalues.fullname ? "" : "Fullname is required";
    if ("email" in fieldvalues)
      temp.email = /$!^|.+@.+..+/.test(fieldvalues.email)
        ? ""
        : "Email is not valid";
    if ("mobile" in fieldvalues)
      temp.mobile =
        fieldvalues.mobile.length > 9 ? "" : "mimimum 10 digits is required";
    if ("departmentId" in fieldvalues)
      temp.departmentId =
        fieldvalues.departmentId.length != 0 ? "" : "select department";
    setError({
      ...temp,
    });
    if (fieldvalues == values) return Object.values(temp).every((x) => x == "");
  };

  const reset = () => {
    setValues(initialValues);
    setError({});
  };

  return {
    values,
    setValues,
    handlechange,
    error,
    setError,
    handlesubmit,
    reset,
  };
}

const useStyle = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
}));

function Form(props) {
  const classes = useStyle();
  const { children, ...other } = props;
  return (
    <form className={classes.root} autoComplete="off" {...other}>
      {props.children}
    </form>
  );
}

export { Useform, Form };
