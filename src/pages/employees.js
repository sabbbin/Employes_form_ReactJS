import React, { useState } from "react";
import Employeeform from "./employees/employeeform";
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";
import PaperHeader from "../component/PaperHeader";
import AddIcon from '@material-ui/icons/Add';


import {
    Button,
  InputAdornment,
  makeStyles,
  Paper,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Toolbar,
} from "@material-ui/core";
import Usetable from "../component/usetable";
import { getAllEmployees } from "../service/employee";
import Input from "../control/input";
import Buttons from "../control/buttons";

import { Search } from "@material-ui/icons";
import Popup from "../component/Popup";

const useStyle = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    margin: theme.spacing(1),
  },
  searchInput: {
    width: "75%",
  },
  btnadd: {
    position: "absolute",
    right: 0,
  },
  tool: {
    align: "center",
  },
}));

const headCells = [
  { id: "fullname", label: "Employee name" },
  { id: "email", label: "Email" },
  { id: "mobile", label: "Mobile" },
  { id: "departmentId", label: "Department", diasabled: true },
];

function Employees() {
  const record = getAllEmployees();

  const [OpenPopup, setOpenPopup] = useState(false);
  const [filterIn, setfilterIn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const { Tabcontainer, TblHead, TblPagination, recordsAfterPagingSorting } =
    Usetable(record, headCells, filterIn);
  const classes = useStyle();

  const handleSearch = (e) => {
    let target = e.target;
    setfilterIn({
      fn: (items) => {
        if (target.value == "") return items;
        else
          return items.filter((x) =>
            x.fullname.toLowerCase().includes(target.value)
          );
      },
    });
    };
    
    const handlepop = () => {
        setOpenPopup(true)
    }

  return (
    <div>
      <PaperHeader
        title="New employee"
        subTitle="form design with validation"
        icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
      />

      <Paper className={classes.root}>
       

        {/*
           let departments= getDepartmentcollectin()
           employees.map(x=>({
               ...x,department:departments[x.departmentId-1]
           }))
           
           */}
        <Toolbar className={classes.tool} style={{align:'center'}}>
          <Input
            label="Search employees"
            className={classes.searchInput}
            InputProps={{
              startAdornment: (
                <InputAdornment>
                  <Search />
                </InputAdornment>
              ),
            }}
            onChange={handleSearch}
          />
          <Button
            className={classes.btnadd}
           
            variant="outlined"
                     
                      
            className={classes.btnadd}
            onClick={handlepop}
                  > Add item
                   <AddIcon />    
          </Button>
        </Toolbar>
        <Tabcontainer>
          <TblHead />

          <TableBody>
            {recordsAfterPagingSorting().map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.fullname}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.mobile}</TableCell>
                <TableCell>{item.departmentId}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Tabcontainer>
        <TblPagination />
      </Paper>
      <Popup
        OpenPopup={OpenPopup}
        setOpenPopup={setOpenPopup}
        title={"New employee form"}
          
          >
               <Employeeform />
          </Popup>
    </div>
  );
}

export default Employees;
