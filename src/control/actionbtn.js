import { Button, makeStyles } from '@material-ui/core'
import React from 'react'


const useStyle = makeStyles(theme => ({
    root: {
        minWidth: 0,
        margin:theme.spacing(0.5)
      
    },
    secondary: {
        backgroundColor: theme.palette.secondary.light,
        '& .MuiButton-label': {
            color:theme.palette.secondary.main
        }
    },
    primary: {
        backgroundColor: theme.palette.primary.light,
        '& .MuiButton-label': {
            color: theme.palette.primary.main
        }
    }

}));

function Actionbtn(props) {
    const { color, children,...other} = props;
    const classes = useStyle();
    return (
        <Button
        
            className={`${classes.root} ${classes[color]}`
            }
            {...other}
         >
                {children}
        </Button>
    )
}

export default Actionbtn
