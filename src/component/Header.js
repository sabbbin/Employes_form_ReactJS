import { AppBar,Badge,Grid,IconButton,InputBase,makeStyles,Toolbar, withTheme } from '@material-ui/core';
import React from 'react';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import ChatBubbleOUtlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon  from '@material-ui/icons/Search';

const useStyle= makeStyles(theme=>({
    root:{
        backgroundColor: 'white',
        transform: 'translateZ(0)'
    },
    searchinput:{
        opacity:'0.6',
        padding:`0px ${(theme.spacing(1))}px`,
        fontSize:'0.8rem',
        '&:hover':{
            backgroundColor:'red'
        },
        '& .MuiSvgIcon-root':{
            marginRight:'10px'
        }

        }
    
        }
    )
);

function Header() {
    const classes= useStyle();
    return (
       <AppBar position='static' className={classes.root}>
       <Toolbar>
            <Grid container alignItems='center'>
                <Grid item>
                    <InputBase  placeholder='search '
                    className={classes.searchinput}
                    startAdornment={<SearchIcon  fontSize='small'/>}/>
                </Grid>
                <Grid item sm>

                </Grid>
                <Grid >
                    <IconButton>
                        <Badge badgeContent={4} color='primary'>
                            <NotificationsNoneIcon   fontSize='small'/>
                        </Badge>
                    </IconButton>
                    <IconButton>
                        <Badge badgeContent={4} color='secondary'>
                           <ChatBubbleOUtlineIcon   fontSize='small'/>
                        </Badge>
                    </IconButton>
                    <IconButton>
                        <PowerSettingsNewIcon  fontSize='small' />
                    </IconButton>
                </Grid>
            </Grid>
       </Toolbar>
       </AppBar>
    )
}

export default Header
