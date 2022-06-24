import { Card, makeStyles, Paper, ThemeProvider, Typography } from '@material-ui/core'
import React from 'react';

const useStyle= makeStyles(theme=>({
    root:{
        backgroundColor:'white'
    },
    pageHeader:{
        display:'flex',
        marginBottom:theme.spacing(2),
        padding:theme.spacing(4)
    },
    pageIcon:{
      
        padding: theme.spacing(2),
        color:'green'
    },
    pageTitle:{
        paddingleft:theme.spacing(2),
        '& . MuiTypography-subtitle2':{
            opacity:'0.6'
        }
    }
}));

function PaperHeader(props) {
    const {title, subTitle, icon}= props;

const classes= useStyle();

    return (
  <Paper elevation={0} square className={classes.root}>
      <div className={classes.pageHeader}>
      <Card className={classes.pageIcon}>
            {icon }
      </Card>
            <div className={classes.pageTitle}>
                <Typography variant='h6' component='div'>
                    {title}
                </Typography>

                <Typography variant='subtitle2' component='div'>
                    {subTitle}
                </Typography>
            </div>
            </div>    
  </Paper>
    )
}

export default PaperHeader
