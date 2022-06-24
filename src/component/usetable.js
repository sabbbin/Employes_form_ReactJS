import { makeStyles, Table, TableCell, TableHead, TablePagination, TableRow, TableSortLabel } from "@material-ui/core";
import { ContactSupportOutlined, RecordVoiceOverSharp } from "@material-ui/icons";
import React, { useState } from "react";


const useStyled = makeStyles(theme => ({
  table: {
    marginTop: theme.spacing(3),
    '& thead th': {
      fontWeight: '600',
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.light,
    },
    '& tbody td': {
      fontWeight: '300'
    },
    '& tbody tr:hover': {
      backgroundColor: 'gray',
      cursor: 'pointer',
    },
  }
}
));




function Usetable(record, headCells, filterFn) {
  const classes = useStyled();
  const pages = [5, 10, 25];
  const [page, setpage] = useState(0);
  const [rowsPerPage, setrowsPerPage] = useState(pages[page]);
  const [order, setOrder] = useState();
  const [orderBy, setOrderBy] = useState();



  const Tabcontainer = (props) =>
    <Table
  className={classes.table}
    >{props.children}</Table>;
  
  const handleSortRequest = (cellid) => {
    const isasc = orderBy == cellid && order === 'asc'
    setOrder(isasc ? 'desc' : 'asc')
    setOrderBy(cellid)
  }
  function stableSort(array, comparator) {
    const stablifizedThis = array.map((el, index) => [el, index]);
    stablifizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stablifizedThis.map((el)=>el[0])
  }

  const TblHead = () => {
    return (
      <TableHead>
        <TableRow>
          {headCells.map((headcell) => (
            <TableCell key={headcell.id}
              sortDirection={orderBy === headcell.id ? order : false}
            > {headcell.diasabled ? headcell.label :
              < TableSortLabel
               
                active={orderBy == headcell.id}
                direction={orderBy === headcell.id ? order : 'asc'}
                onClick={() => handleSortRequest(headcell.id)}  >
                {headcell.label}
              </TableSortLabel>}
              </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };
  const handleChangePage = (event, newPage)=>{
    setpage(newPage)
  }
  const handleChangeRowsPerPage = event => {
    setrowsPerPage(parseInt(event.target.value, 10))
    setpage(0);
  }
  function getComparator(order, orderBy) {
    return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }
  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0; 
  }


  const recordsAfterPagingSorting = () => {
    return stableSort(filterFn.fn(record), getComparator(order,orderBy)).slice(page*rowsPerPage, (page+1)*rowsPerPage)
  }

  const TblPagination=() => (
    <TablePagination
      component='div'
      page={page}
      rowsPerPageOptions={pages}
      rowsPerPage={rowsPerPage}
      count={record.length}
      onChangePage={handleChangePage}
      onChangeRowsPerPage={handleChangeRowsPerPage}


    />

  )

  return {
    Tabcontainer,
    TblHead,
    TblPagination,
    recordsAfterPagingSorting
  };
}

export default Usetable;


