import { makeStyles } from '@material-ui/core';
import { orange } from '@material-ui/core/colors';
import React from 'react';

const drawerWidth = 240;
const useStyle= makeStyles({
    side_menu:{
     display:'flex',
     flexdirection:'column',
     position: 'absolute',
      left:0,
      width:drawerWidth,
      height:'100%',
      backgroundColor:'orange',
      border:'1'
    

    }

});



function Sidemenu() {
    const classes= useStyle();
    return (
        <div className={classes.side_menu}>
            <h5>hlello th</h5>
        </div>
    )
}

export default Sidemenu
